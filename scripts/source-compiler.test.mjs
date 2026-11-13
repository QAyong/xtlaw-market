import assert from 'node:assert/strict'
import { test } from 'node:test'
import ts from 'typescript'
import { assertCompiledEntries, compiledManifest, sourceImportTransformer } from './source-compiler.mjs'

function compile(code, files, fileName = 'main.ts') {
  return ts.transpileModule(code, {
    fileName,
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, verbatimModuleSyntax: true },
    transformers: { after: [sourceImportTransformer(fileName, new Set(files))] },
  }).outputText
}

test('source plugin views point at emitted JavaScript and preserve view metadata and the input manifest', () => {
  const manifest = {
    format: 'source', entry: 'main.ts',
    contributes: { views: [{ id: 'cleanup.progress', entry: 'view.ts', resource: 'none' }], commands: [{ id: 'cleanup.run' }] },
  }
  const before = structuredClone(manifest)
  const result = compiledManifest(manifest)
  assert.equal(result.format, 'compiled')
  assert.equal(result.entry, 'main.js')
  assert.deepEqual(result.contributes.views, [{ id: 'cleanup.progress', entry: 'view.js', resource: 'none' }])
  assert.deepEqual(result.contributes.commands, manifest.contributes.commands)
  assert.deepEqual(manifest, before)
})

test('declarative sources and compiled packages keep their existing package metadata', () => {
  assert.deepEqual(compiledManifest({ format: 'source', contributes: {} }), { format: 'compiled', contributes: {} })
  const manifest = { format: 'compiled', entry: 'main.js', contributes: { views: [{ entry: 'view.js' }] } }
  assert.equal(compiledManifest(manifest), manifest)
})

test('runtime imports, exports and dynamic imports resolve to packaged modules; type imports disappear', () => {
  const result = compile(`
import type { MissingType } from './type-only'
import { state } from './state'
export { value } from './nested/index.js'
export const later = () => import('./worker.ts')
console.log(state)
`, ['main.ts', 'state.ts', 'nested/index.ts', 'worker.ts'])
  assert.match(result, /from "\.\/state\.js"/)
  assert.match(result, /from "\.\/nested\/index\.js"/)
  assert.match(result, /import\("\.\/worker\.js"\)/)
  assert.doesNotMatch(result, /type-only/)
})

test('missing, external and escaping runtime imports fail before creating a package', () => {
  for (const specifier of ['./missing', 'node:fs', '../outside'])
    assert.throws(() => compile(`import { value } from '${specifier}'; console.log(value)`, ['main.ts']), /module is missing|only relative|escapes/)
})

test('all declared JavaScript entries are checked, including view-only plugins', () => {
  assert.doesNotThrow(() => assertCompiledEntries({ contributes: { views: [{ entry: 'view.js' }] } }, { 'view.js': [] }, 'fixture'))
  assert.throws(() => assertCompiledEntries({ contributes: { views: [{ entry: 'view.ts' }] } }, { 'view.ts': [] }, 'fixture'), /must be JavaScript/)
})

test('a present main entry cannot hide a missing view entry', () => {
  const manifest = { entry: 'main.js', contributes: { views: [{ entry: 'view.js' }] } }
  assert.throws(() => assertCompiledEntries(manifest, { 'main.js': [] }, 'cleanup'), /compiled entry is missing: view\.js/)
  assert.throws(() => assertCompiledEntries(manifest, { 'view.js': [] }, 'cleanup'), /compiled entry is missing: main\.js/)
})

test('mts entries and imports agree with their emitted mjs paths', () => {
  const manifest = compiledManifest({ format: 'source', entry: 'main.mts', contributes: { views: [{ entry: 'view.mts' }] } })
  assert.equal(manifest.entry, 'main.mjs')
  assert.equal(manifest.contributes.views[0].entry, 'view.mjs')
  assert.match(compile(`import { state } from './state.mjs'; console.log(state)`, ['main.mts', 'state.mts'], 'main.mts'), /from "\.\/state\.mjs"/)
})
