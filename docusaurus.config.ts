import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import 'dotenv/config';

const config: Config = {
  title: 'Machinelee',
  tagline: 'Discover the World of AI with',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://machinelee.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/artnoisenik/machinelee/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img\machinelee-social-card.png',
    navbar: {
      title: 'Machinelee',
      logo: {
        alt: 'Machinelee Logo',
        src: 'img/green-smiley-cropped-transparent.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mlSidebar',
          position: 'left',
          label: 'Browse',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/faqs', label: 'FAQs', position: 'left'},
        {
          href: 'https://github.com/artnoisenik/machinelee',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/newsletters/machinelee-7125253234671181825',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: "mailto:"+process.env.EMAIL,
          label: 'Contact',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Machinelee Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
