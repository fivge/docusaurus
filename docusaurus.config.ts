import { themes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { EnumChangefreq } from 'sitemap';

const config: Config = {
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
      theme: themes.github,
      darkTheme: themes.dracula,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    themeConfig: {
      metadata: [{ name: 'keywords', content: 'blog, 个人博客, 0x64.ml, 0x64.in' }],
      // TODO: add more languages
      // https://github.com/FormidableLabs/prism-react-renderer/blob/prism-react-renderer%402.1.0/packages/generate-prism-languages/index.ts#L9
      prism: {
        additionalLanguages: ['bash', 'diff', 'json'],
      },
    },
    algolia: {
      appId: 'W0JJ03F6GB',
      apiKey: '19c6df7c72e432a11e288ef75ae76ef5',
      indexName: '0x64',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-GREPWZ9VPP',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-PWVWLN3',
        },
        sitemap: {
          changefreq: EnumChangefreq.WEEKLY,
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],
};

export default config;
