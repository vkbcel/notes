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
    lastUpdated: '上次更新',
    smoothScroll: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/' }
    ]
  }
}
