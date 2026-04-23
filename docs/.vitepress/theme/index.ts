import DefaultTheme from 'vitepress/theme'
import HomeCatalog from './components/HomeCatalog.vue'
import './styles/tool-detail.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeCatalog', HomeCatalog)
  },
  setup() {
    if (typeof window !== 'undefined') {
      const injectStructuredData = () => {
        const websiteSchema = {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'AI工具导航',
          url: 'https://tool.skillxm.cn',
          description: '聚合最实用的AI工具与高频下载工具，涵盖AI对话、AI图像生成、AI视频、AI写作、AI办公等分类。',
          inLanguage: 'zh-CN',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://tool.skillxm.cn/?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }

        const existingScript = document.querySelector('script[type="application/ld+json"]')
        if (!existingScript) {
          const script = document.createElement('script')
          script.type = 'application/ld+json'
          script.textContent = JSON.stringify(websiteSchema)
          document.head.appendChild(script)
        }
      }

      // Use VitePress router hook
      import('vitepress').then(({ useRoute }) => {
        const route = useRoute()
        if (route.path === '/') {
          injectStructuredData()
        }
      }).catch(() => {
        injectStructuredData()
      })
    }
  }
}
