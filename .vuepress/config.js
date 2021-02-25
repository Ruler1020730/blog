module.exports = {
  title: '',
  description: '',
  dest: 'dist',
  base: '/blog/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/Ruler1020730',
            icon: 'reco-github',
          },
        ],
      },
    ],
    sidebar: {
      // '/docs/theme-reco/': ['', 'theme', 'plugin', 'api'],
    },
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '分类',
      },
      tag: {
        location: 3,
        text: '标签',
      },
    },
    friendLink: [
      // {
      //   title: 'Ruler1020730',
      //   desc: 'Enjoy when you can, and endure when you must.',
      //   email: '2829926662@qq.com',
      //   link: 'https://www.recoluan.com',
      // },
      // {
      //   title: 'vuepress-theme-reco',
      //   desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      //   avatar:
      //     'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
      //   link: 'https://vuepress-theme-reco.recoluan.com',
      // },
    ],
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'Ruler1020730',
    authorAvatar: '/avatar.png',
    record: 'xxxx',
    startYear: '2021',
  },
  markdown: {
    lineNumbers: true,
  },
};
