<template>
  <div class="catalog-layout">
    <!-- 左侧分类导航 -->
    <aside class="catalog-sidebar" aria-label="工具分类导航">
      <div class="sidebar-header">
        <div class="logo-area">
          <span class="logo-icon">🧰</span>
          <span class="logo-text">工具导航</span>
        </div>
      </div>
      <nav class="category-nav" aria-label="分类列表">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="cat-btn"
          :class="{ active: activeCategory === cat.id }"
          @click="activeCategory = cat.id"
          :aria-current="activeCategory === cat.id ? 'page' : undefined"
        >
          <span class="cat-icon">{{ cat.icon }}</span>
          <span class="cat-label">{{ cat.label }}</span>
          <span class="cat-count">{{ cat.id === 'all' ? tools.length : tools.filter(t => t.cat === cat.id).length }}</span>
        </button>
      </nav>
      <div class="sidebar-footer">
        <div class="stats-mini">
          <span class="stat-item">📦 {{ tools.length }} 个工具</span>
        </div>
      </div>
    </aside>

    <!-- 右侧主内容区 -->
    <main class="catalog-main" id="main-content">
      <!-- Hero 区 -->
      <header class="hero-section">
        <div class="hero-content">
          <div class="hero-badge">🚀 持续更新</div>
          <h1 class="hero-title">
            <span class="title-main">AI工具导航</span>
            <span class="title-sub">发现最实用的AI工具</span>
          </h1>
          <p class="hero-desc">聚合最实用的AI工具与高频下载工具，涵盖AI对话、AI图像生成、AI视频、AI写作、AI办公等分类，帮助快速找到高质量AI工具。</p>
          
          <div class="search-wrapper">
            <div class="search-bar" role="search" aria-label="搜索工具">
              <span class="search-icon">🔍</span>
              <input
                id="tool-search"
                v-model="searchQuery"
                type="search"
                placeholder="搜索工具名称、功能或分类..."
                class="search-input"
                autocomplete="off"
                aria-controls="tools-grid"
              />
              <span v-if="searchQuery" class="search-clear" @click="searchQuery = ''" role="button" tabindex="0" @keydown.enter="searchQuery = ''" aria-label="清除搜索">✕</span>
            </div>
          </div>

          <!-- 筛选信息 -->
          <div class="filter-info" aria-live="polite">
            <span v-if="searchQuery">
              找到 <strong class="highlight">{{ displayedTools.length }}</strong> 个与「{{ searchQuery }}」相关的工具
            </span>
            <span v-else-if="activeCategory !== 'all'">
              {{ catName(activeCategory) }}分类 · <strong class="highlight">{{ filteredTools.length }}</strong> 个工具
            </span>
            <span v-else>
              共收录 <strong class="highlight">{{ tools.length }}</strong> 个精选工具
            </span>
          </div>
        </div>
        <div class="hero-decoration">
          <div class="deco-circle deco-1"></div>
          <div class="deco-circle deco-2"></div>
          <div class="deco-circle deco-3"></div>
        </div>
      </header>

      <!-- 快速标签筛选 -->
      <div class="quick-tags">
        <button 
          v-for="tag in ['免费', '开源', '国产', '付费']" 
          :key="tag"
          class="quick-tag"
          @click="searchQuery = tag"
        >
          {{ tag }}
        </button>
      </div>

      <!-- 卡片网格 -->
      <section
        id="tools-grid"
        class="tools-grid"
        :aria-label="`${displayedTools.length}个AI工具`"
      >
        <a
          v-for="tool in displayedTools"
          :key="tool.id"
          :href="tool.url"
          target="_blank"
          rel="noopener noreferrer"
          class="tool-card"
          :title="`访问${tool.name}：${tool.desc}，${tool.tag}`"
        >
          <div class="card-glow"></div>
          <div class="card-header">
            <span class="card-icon">{{ catIcon(tool.cat) }}</span>
            <span class="card-tag" :class="tagClass(tool.tag)">{{ tool.tag }}</span>
          </div>
          <h2 class="card-name">{{ tool.name }}</h2>
          <p class="card-desc">{{ tool.desc }}</p>
          <div class="card-footer">
            <span class="card-cat">
              <span>{{ catName(tool.cat) }}</span>
            </span>
            <span class="card-arrow">访问 →</span>
          </div>
        </a>
      </section>

      <!-- 空状态 -->
      <div v-if="displayedTools.length === 0" class="empty-state">
        <div class="empty-icon">🔍</div>
        <p>没有找到相关工具，请尝试其他关键词</p>
      </div>

      <!-- 全部工具列表（搜索引擎可见） -->
      <noscript>
        <section class="noscript-list" aria-label="全部AI工具列表（JavaScript禁用）">
          <h2>全部AI工具</h2>
          <ul>
            <li v-for="tool in tools" :key="tool.id">
              <a :href="tool.url" target="_blank" rel="noopener noreferrer">{{ tool.name }}</a>
              <span> - {{ tool.desc }}</span>
              <span> [{{ catName(tool.cat) }}]</span>
            </li>
          </ul>
        </section>
      </noscript>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('all')
