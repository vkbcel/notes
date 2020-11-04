module.exports = {
  title: '笔记',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    '@vuepress/search',
    'vuepress-plugin-auto-sidebar'
  ],
  themeConfig: {
    repo: 'vkbcel/notes',
    repoLabel: '123',
    lastUpdated: '上次更新',
    smoothScroll: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '未分类', link: '/unclassified/' },
      { text: 'GoLang', link: '/golang/' },
      { text: 'MySQL',
        ariaLabel: 'MySQL Menu',
        items: [
          { text: 'MySQL', link: '/mysql/' },
          { text: '高性能MySQL实战', link: '/mysql/lagou/' },
        ]
      },
      { text: 'Redis', link: '/redis/' }
    ]
  }
}
