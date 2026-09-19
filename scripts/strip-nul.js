// Strip stray NUL bytes from the built HTML.
//
// Docusaurus 3.5.2 occasionally writes a run of one or two 0x00 bytes into the
// middle of a multi-byte string when it emits the Chinese pages, e.g.
//
//     <h3>交换机、路\0\0由器与计算节点三合一</h3>
//
// The bytes are inserted, not substituted: no character is lost, and removing
// them restores the intended text exactly. Only /zh/ is affected, because it is
// the only locale whose text is multi-byte throughout.
//
// A NUL is never valid in an HTML document. Browsers drop it, but it makes the
// file count as binary for grep, file(1) and some crawlers, so we clean it up
// here rather than shipping it. This runs before llms-full.js so the generated
// text files are built from clean HTML.
//
// If a future Docusaurus upgrade fixes the underlying bug, this script becomes a
// no-op and can be removed.

const fs = require('fs');
const path = require('path');

const BUILD = path.join(__dirname, '..', 'build');

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
  });
}

if (!fs.existsSync(BUILD)) {
  console.error('[strip-nul] no build directory, nothing to do');
  process.exit(0);
}

let files = 0;
let removed = 0;

for (const file of walk(BUILD)) {
  const buf = fs.readFileSync(file);
  let n = 0;
  for (const b of buf) if (b === 0) n++;
  if (!n) continue;
  const cleaned = buf.filter((b) => b !== 0);
  if (Buffer.from(cleaned).toString('utf8').includes('�')) {
    console.error(`[strip-nul] ${path.relative(BUILD, file)} is not valid UTF-8 after stripping, left untouched`);
    continue;
  }
  fs.writeFileSync(file, Buffer.from(cleaned));
  files++;
  removed += n;
}

console.log(`[strip-nul] removed ${removed} NUL byte(s) from ${files} file(s)`);
