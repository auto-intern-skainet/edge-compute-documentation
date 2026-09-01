// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'skAInet Edge-Compute',
  tagline:
    'Programmable M12-PoE switch, router, and compute module for industrial edge applications.',
  favicon: 'img/favicon.png',

  url: 'https://edge-compute.skainet.io',
  baseUrl: '/',

  organizationName: 'auto-intern-skainet',
  projectName: 'edge-compute-documentation',
  trailingSlash: false,

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'llms-txt', type: 'text/plain', href: '/llms.txt'},
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
            logo: 'https://edge-compute.skainet.io/img/skainet-logo-weiss.png',
            address: {'@type': 'PostalAddress', addressCountry: 'DE'},
            sameAs: ['https://www.skainet.io', 'https://github.com/auto-intern-skainet'],
          },
          {
            '@type': 'Brand',
            '@id': 'https://www.skainet.io/#brand',
            name: 'skAInet',
            url: 'https://www.skainet.io',
            logo: 'https://edge-compute.skainet.io/img/skainet-logo-weiss.png',
          },
          {
            '@type': 'WebSite',
            '@id': 'https://edge-compute.skainet.io/#website',
            name: 'skAInet Edge-Compute',
            url: 'https://edge-compute.skainet.io/',
            publisher: {'@id': 'https://www.auto-intern.de/#organization'},
            inLanguage: ['en', 'de', 'zh-Hans'],
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
    locales: ['en', 'de', 'zh'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en'},
      de: {label: 'Deutsch', htmlLang: 'de'},
      zh: {label: '简体中文', htmlLang: 'zh-Hans'},
    },
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
          {to: '/devices', label: 'Devices', position: 'left'},
          {to: '/applications', label: 'Applications', position: 'left'},
          {to: '/team', label: 'Team & Research', position: 'left'},
          {to: '/contact', label: 'Contact', position: 'left'},
          {type: 'localeDropdown', position: 'right'},
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
              {label: 'PoE Measurement Devices', to: '/devices'},
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
              {label: 'Contact', to: '/contact'},
              {label: 'Imprint / Impressum', to: '/imprint'},
              {label: 'Privacy / Datenschutz', to: '/privacy'},
              {
                label: 'GitHub Issues',
                href: 'https://github.com/auto-intern-skainet/edge-compute-documentation/issues',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Auto-Intern GmbH, Herner Str. 299, 44809 Bochum, Germany · <a href="/imprint">Imprint</a> · <a href="/privacy">Privacy</a> · <a href="/contact">Contact</a>`,
      },
      prism: {
        additionalLanguages: ['bash'],
      },
    }),
};

export default config;
