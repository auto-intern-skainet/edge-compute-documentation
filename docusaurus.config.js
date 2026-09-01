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

  onBrokenLinks: 'throw',
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
