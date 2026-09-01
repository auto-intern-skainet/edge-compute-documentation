// Generates build/llms-full.txt after `docusaurus build`.
//
// llms.txt (static/) is the curated index; llms-full.txt is the full text of
// every page, extracted from the built HTML so that React pages
// (/, /devices, /applications, /team) are included alongside the Markdown
// docs. No dependencies — plain regex extraction is good enough for prose.

const fs = require('fs');
const path = require('path');

const BUILD = path.join(__dirname, '..', 'build');
const SITE = 'https://auto-intern-skainet.github.io/edge-compute-documentation';

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
  });
}

function decode(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n));
}

function extract(html) {
  const title = decode((html.match(/<title[^>]*>([^<]*)<\/title>/) || [, ''])[1])
    .replace(/\s*\|\s*skAInet Edge-Compute\s*$/, '')
    .trim();
  const desc = decode(
    (html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/) || [, ''])[1],
  );
  // Docs pages: the <article> holds the content (skips sidebar and TOC).
  // React pages: everything from the hero <header> to the footer.
  let body = html;
  const articleStart = body.search(/<article/);
  const heroStart = body.search(/<header class="(pageHero|heroBanner)/);
  if (articleStart !== -1) {
    body = body.slice(articleStart).replace(/<\/article>[\s\S]*$/, '');
    const h1 = body.search(/<h1/);
    if (h1 !== -1) body = body.slice(h1); // skip breadcrumbs and mobile TOC
  }
  else if (heroStart !== -1) body = body.slice(heroStart);
  body = body.replace(/<footer[\s\S]*$/, '');
  // Drop the "Edit this page" / pagination chrome of docs pages.
  body = body.replace(/<div class="theme-doc-footer[\s\S]*$/, '');
  // Drop scripts/styles, then keep structure by turning headings into lines.
  body = body
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<h1[^>]*>/g, '\n# ')
    .replace(/<h2[^>]*>/g, '\n## ')
    .replace(/<h3[^>]*>/g, '\n### ')
    .replace(/<\/h[1-6]>/g, '\n')
    .replace(/<li[^>]*>/g, '\n- ')
    .replace(/<\/(p|div|section|article|tr|figcaption|ul|ol)>/g, '\n')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<[^>]+>/g, ' ');
  body = decode(body)
    .replace(/[\u200b\u200c]/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return {title, desc, body};
}

const pages = walk(BUILD)
  .filter((p) => !p.endsWith('404.html'))
  .map((p) => {
    const rel = path.relative(BUILD, p).replace(/\\/g, '/');
    const url =
      rel === 'index.html'
        ? `${SITE}/`
        : `${SITE}/${rel.replace(/\/index\.html$/, '').replace(/\.html$/, '')}`;
    return {url, ...extract(fs.readFileSync(p, 'utf8'))};
  })
  .sort((a, b) => a.url.localeCompare(b.url));

const header = fs.readFileSync(path.join(__dirname, '..', 'static', 'llms.txt'), 'utf8');

const out = [
  header.trim(),
  '',
  '---',
  '',
  '# Full page contents',
  '',
  ...pages.flatMap((pg) => [
    `## ${pg.title || pg.url}`,
    `URL: ${pg.url}`,
    pg.desc ? `Description: ${pg.desc}` : '',
    '',
    pg.body,
    '',
    '---',
    '',
  ]),
].join('\n');

fs.writeFileSync(path.join(BUILD, 'llms-full.txt'), out);
console.log(`[llms-full] wrote build/llms-full.txt (${pages.length} pages, ${(out.length / 1024).toFixed(0)} KB)`);