const searchQuery = ref('')

const categories = [
  { id: 'all', label: '全部', icon: '🏠' },
  { id: 'chatbot', label: 'AI对话', icon: '💬' },
  { id: 'image', label: 'AI图像', icon: '🎨' },
  { id: 'video', label: 'AI视频', icon: '🎬' },
  { id: 'writing', label: 'AI写作', icon: '✍️' },
  { id: 'audio', label: 'AI音频', icon: '🎵' },
  { id: 'office', label: 'AI办公', icon: '📊' },
  { id: 'browser', label: '浏览器', icon: '🌐' },
  { id: 'download', label: '下载工具', icon: '📥' },
  { id: 'system', label: '系统工具', icon: '🛠️' },
  { id: 'dev', label: '开发工具', icon: '💻' },
]

const tools = [
  { id: 'chatgpt', name: 'ChatGPT', desc: 'OpenAI 最强对话AI，支持GPT-4和GPT-4o，支持多模态、代码生成、创意写作，全球最流行的AI对话工具。', cat: 'chatbot', url: 'https://chat.openai.com', tag: '免费可用' },
  { id: 'claude', name: 'Claude', desc: 'Anthropic开发的AI助手，以安全性和长文本理解见长，支持100K上下文窗口，适合深度写作和复杂分析。', cat: 'chatbot', url: 'https://claude.ai', tag: '免费额度' },
  { id: 'qianwen', name: '通义千问', desc: '阿里云自研大模型，支持中文深度对话、代码编写、知识问答，由阿里云提供稳定可靠的云端服务。', cat: 'chatbot', url: 'https://qianwen.aliyun.com', tag: '免费可用' },
  { id: 'doubao', name: '豆包', desc: '字节跳动推出的AI助手，支持智能对话、写作辅助、图片生成，集成在抖音和飞书生态中使用便捷。', cat: 'chatbot', url: 'https://www.doubao.com', tag: '免费' },
  { id: 'yiyan', name: '文心一言', desc: '百度基于文心大模型打造的AI对话产品，擅长中文理解和生成，覆盖写作、问答、代码等多种场景。', cat: 'chatbot', url: 'https://yiyan.baidu.com', tag: '免费' },
  { id: 'midjourney', name: 'Midjourney', desc: '当前最强的AI绘画工具之一，通过Discord指令生成精美图像，艺术风格多样，是设计师和创作者的首选。', cat: 'image', url: 'https://www.midjourney.com', tag: '付费' },
  { id: 'sd', name: 'Stable Diffusion', desc: '开源免费AI图像生成模型，可在本地部署，支持LoRA定制和ControlNet精确控制，社区生态极其丰富。', cat: 'image', url: 'https://stability.ai', tag: '免费开源' },
  { id: 'dalle', name: 'DALL-E 3', desc: 'OpenAI发布的图像生成模型，理解复杂提示词的能力极强，生成的图像细节丰富、文字渲染准确。', cat: 'image', url: 'https://openai.com/dall-e-3', tag: '付费' },
  { id: 'wanx', name: '通义万相', desc: '阿里云AI绘画工具，支持文生图、图生图和风格迁移，提供多个艺术风格模板，免费额度充足。', cat: 'image', url: 'https://wanx.alibaba.com', tag: '免费额度' },
  { id: 'yige', name: '文心一格', desc: '百度AI绘画平台，中文提示词理解优秀，支持多种画风和尺寸，适合国内用户快速生成AI艺术作品。', cat: 'image', url: 'https://yige.baidu.com', tag: '免费' },
  { id: 'sora', name: 'Sora', desc: 'OpenAI发布的AI视频生成模型，可根据文本描述生成最长60秒的高清视频，当前处于测试阶段。', cat: 'video', url: 'https://openai.com/sora', tag: '测试中' },
  { id: 'runway', name: 'Runway', desc: 'AI视频编辑与生成平台，支持视频抠像、运动追踪、文生视频等功能，被广泛应用于影视制作领域。', cat: 'video', url: 'https://runwayml.com', tag: '付费' },
  { id: 'pika', name: 'Pika', desc: '新兴AI视频生成工具，操作简单，支持图生视频和文生视频，生成的视频流畅自然，适合创作者使用。', cat: 'video', url: 'https://pika.art', tag: '免费试用' },
  { id: 'zenvideo', name: '腾讯智影', desc: '腾讯推出的AI视频编辑工具，支持数字人播报、智能剪辑、字幕生成等功能，深度集成腾讯生态。', cat: 'video', url: 'https://zenvideo.qq.com', tag: '免费' },
  { id: 'notion-ai', name: 'Notion AI', desc: 'Notion内置的AI写作助手，在笔记和文档中直接调用AI，支持续写、总结、翻译、润色等功能。', cat: 'writing', url: 'https://notion.so', tag: '付费' },
  { id: 'copyai', name: 'Copy.ai', desc: 'AI营销文案生成工具，支持广告文案、社交帖子、邮件模板等多种内容类型，帮助快速产出高质量文案。', cat: 'writing', url: 'https://copy.ai', tag: '免费试用' },
  { id: 'xiezuocat', name: '秘塔写作猫', desc: '中文AI写作辅助工具，支持文章续写、错别字纠正、文风改写，全中文界面，适合中文内容创作者。', cat: 'writing', url: 'https://xiezuocat.com', tag: '免费' },
  { id: 'xfwriting', name: '讯飞写作', desc: '科大讯飞AI写作工具，支持多语种写作、语音输入转文字、会议记录整理，语音识别准确率高。', cat: 'writing', url: 'https://writing.iciba.com', tag: '免费' },
  { id: 'elevenlabs', name: 'ElevenLabs', desc: 'AI语音克隆和文字转语音工具，生成的语音自然逼真，支持28种语言和多种声音风格。', cat: 'audio', url: 'https://elevenlabs.io', tag: '免费试用' },
  { id: 'jianying', name: '剪映', desc: '字节跳动推出的视频剪辑工具，内置AI配音、智能字幕、画面优化等功能，零基础也能快速上手。', cat: 'audio', url: 'https://www.jianying.com', tag: '免费' },
  { id: 'iflyrec', name: '讯飞听见', desc: '科大讯飞语音识别服务，支持实时语音转文字、会议录音转写，多语言识别准确率行业领先。', cat: 'audio', url: 'https://www.iflyrec.com', tag: '免费额度' },
  { id: 'gamma', name: 'Gamma', desc: 'AI生成PPT和演示文稿工具，输入主题即可生成完整幻灯片，支持自定义样式和在线协作演示。', cat: 'office', url: 'https://gamma.app', tag: '免费试用' },
  { id: 'beautifulai', name: 'Beautiful.ai', desc: 'AI演示文稿工具，自动优化排版和设计，节省大量PPT制作时间，生成的演示效果专业美观。', cat: 'office', url: 'https://www.beautiful.ai', tag: '付费' },
  { id: 'tome', name: 'Tome', desc: 'AI幻灯片生成工具，以叙事为中心，支持嵌入3D模型、视频和网页，适合讲故事的产品演示。', cat: 'office', url: 'https://tome.app', tag: '免费试用' },
  { id: 'chrome', name: 'Chrome', desc: 'Google推出的全球使用最广泛的浏览器，基于Chromium内核，性能强劲，支持丰富的扩展程序生态。', cat: 'browser', url: 'https://www.google.com/chrome', tag: '免费' },
  { id: 'edge', name: 'Edge', desc: '微软基于Chromium内核的浏览器，Windows系统预装，支持IE兼容模式和丰富的内置功能。', cat: 'browser', url: 'https://www.microsoft.com/edge', tag: '免费' },
  { id: 'firefox', name: 'Firefox', desc: 'Mozilla推出的开源浏览器，注重用户隐私保护，不使用Chromium内核，支持高度自定义界面。', cat: 'browser', url: 'https://www.mozilla.org/firefox', tag: '免费' },
  { id: 'idm', name: 'IDM', desc: 'Internet Download Manager，Windows最强下载管理器，支持多线程、断点续传、视频抓取，下载速度极快。', cat: 'download', url: 'https://www.internetdownloadmanager.com', tag: '付费' },
  { id: 'motrix', name: 'Motrix', desc: '免费开源的全能下载器，支持HTTP、BT、磁力链、网盘下载，界面简洁清新，支持Aria2后端。', cat: 'download', url: 'https://motrix.app', tag: '免费开源' },
  { id: 'adm', name: 'ADM', name: 'Advanced Download Manager，安卓平台高效下载工具，支持多线程加速、断点续传，替代手机内置下载器。', cat: 'download', url: 'https://play.google.com/store/apps/details?id=com.modess.motrix', tag: '免费' },
  { id: 'potplayer', name: 'Potplayer', desc: 'Windows平台最强视频播放器，支持几乎所有音视频格式，字幕加载、倍速播放、功能定制能力极强。', cat: 'system', url: 'https://potplayer.daum.net', tag: '免费' },
  { id: '7zip', name: '7-Zip', desc: '免费开源压缩工具，支持ZIP、RAR、7z等格式，解压速度快，内存占用小，无广告无捆绑。', cat: 'system', url: 'https://www.7-zip.org', tag: '免费开源' },
  { id: 'everything', name: 'Everything', desc: 'Windows文件搜索神器，基于NTFS索引技术，搜索速度极快，输入即显示结果，定位文件从未如此高效。', cat: 'system', url: 'https://www.voidtools.com', tag: '免费' },
  { id: 'snipaste', name: 'Snipaste', desc: '截图+贴图工具，支持截图、标注、贴图到屏幕最前端，无需切换窗口，是提升效率的截图利器。', cat: 'system', url: 'https://www.snipaste.com', tag: '免费' },
  { id: 'vscode', name: 'VS Code', desc: '微软开源代码编辑器，支持多语言、智能补全、Git集成、扩展市场，程序员必备的开发工具。', cat: 'dev', url: 'https://code.visualstudio.com', tag: '免费开源' },
  { id: 'git', name: 'Git', desc: '分布式版本控制系统，管理代码变更、支持多人协作，是现代软件开发中不可或缺的版本管理工具。', cat: 'dev', url: 'https://git-scm.com', tag: '免费开源' },
  { id: 'docker', name: 'Docker', desc: '容器化平台，将应用及其依赖打包成容器运行，实现环境一致性，是DevOps和微服务的基础设施。', cat: 'dev', url: 'https://www.docker.com', tag: '免费' },
]

