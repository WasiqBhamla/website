const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const organizationName = 'WasiqBhamla';
const projectName = 'website';
const userName = 'WasiqB';

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Wasiq Bhamla',
  tagline: 'Open Source Contributor, Mentor and Quality Analyst',
  url: 'https://wasiqbhamla.github.io',
  baseUrl: '/website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: false,
  favicon: 'img/favicon.ico',
  organizationName: organizationName,
  projectName: projectName,
  customFields: {
    user: userName,
  },
  scripts: [],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/theme-classic').Options} */
      ({
        docs: {
          id: 'coteafs-appium',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: 'docs/coteafs-appium',
          routeBasePath: '/projects/coteafs-appium',
          sidebarPath: require.resolve('./docs/coteafs-appium/sidebars.json'),
          editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/`,
        },
        blog: {
          showReadingTime: true,
          editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/blog/`,
          feedOptions: {
            type: 'rss',
            copyright: `Copyright © ${new Date().getFullYear()} Wasiq Bhamla. Built with ❤️ using <a href="https://www.docusaurus.io/">Docusaurus</a>.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        googleAnalytics: {
          trackingID: 'UA-111539609-2',
          anonymizeIP: true,
        },
        gtag: {
          trackingID: 'G-9NJHG7BWSG',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/theme-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: 'img/home_banner.jpg',
      navbar: {
        title: 'Wasiq Bhamla',
        logo: {
          alt: 'Wasiq Logo',
          src: 'img/favicon.ico',
          srcDark: 'img/favicon.ico',
          width: 32,
          height: 32,
        },
        items: [
          {
            position: 'right',
            to: '/projects',
            label: 'Projects',
            items: [
              {
                label: 'coteafs-appium',
                to: '/projects/coteafs-appium',
              },
            ],
          },
          {
            position: 'right',
            to: '/about',
            label: 'About me',
          },
          {
            to: '/blog',
            label: 'Blog Posts',
            position: 'right',
          },
          {
            href: `https://github.com/${userName}`,
            'aria-label': 'GitHub profile',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Follow me',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/wasiqbhamla/',
              },
              {
                label: 'Twitter',
                href: `https://twitter.com/${organizationName}`,
              },
              {
                label: 'GitHub',
                href: `https://github.com/${userName}`,
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/5320558/wasiq-bhamla',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@WasiqB',
              },
              {
                label: 'Sitemap',
                href: '/sitemap.xml',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Projects',
                to: '/projects',
              },
              {
                label: 'Blogs',
                to: '/blog',
              },
              {
                label: 'About me',
                to: '/about',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wasiq Bhamla. Built with ❤️ using <a href="https://www.docusaurus.io/">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'yaml'],
      },
    }),
};
