/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '1+2+3=6',
  url: 'https://doc.0x64.in',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fivge',
  projectName: 'fivge.github.io',
  deploymentBranch: 'master',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '1+2+3=6',
      logo: {
        alt: 'logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/',
          position: 'left',
          label: 'Document',
        },
        {
          href: 'https://memos.0x64.in',
          position: 'left',
          label: 'Memos',
        },
        {
          href: 'https://joplin.0x64.in',
          position: 'left',
          label: 'Joplin',
        },
        {
          href: 'https://shiori.0x64.in',
          position: 'left',
          label: '栞',
        },
        {
          href: 'https://github.com/fivge',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} by fivge | Built with Docusaurus`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    themeConfig: {
      metadata: [{ name: 'keywords', content: 'blog, 个人博客, 0x64.ml, 0x64.in' }],
    },
    algolia: {
      appId: 'W0JJ03F6GB',
      apiKey: '19c6df7c72e432a11e288ef75ae76ef5',
      indexName: '0x64',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-GREPWZ9VPP',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-PWVWLN3',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
};
