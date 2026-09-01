// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'skAInet Edge-Compute',
  tagline:
    'Programmable M12-PoE switch, router, and compute module for industrial edge applications.',
  favicon: 'img/favicon.png',

  url: 'https://auto-intern-skainet.github.io',
  baseUrl: '/edge-compute-documentation/',

  organizationName: 'auto-intern-skainet',
  projectName: 'edge-compute-documentation',
  trailingSlash: false,

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'llms-txt', type: 'text/plain', href: '/edge-compute-documentation/llms.txt'},
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://www.auto-intern.de/#organization',
            name: 'Auto-Intern GmbH',
            url: 'https://www.auto-intern.de',
            email: 'info@auto-intern.de',
            logo: 'https://auto-intern-skainet.github.io/edge-compute-documentation/img/skainet-logo-weiss.png',
            address: {'@type': 'PostalAddress', addressCountry: 'DE'},
            sameAs: ['https://www.skainet.io', 'https://github.com/auto-intern-skainet'],
          },
          {
            '@type': 'Brand',
            '@id': 'https://www.skainet.io/#brand',
            name: 'skAInet',
            url: 'https://www.skainet.io',
            logo: 'https://auto-intern-skainet.github.io/edge-compute-documentation/img/skainet-logo-weiss.png',
          },
          {
            '@type': 'WebSite',
            '@id': 'https://auto-intern-skainet.github.io/edge-compute-documentation/#website',
            name: 'skAInet Edge-Compute',
            url: 'https://auto-intern-skainet.github.io/edge-compute-documentation/',
            publisher: {'@id': 'https://www.auto-intern.de/#organization'},
            inLanguage: 'en',
          },
        ],
      }),
    },
  ],

  onBrokenLinks: 'throw',
  // Anchors on React pages (src/pages/*.js, e.g. /applications#panda) are
  // not visible to Docusaurus' anchor checker, which only indexes Markdown
  // headings — so the check produces false positives here.
  onBrokenAnchors: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/auto-intern-skainet/edge-compute-documentation/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      image: 'img/skainet-logo-weiss.png',
      navbar: {
        title: 'Edge-Compute',
        logo: {
          alt: 'skAInet Logo',
          src: 'img/skainet-logo-weiss.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/applications', label: 'Applications', position: 'left'},
          {to: '/team', label: 'Team & Research', position: 'left'},
          {
            href: 'https://www.skainet.io',
            label: 'skainet.io',
            position: 'right',
          },
          {
            href: 'https://github.com/auto-intern-skainet',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Applications', to: '/applications'},
              {label: 'Getting Started', to: '/docs/getting-started'},
              {label: 'Technical Specifications', to: '/docs/specifications'},
              {label: 'Recovery & Maintenance', to: '/docs/recovery'},
            ],
          },
          {
            title: 'Develop',
            items: [
              {
                label: 'Minimal Mapper (C++)',
                href: 'https://github.com/auto-intern-skainet/edge-compute-minimal-mapper_cpp',
              },
              {
                label: 'Minimal Mapper (Python)',
                href: 'https://github.com/auto-intern-skainet/edge-compute-minimal-mapper_python',
              },
              {
                label: 'Minimal Aggregator (Python)',
                href: 'https://github.com/auto-intern-skainet/edge-compute-minimal-aggregator_python',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {label: 'skainet.io', href: 'https://www.skainet.io'},
              {label: 'Auto-Intern GmbH', href: 'https://www.auto-intern.de'},
              {label: 'Team & Research', to: '/team'},
              {label: 'Contact', href: 'mailto:info@auto-intern.de'},
              {label: 'Imprint', href: 'https://skainet.io/imprint/'},
              {
                label: 'GitHub Issues',
                href: 'https://github.com/auto-intern-skainet/edge-compute-documentation/issues',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Auto-Intern GmbH, Germany. · <a href="https://skainet.io/imprint/">Imprint</a>`,
      },
      prism: {
        additionalLanguages: ['bash'],
      },
    }),
};

export default config;