const filteredTools = computed(() =>
  activeCategory.value === 'all'
    ? tools
    : tools.filter(t => t.cat === activeCategory.value)
)

const displayedTools = computed(() =>
  searchQuery.value
    ? tools.filter(t =>
        t.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        t.desc.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        catName(t.cat).toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    : filteredTools.value
)

const catName = (id) => categories.find(c => c.id === id)?.label || ''
const catIcon = (id) => categories.find(c => c.id === id)?.icon || '📁'

const tagClass = (tag) => {
  if (tag.includes('免费开源')) return 'tag-f oss'
  if (tag.includes('免费')) return 'tag-free'
  if (tag.includes('付费')) return 'tag-paid'
  if (tag.includes('测试')) return 'tag-beta'
  return 'tag-trial'
}
</script>

<style scoped>
/* 无障碍：屏幕阅读器专用 */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.catalog-layout {
  display: flex;
  min-height: calc(100vh - var(--vp-nav-height) - 80px);
  gap: 0;
  margin: 0;
  padding: 0;
}

/* ========== 左侧边栏 ========== */
.catalog-sidebar {
  width: 240px;
  min-width: 240px;
  background: linear-gradient(180deg, var(--vp-c-bg-soft) 0%, var(--vp-c-bg) 100%);
  border-right: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: calc(var(--vp-nav-height) + 24px);
  height: calc(100vh - var(--vp-nav-height) - 48px);
  overflow-y: auto;
  border-radius: 16px;
  margin: 24px 0 24px 24px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.04);
}

