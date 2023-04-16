/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '1+2+3=6',
  url: 'https://0x64.ml',
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
          trackingID: 'G-LYJV7VY9CK',
          anonymizeIP: true,
        },
        googleAnalytics: {
          trackingID: 'G-LYJV7VY9CK',
          anonymizeIP: true,
        },
      },
    ],
  ],
};
