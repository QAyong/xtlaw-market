import assert from 'node:assert/strict'
import { posix } from 'node:path'
import ts from 'typescript'

export const sourceOutputPath = name => name.replace(/\.(m?)ts$/, '.$1js')

export function compiledManifest(manifest) {
  if (manifest.format !== 'source')
    return manifest
  const compiled = { ...manifest, format: 'compiled' }
  if (manifest.entry)
    compiled.entry = sourceOutputPath(manifest.entry)
  if (manifest.contributes?.views) {
    compiled.contributes = {
      ...manifest.contributes,
      views: manifest.contributes.views.map(view => ({ ...view, entry: sourceOutputPath(view.entry) })),
    }
  }
  return compiled
}

export function assertCompiledEntries(manifest, output, name) {
  for (const entry of [manifest.entry, ...(manifest.contributes?.views ?? []).map(view => view.entry)].filter(Boolean)) {
    assert(/\.m?js$/.test(entry), `${name}: compiled entry must be JavaScript: ${entry}`)
    assert(Object.hasOwn(output, entry), `${name}: compiled entry is missing: ${entry}`)
  }
}

// Resolve source imports against the package, then emit the corresponding JavaScript path.
export function sourceImportTransformer(importer, packageFiles) {
  function emittedSpecifier(value) {
    assert(value.startsWith('./') || value.startsWith('../'), `${importer}: only relative module imports are allowed: ${value}`)
    const requested = posix.normalize(posix.join(posix.dirname(importer), value))
    assert(!requested.startsWith('../') && !posix.isAbsolute(requested), `${importer}: import escapes the package: ${value}`)
    const alternatives = [
      requested,
      ...['.ts', '.js', '.mts', '.mjs'].map(extension => requested + extension),
      ...['index.ts', 'index.js', 'index.mts', 'index.mjs'].map(index => posix.join(requested, index)),
      requested.replace(/\.js$/, '.ts'),
      requested.replace(/\.mjs$/, '.mts'),
    ]
    const target = alternatives.find(candidate => packageFiles.has(candidate) && /\.(?:ts|mts|js|mjs)$/.test(candidate) && !/\.d\.[cm]?ts$/.test(candidate))
    assert(target, `${importer}: module is missing: ${value}`)
    const relative = posix.relative(posix.dirname(sourceOutputPath(importer)), sourceOutputPath(target))
    return relative.startsWith('.') ? relative : `./${relative}`
  }

  return context => (source) => {
    const visit = (node) => {
      if (ts.isImportDeclaration(node) && node.moduleSpecifier) {
        assert(ts.isStringLiteral(node.moduleSpecifier), `${importer}: import must use a literal path`)
        return ts.factory.updateImportDeclaration(node, node.modifiers, node.importClause, ts.factory.createStringLiteral(emittedSpecifier(node.moduleSpecifier.text)), node.attributes)
      }
      if (ts.isExportDeclaration(node) && node.moduleSpecifier) {
        assert(ts.isStringLiteral(node.moduleSpecifier), `${importer}: export must use a literal path`)
        return ts.factory.updateExportDeclaration(node, node.modifiers, node.isTypeOnly, node.exportClause, ts.factory.createStringLiteral(emittedSpecifier(node.moduleSpecifier.text)), node.attributes)
      }
      if (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword) {
        const [argument] = node.arguments
        assert(node.arguments.length === 1 && argument && ts.isStringLiteral(argument), `${importer}: dynamic import must use one literal path`)
        return ts.factory.updateCallExpression(node, node.expression, node.typeArguments, [ts.factory.createStringLiteral(emittedSpecifier(argument.text))])
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(source, visit)
  }
}
