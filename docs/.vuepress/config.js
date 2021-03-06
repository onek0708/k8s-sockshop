module.exports = {
  title: "Kubernetes + Flagger + Flux + Istio + Sockshop",
  description: "Kubernetes + Flagger + Flux + Istio + Sockshop",
  base: '/k8s-sockshop/',
  head: [
    ['link', { rel: "icon", href: "https://kubernetes.io/images/favicon.png" }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: true,
    repo: 'ruzickap/k8s-sockshop',
    docsDir: 'docs',
    editLinks: true,
    logo: 'https://kubernetes.io/images/favicon.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Links',
        items: [
          { text: 'Flux', link: 'https://fluxcd.io' },
          { text: 'Flagger', link: 'https://flagger.app' },
        ]
      }
    ],
    sidebar: [
      '/',
      '/part-01/',
      '/part-02/',
      '/part-03/',
    ]
  },
  plugins: [
    ['@vuepress/medium-zoom'],
    ['@vuepress/back-to-top'],
    ['reading-progress'],
    ['smooth-scroll'],
    ['seo']
  ]
}
