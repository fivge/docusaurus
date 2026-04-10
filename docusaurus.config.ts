import { themes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { EnumChangefreq } from 'sitemap';

const config: Config = {
  title: '1+2+3=6',
  url: 'https://doc.0x64.in',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  // onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fivge',
  projectName: 'fivge.github.io',
  deploymentBranch: 'master',
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: ['en', 'zh'],
        indexBlog: false,
      },
    ],
  ],
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
          href: 'https://0x64.in',
          position: 'left',
          label: '/',
        },
        {
          href: 'https://memos.0x64.in',
          position: 'left',
          label: 'Memos',
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
  future: {
    v4: true,
    faster: true,
  },
};

export default config;
