// Builds every plugin under plugins/ into a compiled .lexora-extension package
// and regenerates catalog/v1/index.json and catalog/v1/packs.json for the XTLaw plugin market.
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { join, relative } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { zipSync } from 'fflate'
import ts from 'typescript'

const root = fileURLToPath(new URL('..', import.meta.url))
const repository = 'https://github.com/QAyong/xtlaw-market'
const releaseBase = `${repository}/releases/download`
// Fixed timestamp keeps package bytes, and therefore catalog hashes, reproducible.
const mtime = new Date('2026-01-01T00:00:00Z')
// Matches the XTLaw built-in compiler (platform/extensions/compileExtensionSource.ts).
const compilerOptions = { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext, isolatedModules: true, verbatimModuleSyntax: true, sourceMap: false, declaration: false, removeComments: true }
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')

async function listFiles(directory, base = directory) {
  const files = []
  for (const entry of (await readdir(directory, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name, 'en'))) {
    const path = join(directory, entry.name)
    assert(!entry.isSymbolicLink(), `Symbolic links are not allowed: ${path}`)
    if (entry.isDirectory())
      files.push(...await listFiles(path, base))
    else
      files.push(relative(base, path).replaceAll('\\', '/'))
  }
  return files
}

async function buildPlugin(name) {
  const directory = join(root, 'plugins', name)
  const manifest = JSON.parse(await readFile(join(directory, 'extension.json'), 'utf8'))
  assert(['source', 'compiled'].includes(manifest.format), `${name}: expected a source or compiled plugin`)
  // Declarative plugins (for example multi-shell) have no entry; otherwise it must be TypeScript.
  assert(manifest.format !== 'source' || !manifest.entry || /\.m?ts$/.test(manifest.entry), `${name}: expected a TypeScript source entry`)
  const output = {}
  for (const file of await listFiles(directory)) {
    // Type declarations are development-only; sources are replaced by compiled modules.
    if (file.endsWith('.d.ts') || file === 'extension.json' || file === 'market.json')
      continue
    const bytes = await readFile(join(directory, file))
    if (manifest.format === 'source' && /\.m?ts$/.test(file)) {
      const result = ts.transpileModule(bytes.toString('utf8'), { fileName: file, reportDiagnostics: true, compilerOptions })
      const errors = (result.diagnostics ?? []).filter(item => item.category === ts.DiagnosticCategory.Error)
      assert(errors.length === 0, `${name}/${file}: ${errors.map(item => ts.flattenDiagnosticMessageText(item.messageText, ' ')).join('; ')}`)
      output[file.replace(/\.(m?)ts$/, '.$1js')] = [Buffer.from(result.outputText), { mtime }]
    }
    else {
      output[file] = [bytes, { mtime }]
    }
  }
  const compiled = manifest.format === 'source' ? { ...manifest, format: 'compiled', ...(manifest.entry ? { entry: manifest.entry.replace(/\.(m?)ts$/, '.$1js') } : {}) } : manifest
  const manifestBytes = manifest.format === 'source' ? Buffer.from(`${JSON.stringify(compiled, null, 2)}\n`) : await readFile(join(directory, 'extension.json'))
  output['extension.json'] = [manifestBytes, { mtime }]
  assert(!compiled.entry || output[compiled.entry], `${name}: compiled entry is missing`)
  const bytes = zipSync(output, { level: 6 })
  const file = `${name}-${manifest.version}.lexora-extension`
  await mkdir(join(root, 'dist'), { recursive: true })
  await writeFile(join(root, 'dist', file), bytes)
  const icon = manifest.icon ? output[manifest.icon]?.[0] : null
  assert(!manifest.icon || (icon && manifest.icon.endsWith('.svg') && icon.length <= 65536), `${name}: invalid icon`)
  // market.json is catalog metadata (kind, source), not package content, so it stays out of the archive.
  const market = await readFile(join(directory, 'market.json'), 'utf8').then(JSON.parse, () => ({}))
  return {
    ...(market.kind ? { kind: market.kind } : {}),
    ...(market.source ? { source: market.source } : {}),
    manifest: compiled,
    ...(icon ? { iconUrl: `data:image/svg+xml;base64,${icon.toString('base64')}` } : {}),
    repository,
    artifact: { url: `${releaseBase}/${name}-v${manifest.version}/${file}`, sha256: sha256(bytes), size: bytes.length },
  }
}

const names = (await readdir(join(root, 'plugins'), { withFileTypes: true })).filter(entry => entry.isDirectory()).map(entry => entry.name).sort()
const plugins = []
for (const name of names)
  plugins.push(await buildPlugin(name))
await mkdir(join(root, 'catalog', 'v1'), { recursive: true })
await writeFile(join(root, 'catalog', 'v1', 'index.json'), `${JSON.stringify({ schemaVersion: 1, plugins }, null, 2)}\n`)
// A pack is a list of references to the plugins above, not a package: nothing is built or released for it.
// It goes in its own file because the client's index.json schema is strict and would reject a new key.
const packs = []
for (const file of (await readdir(join(root, 'packs')).catch(() => [])).filter(file => file.endsWith('.json')).sort()) {
  const pack = JSON.parse(await readFile(join(root, 'packs', file), 'utf8'))
  assert.equal(file, `${pack.id}.json`, `${file}: the file name must be the pack id`)
  assert(Array.isArray(pack.includes) && pack.includes.length, `${file}: a pack needs members`)
  for (const id of pack.includes)
    assert(plugins.some(plugin => plugin.manifest.id === id), `${file}: ${id} is not a plugin in this market`)
  packs.push(pack)
}
await writeFile(join(root, 'catalog', 'v1', 'packs.json'), `${JSON.stringify({ schemaVersion: 1, packs }, null, 2)}
`)
for (const plugin of plugins)
  process.stdout.write(`${plugin.manifest.id}@${plugin.manifest.version} ${plugin.artifact.size} bytes sha256=${plugin.artifact.sha256}\n`)
