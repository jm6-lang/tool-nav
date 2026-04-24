import DefaultTheme from 'vitepress/theme'
import HomeCatalog from './components/HomeCatalog.vue'
import './styles/tool-detail.css'
import './styles/footer.css'

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

      // 注入全局页脚
      const injectFooter = () => {
        const existingFooter = document.querySelector('.custom-footer')
        if (existingFooter) return

        const footer = document.createElement('footer')
        footer.className = 'custom-footer'
        footer.innerHTML = `
          <div class="footer-content">
            <div class="footer-brand">
              <span class="footer-logo">AI工具导航</span>
              <p class="footer-desc">聚合最实用的AI工具与高频下载工具</p>
            </div>
            <div class="footer-links">
              <div class="footer-col">
                <h4>快速链接</h4>
                <a href="/">首页</a>
                <a href="/about.html">关于我们</a>
                <a href="/contact.html">联系我们</a>
              </div>
              <div class="footer-col">
                <h4>法律信息</h4>
                <a href="/privacy.html">隐私政策</a>
                <a href="/terms.html">服务条款</a>
              </div>
              <div class="footer-col">
                <h4>关注我们</h4>
                <a href="https://github.com/jm6-lang/tool-nav" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div class="footer-bottom">
              <div class="footer-friendlinks">
                <span class="friendlinks-label">友情链接：</span>
                <a href="https://www.skillxm.cn/" target="_blank" rel="noopener noreferrer">SkillXM</a>
                <a href="https://docs.skillxm.cn" target="_blank" rel="noopener noreferrer">Docs</a>
                <a href="https://ziwei.skillxm.cn" target="_blank" rel="noopener noreferrer">ZiWei</a>
              </div>
              <p>&copy; 2026 AI工具导航 (tool.skillxm.cn) All Rights Reserved.</p>
            </div>
          </div>
        `
        document.body.appendChild(footer)
      }

      // 在 JSON-LD 注入之后调用
      injectFooter()
    }
  }
}
