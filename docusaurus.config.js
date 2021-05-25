/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '0x64',
  url: 'https://0x64.ml',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fivge',
  projectName: 'fivge.github.io',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌚',
        lightIcon: '🌞',
      },
    },
    navbar: {
      title: '1+2+3=6',
      logo: {
        alt: 'logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/init',
          position: 'left',
          label: 'Document',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/fivge',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
      hideOnScroll: true,
    },
    hideableSidebar: true,
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} fivge, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    googleAnalytics: {
      trackingID: 'G-LYJV7VY9CK',
      anonymizeIP: true,
    },
    gtag: {
      trackingID: 'G-LYJV7VY9CK',
      anonymizeIP: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
