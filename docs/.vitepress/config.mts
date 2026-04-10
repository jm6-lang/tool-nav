import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI工具导航 - 最全AI工具与高频下载工具收录',
  description: 'AI工具导航网聚合最实用的AI工具与高频下载工具，涵盖AI对话、AI图像生成、AI视频、AI写作、AI办公等工具导航，帮助用户快速找到高质量AI工具。',
  lang: 'zh-CN',
  lastUpdated: true,

  head: [
    // 基础 Meta
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'author', content: 'tool.skillxm.cn' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['meta', { name: 'keywords', content: 'AI工具导航,AI工具,人工智能工具,ChatGPT,Midjourney,Stable Diffusion,AI写作,AI图像生成,AI视频生成,AI办公工具,免费AI工具,AI对话' }],
    ['meta', { name: 'theme-color', content: '#4F46E5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

    // Open Graph（社交分享）
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'AI工具导航' }],
    ['meta', { property: 'og:title', content: 'AI工具导航 - 最全AI工具与高频下载工具收录' }],
    ['meta', { property: 'og:description', content: '聚合最实用的AI工具与高频下载工具，涵盖AI对话、AI图像、AI视频、AI写作、AI办公等分类，帮助快速找到高质量AI工具。' }],
    ['meta', { property: 'og:url', content: 'https://tool.skillxm.cn/' }],
    ['meta', { property: 'og:image', content: 'https://tool.skillxm.cn/og-image.png' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:locale:alternate', content: 'en_US' }],

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'AI工具导航 - 最全AI工具与高频下载工具收录' }],
    ['meta', { name: 'twitter:description', content: '聚合最实用的AI工具与高频下载工具，涵盖AI对话、AI图像、AI视频、AI写作、AI办公等分类。' }],
    ['meta', { name: 'twitter:image', content: 'https://tool.skillxm.cn/og-image.png' }],

    // 重复内容防护
    ['link', { rel: 'canonical', href: 'https://tool.skillxm.cn/' }],

    // 多语言声明
    ['link', { rel: 'alternate', hreflang: 'zh-CN', href: 'https://tool.skillxm.cn/' }],

    // DNS 预取（国内常用域名）
    ['link', { rel: 'dns-prefetch', href: '//fonts.googleapis.com' }],
    ['link', { rel: 'dns-prefetch', href: '//openai.com' }],
  ],

  themeConfig: {
    siteTitle: 'AI工具导航',

    nav: [
      { text: '首页', link: '/' },
      { text: '💬 AI对话', link: '/ai-tools/chatbot' },
      { text: '🎨 AI图像', link: '/ai-tools/image' },
      { text: '📥 下载工具', link: '/popular-tools/download' },
      { text: '关于', link: '/about' },
    ],

    sidebar: {
      '/ai-tools/': [
        {
          text: 'AI工具分类',
          items: [
            { text: '💬 AI对话', link: '/ai-tools/chatbot' },
            { text: '🎨 AI图像', link: '/ai-tools/image' },
            { text: '🎬 AI视频', link: '/ai-tools/video' },
            { text: '✍️ AI写作', link: '/ai-tools/writing' },
            { text: '🎵 AI音频', link: '/ai-tools/audio' },
            { text: '📊 AI办公', link: '/ai-tools/office' },
          ],
        },
      ],
      '/popular-tools/': [
        {
          text: '热门工具分类',
          items: [
            { text: '🌐 浏览器', link: '/popular-tools/browser' },
            { text: '📥 下载工具', link: '/popular-tools/download' },
            { text: '🛠️ 系统工具', link: '/popular-tools/system' },
            { text: '💻 开发工具', link: '/popular-tools/dev' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jm6-lang/tool-nav' },
    ],

    outline: false,
  },

  markdown: {
    lineNumbers: false,
  },
})