.sidebar-header {
  padding: 24px 20px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  font-size: 28px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.logo-text {
  font-size: 18px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.category-nav {
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.cat-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: none;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  color: var(--vp-c-text-1);
  text-align: left;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.cat-btn::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) scaleY(0);
  width: 3px;
  height: 60%;
  background: var(--vp-c-brand-1);
  border-radius: 0 2px 2px 0;
  transition: transform 0.2s;
}

.cat-btn:hover { 
  background: var(--vp-c-bg-elv); 
}

.cat-btn.active { 
  background: linear-gradient(135deg, rgba(30,136,229,0.15), rgba(30,136,229,0.05)); 
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.cat-btn.active::before {
  transform: translateY(-50%) scaleY(1);
}

.cat-btn.active .cat-count { 
  background: var(--vp-c-brand-1); 
  color: #fff; 
}

.cat-icon { 
  font-size: 18px; 
  width: 28px; 
  text-align: center;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));
}

.cat-label { flex: 1; }

.cat-count { 
  font-size: 11px; 
  background: var(--vp-c-bg-elv); 
  color: var(--vp-c-text-2); 
  padding: 2px 8px; 
  border-radius: 12px;
  font-weight: 500;
}

.sidebar-footer { 
  padding: 16px 20px; 
  border-top: 1px solid var(--vp-c-divider); 
}

