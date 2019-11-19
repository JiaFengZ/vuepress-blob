module.exports = {
  title: 'jf blob',
  description: 'jf的blob',
  head: [
    ['link', { rel: 'icon', href: '/blob.jpg' }],
  ],
  markdown: {
    lineNumbers: true
  },
  serviceWorker: true,
  themeConfig: {
    logo: '/blob.jpg',
    lastUpdated: 'lastUpdate',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '分类',
        ariaLabel: '分类',
        items: [
          { text: 'react', link: '/pages/react/react.md' },
          { text: 'vue', link: '/pages/vue/vue.md' },
        ]
      },
      { text: 'Github', link: 'https://github.com/jiaFengZ' },
    ],
    sidebar: {
      '/pages/react/': [
        {
          title: 'react',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['react.md', 'react'],
          ]
        }
      ],
      '/pages/vue/': [
        {
          title: 'vue',
          collapsable: true,
          children: [
            ['vue.md', 'vue']
          ]
        }
      ]
    }
  }
}