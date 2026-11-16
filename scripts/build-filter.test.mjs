import assert from 'node:assert/strict'
import { execFileSync, spawnSync } from 'node:child_process'
import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))

test('a scoped build preserves unrelated published metadata and rejects unknown plugins', async () => {
  await mkdir(path.join(root, 'dist'), { recursive: true })
  const fixture = await mkdtemp(path.join(root, 'dist', 'scoped-build-test-'))
  try {
    await mkdir(path.join(fixture, 'scripts'))
    for (const script of ['build.mjs', 'source-compiler.mjs'])
      await cp(path.join(root, 'scripts', script), path.join(fixture, 'scripts', script))
    const original = { manifest: { id: 'tests.other', version: '1.0.0' }, artifact: { url: 'https://example.test/published', sha256: 'a'.repeat(64), size: 42 } }
    await mkdir(path.join(fixture, 'catalog/v1'), { recursive: true })
    await writeFile(path.join(fixture, 'catalog/v1/index.json'), JSON.stringify({ schemaVersion: 1, plugins: [original] }))
    for (const name of ['selected', 'other']) {
      const directory = path.join(fixture, 'plugins', name)
      await mkdir(directory, { recursive: true })
      await writeFile(path.join(directory, 'extension.json'), JSON.stringify({ schemaVersion: 1, format: 'compiled', id: `tests.${name}`, name, version: name === 'selected' ? '2.0.0' : '1.0.0', apiVersion: 4, engines: { lexora: '*' }, entry: 'extension.js' }))
      await writeFile(path.join(directory, 'extension.js'), 'export function activate() {}')
    }
    execFileSync(process.execPath, ['scripts/build.mjs', '--plugin=selected'], { cwd: fixture })
    const catalog = JSON.parse(await readFile(path.join(fixture, 'catalog/v1/index.json'), 'utf8'))
    assert.deepEqual(catalog.plugins.find(plugin => plugin.manifest.id === original.manifest.id), original)
    assert.equal(catalog.plugins.find(plugin => plugin.manifest.id === 'tests.selected').manifest.version, '2.0.0')
    await assert.rejects(readFile(path.join(fixture, 'dist/other-1.0.0.lexora-extension')), { code: 'ENOENT' })
    const invalid = spawnSync(process.execPath, ['scripts/build.mjs', '--plugin=missing'], { cwd: fixture, encoding: 'utf8' })
    assert.notEqual(invalid.status, 0)
    assert.match(invalid.stderr, /Unknown plugin: missing/)
    const after = JSON.parse(await readFile(path.join(fixture, 'catalog/v1/index.json'), 'utf8'))
    assert.deepEqual(after, catalog)
  }
  finally {
    await rm(fixture, { recursive: true, force: true })
  }
})