.stats-mini {
  display: flex;
  justify-content: center;
}

.stat-item {
  font-size: 13px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-elv);
  padding: 6px 14px;
  border-radius: 20px;
}

/* ========== 右侧主区 ========== */
.catalog-main {
  flex: 1;
  padding: 24px 32px;
  max-width: calc(100% - 240px - 24px);
}

/* ========== Hero 区 ========== */
.hero-section {
  position: relative;
  background: linear-gradient(135deg, 
    rgba(30,136,229,0.08) 0%, 
    rgba(156,39,176,0.06) 50%, 
    rgba(30,136,229,0.04) 100%);
  border-radius: 20px;
  padding: 40px 48px;
  margin-bottom: 32px;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(30,136,229,0.3);
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0 0 12px;
}

.title-main {
  font-size: 40px;
  font-weight: 800;
  color: var(--vp-c-text-1);
  letter-spacing: -1px;
  line-height: 1.1;
}

.title-sub {
  font-size: 18px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.hero-desc {
  font-size: 15px;
  color: var(--vp-c-text-2);
  margin: 0 0 24px;
  line-height: 1.7;
  max-width: 600px;
}

/* 搜索栏 */
.search-wrapper {
  max-width: 560px;
  margin-bottom: 16px;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--vp-c-bg);
  border: 2px solid transparent;
  border-radius: 14px;
  padding: 14px 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.search-bar:focus-within { 
  border-color: var(--vp-c-brand-1); 
  box-shadow: 0 4px 24px rgba(30,136,229,0.15);
  transform: translateY(-1px);
}

.search-icon { 
  font-size: 20px; 
  opacity: 0.5;
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 15px;
  color: var(--vp-c-text-1);
  outline: none;
}

.search-input::placeholder { color: var(--vp-c-text-3); }

.search-clear {
  font-size: 14px;
  color: var(--vp-c-text-3);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.15s;
}

.search-clear:hover { 
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-elv);
}

/* 筛选信息 */
.filter-info {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.filter-info .highlight {
  color: var(--vp-c-brand-1);
  font-weight: 700;
  background: linear-gradient(120deg, rgba(30,136,229,0.1) 0%, rgba(30,136,229,0.2) 100%);
  padding: 2px 8px;
  border-radius: 4px;
}

/* 装饰元素 */
.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
}

.deco-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 70%);
  top: -100px;
  right: -50px;
  animation: float 8s ease-in-out infinite;
}

.deco-2 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(156,39,176,0.1) 0%, transparent 70%);
  bottom: -50px;
  left: 20%;
  animation: float 10s ease-in-out infinite reverse;
}

.deco-3 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(30,136,229,0.08) 0%, transparent 70%);
  top: 30%;
  right: 30%;
  animation: float 12s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}

/* ========== 快速标签 ========== */
.quick-tags {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.quick-tag {
  padding: 8px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}

.quick-tag:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: rgba(30,136,229,0.05);
}

/* ========== 卡片网格 ========== */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.tool-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.tool-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  transform: scaleX(0);
  transition: transform 0.3s;
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(30,136,229,0.15);
  border-color: rgba(30,136,229,0.3);
}

.tool-card:hover::before {
  transform: scaleX(1);
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(30,136,229,0.03) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.tool-card:hover .card-glow {
  opacity: 1;
}

.card-header { 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  margin-bottom: 14px; 
}

.card-icon { 
  font-size: 32px; 
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.card-tag {
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: 600;
}

.tag-free, .tag-foss { 
  background: linear-gradient(135deg, #dcfce7, #bbf7d0); 
  color: #16a34a; 
}

.tag-paid { 
  background: linear-gradient(135deg, #fee2e2, #fecaca); 
  color: #dc2626; 
}

.tag-trial { 
  background: linear-gradient(135deg, #fef9c3, #fef08a); 
  color: #ca8a04; 
}

.tag-beta { 
  background: linear-gradient(135deg, #e0e7ff, #c7d2fe); 
  color: #4f46e5; 
}

.card-name {
  font-size: 18px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 8px;
}
.card-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin: 0 0 16px;
  flex: 1;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer { 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  margin-top: auto; 
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-divider);
}

.card-cat { 
  font-size: 12px; 
  color: var(--vp-c-text-3); 
}

.card-arrow { 
  font-size: 13px; 
  color: var(--vp-c-brand-1); 
  font-weight: 600;
  transition: all 0.2s;
}

.tool-card:hover .card-arrow { 
  transform: translateX(4px); 
}

/* ========== 空状态 ========== */
.empty-state { 
  text-align: center; 
  padding: 80px 20px; 
  color: var(--vp-c-text-3); 
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
}

/* noscript降级 */
.noscript-list { background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 24px; margin-top: 32px; }
.noscript-list h2 { font-size: 20px; margin: 0 0 16px; }
.noscript-list ul { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 8px; }
.noscript-list li { padding: 6px 0; border-bottom: 1px solid var(--vp-c-divider); }
.noscript-list li:last-child { border-bottom: none; }
.noscript-list a { color: var(--vp-c-brand-1); font-weight: 600; }

/* ========== 移动端 ========== */
@media (max-width: 768px) {
  .catalog-layout { flex-direction: column; }
  
  .catalog-sidebar {
    width: 100%; 
    min-width: unset; 
    height: auto; 
    position: static;
    border-right: none; 
    border-bottom: 1px solid var(--vp-c-divider);
    overflow-x: auto; 
    margin: 0; 
    border-radius: 0;
    box-shadow: none;
  }
  
  .category-nav { 
    flex-direction: row; 
    overflow-x: auto; 
    padding: 12px; 
    gap: 6px; 
    flex-wrap: nowrap; 
  }
  
  .cat-btn { 
    white-space: nowrap; 
    flex-shrink: 0; 
    padding: 8px 14px;
  }
  
  .sidebar-footer, .sidebar-header { display: none; }
  
  .catalog-main { 
    max-width: 100%; 
    padding: 16px; 
  }
  
  .hero-section {
    padding: 24px 20px;
    border-radius: 16px;
  }
  
  .title-main {
    font-size: 28px;
  }
  
  .title-sub {
    font-size: 15px;
  }
  
  .tools-grid { 
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); 
    gap: 14px; 
  }
  
  .tool-card {
    padding: 16px;
  }
  
  .card-name {
    font-size: 16px;
  }
  
  .card-desc {
    font-size: 12px;
    -webkit-line-clamp: 2;
  }
}
</style>
