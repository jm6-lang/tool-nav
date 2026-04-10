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

          <div class="filter-info" aria-live="polite">
            <span v-if="searchQuery">
              找到 <strong class="highlight">{{ displayedTools.length }}</strong> 个与「{{ searchQuery }}」相关的工具
            </span>
            <span v-else-if="activeCategory !== 'all'">
              {{ catName(activeCategory) }} · <strong class="highlight">{{ filteredTools.length }}</strong> 个工具
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
          @click="searchQuery = searchQuery === tag ? '' : tag"
          :class="{ active: searchQuery === tag }"
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
          :href="`/tools/${tool.id}.html`"
          class="tool-card"
          :title="`查看${tool.name}详细介绍`"
        >
          <div class="card-glow"></div>
          <div class="card-header">
            <span class="card-icon">{{ catIcon(tool.cat) }}</span>
            <span class="card-tag" :class="tagClass(tool.tag)">{{ tool.tag }}</span>
          </div>
          <h2 class="card-name">{{ tool.name }}</h2>
          <p class="card-desc">{{ tool.desc }}</p>
          <div class="card-footer">
            <span class="card-cat">{{ catName(tool.cat) }}</span>
            <span class="card-arrow">查看详情 →</span>
          </div>
        </a>
      </section>

      <!-- 空状态 -->
      <div v-if="displayedTools.length === 0" class="empty-state">
        <div class="empty-icon">🔍</div>
        <p>没有找到相关工具，请尝试其他关键词</p>
      </div>

      <!-- SEO降级内容 -->
      <noscript>
        <section class="noscript-list" aria-label="全部AI工具列表（JavaScript禁用）">
          <h2>全部AI工具</h2>
          <ul>
            <li v-for="tool in tools" :key="tool.id">
              <a :href="`/tools/${tool.id}.html`">{{ tool.name }}</a>
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
  // ===== AI 对话 =====
  { id: 'chatgpt', name: 'ChatGPT', desc: 'OpenAI最强对话AI，支持GPT-4和GPT-4o，多模态、代码生成、创意写作，全球最流行AI工具。', cat: 'chatbot', tag: '免费可用' },
  { id: 'claude', name: 'Claude', desc: 'Anthropic开发，安全性强，支持100K上下文窗口，深度写作和复杂分析首选。', cat: 'chatbot', tag: '免费额度' },
  { id: 'qianwen', name: '通义千问', desc: '阿里云自研大模型，支持中文深度对话、代码编写、知识问答，稳定可靠。', cat: 'chatbot', tag: '免费可用' },
  { id: 'doubao', name: '豆包', desc: '字节跳动AI助手，智能对话、写作辅助、图片生成，集成抖音飞书生态。', cat: 'chatbot', tag: '免费' },
  { id: 'yiyan', name: '文心一言', desc: '百度文心大模型，擅长中文理解生成，覆盖写作、问答、代码等多种场景。', cat: 'chatbot', tag: '免费' },
  { id: 'kimi', name: 'Kimi', desc: '月之暗面AI助手，支持20万字超长上下文，擅长长文阅读、资料整理和多轮对话。', cat: 'chatbot', tag: '免费额度' },
  { id: 'deepseek', name: 'DeepSeek', desc: '国产开源大模型，代码能力强，成本低，支持超长上下文，开发者首选。', cat: 'chatbot', tag: '免费开源' },
  { id: 'grok', name: 'Grok', desc: 'xAI推出的AI助手，接入X平台（Twitter）实时数据，风格独特，回答有深度。', cat: 'chatbot', tag: '付费' },
  { id: 'poe', name: 'Poe', desc: 'Quora旗下AI聚合平台，一站访问ChatGPT/Claude/GPT-4/Claude等多模型。', cat: 'chatbot', tag: '免费额度' },
  { id: 'perplexity', name: 'Perplexity', desc: 'AI搜索引擎，实时联网，回答带引用来源，是传统搜索的强替代。', cat: 'chatbot', tag: '免费额度' },

  // ===== AI 图像 =====
  { id: 'midjourney', name: 'Midjourney', desc: '最强AI绘画工具之一，Discord指令生成精美图像，艺术风格多样。', cat: 'image', tag: '付费' },
  { id: 'stable-diffusion', name: 'Stable Diffusion', desc: '开源免费AI图像生成模型，支持LoRA定制和ControlNet，本地可部署。', cat: 'image', tag: '免费开源' },
  { id: 'dalle', name: 'DALL-E 3', desc: 'OpenAI图像生成模型，理解复杂提示词能力极强，图像细节丰富、文字渲染准确。', cat: 'image', tag: '付费' },
  { id: 'wanx', name: '通义万相', desc: '阿里云AI绘画，支持文生图、图生图、风格迁移，免费额度充足。', cat: 'image', tag: '免费额度' },
  { id: 'yige', name: '文心一格', desc: '百度AI绘画，中文提示词理解优秀，适合国内用户快速生成AI艺术作品。', cat: 'image', tag: '免费' },
  { id: 'comfyui', name: 'ComfyUI', desc: 'Stable Diffusion最强GUI，节点式工作流，高度自定义，适合进阶用户。', cat: 'image', tag: '免费开源' },
  { id: 'leonardo', name: 'Leonardo.ai', desc: 'AI图像生成平台，预设多种风格模型，社区氛围好，每天免费额度。', cat: 'image', tag: '免费额度' },
  { id: 'adobe-firefly', name: 'Adobe Firefly', desc: 'Adobe AI图像生成，深度集成PS/PR/Ai，内置内容真实性标签。', cat: 'image', tag: '免费额度' },
  { id: 'remove-bg', name: 'Remove.bg', desc: 'AI一键抠图神器，自动移除背景，5秒出图，支持批量处理。', cat: 'image', tag: '免费额度' },

  // ===== AI 视频 =====
  { id: 'sora', name: 'Sora', desc: 'OpenAI AI视频生成模型，文本描述生成60秒高清视频，当前测试中。', cat: 'video', tag: '测试中' },
  { id: 'runway', name: 'Runway', desc: 'AI视频编辑与生成平台，支持视频抠像、运动追踪、文生视频，影视级。', cat: 'video', tag: '付费' },
  { id: 'pika', name: 'Pika', desc: '新兴AI视频生成工具，操作简单，图生视频和文生视频，流畅自然。', cat: 'video', tag: '免费试用' },
  { id: 'zenvideo', name: '腾讯智影', desc: '腾讯AI视频编辑，数字人播报、智能剪辑、字幕生成，集成腾讯生态。', cat: 'video', tag: '免费' },
  { id: 'kling', name: '快影AI（可灵）', desc: '快手可灵大模型，生成5秒以上高清视频，动作连贯、镜头感强。', cat: 'video', tag: '免费额度' },
  { id: 'haiper', name: 'Haiper', desc: 'AI视频生成工具，支持视频续写和风格转换，开创性视频生成能力。', cat: 'video', tag: '免费试用' },

  // ===== AI 写作 =====
  { id: 'notion-ai', name: 'Notion AI', desc: 'Notion内置AI写作助手，笔记中直接调用AI，续写、总结、翻译、润色。', cat: 'writing', tag: '付费' },
  { id: 'copy-ai', name: 'Copy.ai', desc: 'AI营销文案生成，支持广告文案、社交帖子、邮件模板，高效产出。', cat: 'writing', tag: '免费试用' },
  { id: 'xiezuocat', name: '秘塔写作猫', desc: '中文AI写作辅助，文章续写、错别字纠正、文风改写，全中文界面。', cat: 'writing', tag: '免费' },
  { id: 'xfwriting', name: '讯飞写作', desc: '科大讯飞AI写作，多语种写作、语音输入转文字，会议记录整理。', cat: 'writing', tag: '免费' },
  { id: 'jasper', name: 'Jasper', desc: '企业级AI内容平台，SEO文案、博客文章、品牌语气一致，大团队首选。', cat: 'writing', tag: '付费' },
  { id: 'wps-ai', name: 'WPS AI', desc: 'WPS内置AI助手，文档写作、润色、总结、移动端支持，国产办公首选。', cat: 'writing', tag: '免费' },

  // ===== AI 音频 =====
  { id: 'elevenlabs', name: 'ElevenLabs', desc: 'AI语音克隆和文字转语音，语音自然逼真，支持28种语言和多种声音风格。', cat: 'audio', tag: '免费试用' },
  { id: 'jianying', name: '剪映', desc: '字节跳动视频剪辑，AI配音、智能字幕、画面优化，零基础也能快速上手。', cat: 'audio', tag: '免费' },
  { id: 'iflyrec', name: '讯飞听见', desc: '科大讯飞语音识别，实时语音转文字、会议录音转写，准确率行业领先。', cat: 'audio', tag: '免费额度' },
  { id: 'murf', name: 'Murf AI', desc: '专业AI配音平台，120+种语言，语音克隆，声音编辑，适合商业视频。', cat: 'audio', tag: '付费' },

  // ===== AI 办公 =====
  { id: 'gamma', name: 'Gamma', desc: 'AI生成PPT和演示文稿，输入主题生成完整幻灯片，支持自定义样式。', cat: 'office', tag: '免费试用' },
  { id: 'beautiful-ai', name: 'Beautiful.ai', desc: 'AI演示文稿，自动优化排版和设计，节省大量PPT制作时间。', cat: 'office', tag: '付费' },
  { id: 'tome', name: 'Tome', desc: 'AI幻灯片生成，以叙事为中心，支持嵌入3D模型、视频和网页。', cat: 'office', tag: '免费试用' },
  { id: 'mindshow', name: 'MindShow', desc: '国产AI生成PPT，输入大纲自动生成演示，支持多种主题，免费使用。', cat: 'office', tag: '免费' },
  { id: 'slidesgo', name: 'Slidesgo', desc: 'AI幻灯片模板平台，FreePik旗下，丰富的行业模板库，支持在线编辑。', cat: 'office', tag: '免费额度' },
  { id: 'chartai', name: 'ChartGPT', desc: 'AI图表生成器，输入数据自动生成精美图表，支持多种图表类型。', cat: 'office', tag: '免费' },

  // ===== 浏览器 =====
  { id: 'chrome', name: 'Chrome', desc: 'Google全球最广泛浏览器，基于Chromium，性能强劲，扩展生态最丰富。', cat: 'browser', tag: '免费' },
  { id: 'edge', name: 'Edge', desc: '微软基于Chromium，Windows预装，IE兼容模式，内置丰富功能。', cat: 'browser', tag: '免费' },
  { id: 'firefox', name: 'Firefox', desc: 'Mozilla开源浏览器，注重隐私保护，不使用Chromium，高度自定义。', cat: 'browser', tag: '免费' },
  { id: 'arc', name: 'Arc', desc: '颠覆性浏览器设计，垂直标签页、空间概念、外观精美，Mac用户首选。', cat: 'browser', tag: '免费' },

  // ===== 下载工具 =====
  { id: 'idm', name: 'IDM', desc: 'Windows最强下载管理器，多线程、断点续传、视频抓取，下载速度极快。', cat: 'download', tag: '付费' },
  { id: 'motrix', name: 'Motrix', desc: '免费开源全能下载器，支持HTTP、BT、磁力链、网盘下载，界面简洁。', cat: 'download', tag: '免费开源' },
  { id: 'adm', name: 'ADM', desc: '安卓平台高效下载工具，多线程加速、断点续传，替代手机内置下载器。', cat: 'download', tag: '免费' },
  { id: 'xdown', name: 'XDown', desc: '免费开源下载器，支持BT/磁力/HTTP/网盘，IDM替代品，无广告。', cat: 'download', tag: '免费开源' },

  // ===== 系统工具 =====
  { id: 'potplayer', name: 'Potplayer', desc: 'Windows最强视频播放器，支持几乎所有音视频格式，功能定制能力极强。', cat: 'system', tag: '免费' },
  { id: '7zip', name: '7-Zip', desc: '免费开源压缩工具，支持ZIP、RAR、7z等格式，解压速度快，无广告。', cat: 'system', tag: '免费开源' },
  { id: 'everything', name: 'Everything', desc: 'Windows文件搜索神器，基于NTFS索引，输入即显示结果，定位文件极快。', cat: 'system', tag: '免费' },
  { id: 'snipaste', name: 'Snipaste', desc: '截图+贴图工具，截图、标注、贴图到屏幕最前端，效率神器。', cat: 'system', tag: '免费' },
  { id: 'listary', name: 'Listary', desc: 'Windows全局搜索增强，双击Ctrl快速呼出，文件/应用秒搜。', cat: 'system', tag: '免费' },
  { id: 'bandizip', name: 'Bandizip', desc: '轻量压缩工具，支持多种格式，界面美观，解压预览功能强大。', cat: 'system', tag: '免费' },

  // ===== 开发工具 =====
  { id: 'vscode', name: 'VS Code', desc: '微软开源代码编辑器，多语言、智能补全、Git集成、扩展市场，程序员必备。', cat: 'dev', tag: '免费开源' },
  { id: 'git', name: 'Git', desc: '分布式版本控制，管理代码变更，支持多人协作，现代软件开发标配。', cat: 'dev', tag: '免费开源' },
  { id: 'docker', name: 'Docker', desc: '容器化平台，环境一致性保证，DevOps和微服务基础设施。', cat: 'dev', tag: '免费' },
  { id: 'github', name: 'GitHub', desc: '全球最大代码托管平台，GitHub Actions CI/CD，开发者社区和开源生态核心。', cat: 'dev', tag: '免费' },
  { id: 'cursor', name: 'Cursor', desc: 'AI代码编辑器，基于VS Code，AI自动补全、代码生成、聊天辅助编程。', cat: 'dev', tag: '免费' },
  { id: 'copilot', name: 'GitHub Copilot', desc: 'GitHub AI编程助手，代码补全、函数生成、Bug修复，提高编程效率。', cat: 'dev', tag: '付费' },
  { id: 'postman', name: 'Postman', desc: 'API开发和测试工具，接口调试、自动化测试、团队协作，开发者必备。', cat: 'dev', tag: '免费' },
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
        catName(t.cat).toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        t.tag.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    : filteredTools.value
)

const catName = (id) => categories.find(c => c.id === id)?.label || ''
const catIcon = (id) => categories.find(c => c.id === id)?.icon || '📁'

const tagClass = (tag) => {
  if (!tag) return ''
  if (tag.includes('开源')) return 'tag-foss'
  if (tag.includes('免费') && !tag.includes('付费')) return 'tag-free'
  if (tag.includes('付费')) return 'tag-paid'
  if (tag.includes('测试')) return 'tag-beta'
  return 'tag-trial'
}
</script>

<style scoped>
.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
}

.catalog-layout {
  display: flex;
  min-height: calc(100vh - var(--vp-nav-height) - 80px);
  gap: 0;
  margin: 0;
  padding: 0;
}

/* 左侧栏 */
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

.sidebar-header { padding: 24px 20px 16px; border-bottom: 1px solid var(--vp-c-divider); }

.logo-area { display: flex; align-items: center; gap: 10px; }

.logo-icon { font-size: 28px; }

.logo-text {
  font-size: 18px; font-weight: 700;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}

.category-nav { padding: 16px 12px; display: flex; flex-direction: column; gap: 4px; flex: 1; }

.cat-btn {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 12px; border: none; border-radius: 10px;
  background: transparent; cursor: pointer; font-size: 14px;
  color: var(--vp-c-text-1); text-align: left;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%; position: relative; overflow: hidden;
}

.cat-btn::before {
  content: ''; position: absolute; left: 0; top: 50%;
  transform: translateY(-50%) scaleY(0); width: 3px; height: 60%;
  background: var(--vp-c-brand-1); border-radius: 0 2px 2px 0;
  transition: transform 0.2s;
}

.cat-btn:hover { background: var(--vp-c-bg-elv); }
.cat-btn.active {
  background: linear-gradient(135deg, rgba(30,136,229,0.15), rgba(30,136,229,0.05));
  color: var(--vp-c-brand-1); font-weight: 600;
}
.cat-btn.active::before { transform: translateY(-50%) scaleY(1); }
.cat-btn.active .cat-count { background: var(--vp-c-brand-1); color: #fff; }
.cat-icon { font-size: 18px; width: 28px; text-align: center; }
.cat-label { flex: 1; }
.cat-count {
  font-size: 11px; background: var(--vp-c-bg-elv); color: var(--vp-c-text-2);
  padding: 2px 8px; border-radius: 12px; font-weight: 500;
}

.sidebar-footer { padding: 16px 20px; border-top: 1px solid var(--vp-c-divider); }
.stats-mini { display: flex; justify-content: center; }
.stat-item { font-size: 13px; color: var(--vp-c-text-2); background: var(--vp-c-bg-elv); padding: 6px 14px; border-radius: 20px; }

/* 右侧主区 */
.catalog-main { flex: 1; padding: 24px 32px; max-width: calc(100% - 240px - 24px); }

/* Hero */
.hero-section {
  position: relative; overflow: hidden;
  background: linear-gradient(135deg, rgba(30,136,229,0.08) 0%, rgba(156,39,176,0.06) 50%, rgba(30,136,229,0.04) 100%);
  border-radius: 20px; padding: 40px 48px; margin-bottom: 32px;
}
.hero-content { position: relative; z-index: 1; }
.hero-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: #fff; font-size: 12px; font-weight: 600;
  padding: 6px 14px; border-radius: 20px; margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(30,136,229,0.3);
}
.hero-title { display: flex; flex-direction: column; gap: 4px; margin: 0 0 12px; }
.title-main { font-size: 40px; font-weight: 800; color: var(--vp-c-text-1); letter-spacing: -1px; line-height: 1.1; }
.title-sub { font-size: 18px; font-weight: 500; color: var(--vp-c-brand-1); }
.hero-desc { font-size: 15px; color: var(--vp-c-text-2); margin: 0 0 24px; line-height: 1.7; max-width: 600px; }

.search-wrapper { max-width: 560px; margin-bottom: 16px; }
.search-bar {
  display: flex; align-items: center; gap: 12px;
  background: var(--vp-c-bg); border: 2px solid transparent;
  border-radius: 14px; padding: 14px 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.search-bar:focus-within { border-color: var(--vp-c-brand-1); box-shadow: 0 4px 24px rgba(30,136,229,0.15); transform: translateY(-1px); }
.search-icon { font-size: 20px; opacity: 0.5; }
.search-input { flex: 1; border: none; background: transparent; font-size: 15px; color: var(--vp-c-text-1); outline: none; }
.search-input::placeholder { color: var(--vp-c-text-3); }
.search-clear { font-size: 14px; color: var(--vp-c-text-3); cursor: pointer; padding: 4px 8px; border-radius: 6px; transition: all 0.15s; }
.search-clear:hover { color: var(--vp-c-text-1); background: var(--vp-c-bg-elv); }

.filter-info { font-size: 14px; color: var(--vp-c-text-2); }
.filter-info .highlight { color: var(--vp-c-brand-1); font-weight: 700; background: linear-gradient(120deg, rgba(30,136,229,0.1) 0%, rgba(30,136,229,0.2) 100%); padding: 2px 8px; border-radius: 4px; }

/* 装饰 */
.hero-decoration { position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; overflow: hidden; }
.deco-circle { position: absolute; border-radius: 50%; opacity: 0.6; }
.deco-1 { width: 300px; height: 300px; background: radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 70%); top: -100px; right: -50px; animation: float 8s ease-in-out infinite; }
.deco-2 { width: 200px; height: 200px; background: radial-gradient(circle, rgba(156,39,176,0.1) 0%, transparent 70%); bottom: -50px; left: 20%; animation: float 10s ease-in-out infinite reverse; }
.deco-3 { width: 150px; height: 150px; background: radial-gradient(circle, rgba(30,136,229,0.08) 0%, transparent 70%); top: 30%; right: 30%; animation: float 12s ease-in-out infinite; }
@keyframes float { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-20px) scale(1.05); } }

/* 快速标签 */
.quick-tags { display: flex; gap: 10px; margin-bottom: 24px; flex-wrap: wrap; }
.quick-tag {
  padding: 8px 18px; border: 1px solid var(--vp-c-divider);
  border-radius: 20px; background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2); font-size: 13px; cursor: pointer; transition: all 0.2s;
}
.quick-tag:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); background: rgba(30,136,229,0.05); }
.quick-tag.active { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); background: rgba(30,136,229,0.08); font-weight: 600; }

/* 卡片网格 */
.tools-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; }

.tool-card {
  position: relative; display: flex; flex-direction: column;
  background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider);
  border-radius: 16px; padding: 20px; text-decoration: none; color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); overflow: hidden;
}
.tool-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  transform: scaleX(0); transition: transform 0.3s;
}
.tool-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(30,136,229,0.15); border-color: rgba(30,136,229,0.3); }
.tool-card:hover::before { transform: scaleX(1); }

.card-glow { position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at center, rgba(30,136,229,0.03) 0%, transparent 50%); opacity: 0; transition: opacity 0.3s; }
.tool-card:hover .card-glow { opacity: 1; }

.card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.card-icon { font-size: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1)); }
.card-tag { font-size: 11px; padding: 4px 10px; border-radius: 20px; font-weight: 600; }
.tag-free, .tag-foss { background: linear-gradient(135deg, #dcfce7, #bbf7d0); color: #16a34a; }
.tag-paid { background: linear-gradient(135deg, #fee2e2, #fecaca); color: #dc2626; }
.tag-trial { background: linear-gradient(135deg, #fef9c3, #fef08a); color: #ca8a04; }
.tag-beta { background: linear-gradient(135deg, #e0e7ff, #c7d2fe); color: #4f46e5; }

.card-name { font-size: 18px; font-weight: 700; color: var(--vp-c-text-1); margin: 0 0 8px; }
.card-desc {
  font-size: 13px; color: var(--vp-c-text-2); margin: 0 0 16px; flex: 1;
  line-height: 1.6;
  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
}

.card-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--vp-c-divider); }
.card-cat { font-size: 12px; color: var(--vp-c-text-3); }
.card-arrow { font-size: 13px; color: var(--vp-c-brand-1); font-weight: 600; transition: all 0.2s; }
.tool-card:hover .card-arrow { transform: translateX(4px); }

/* 空状态 */
.empty-state { text-align: center; padding: 80px 20px; color: var(--vp-c-text-3); }
.empty-icon { font-size: 48px; margin-bottom: 16px; opacity: 0.5; }

/* SEO降级 */
.noscript-list { background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 24px; margin-top: 32px; }
.noscript-list h2 { font-size: 20px; margin: 0 0 16px; }
.noscript-list ul { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 8px; }
.noscript-list li { padding: 6px 0; border-bottom: 1px solid var(--vp-c-divider); }
.noscript-list li:last-child { border-bottom: none; }
.noscript-list a { color: var(--vp-c-brand-1); font-weight: 600; }

/* 移动端 */
@media (max-width: 768px) {
  .catalog-layout { flex-direction: column; }
  .catalog-sidebar { width: 100%; min-width: unset; height: auto; position: static; border-right: none; border-bottom: 1px solid var(--vp-c-divider); overflow-x: auto; margin: 0; border-radius: 0; box-shadow: none; }
  .category-nav { flex-direction: row; overflow-x: auto; padding: 12px; gap: 6px; flex-wrap: nowrap; }
  .cat-btn { white-space: nowrap; flex-shrink: 0; padding: 8px 14px; }
  .sidebar-footer, .sidebar-header { display: none; }
  .catalog-main { max-width: 100%; padding: 16px; }
  .hero-section { padding: 24px 20px; border-radius: 16px; }
  .title-main { font-size: 28px; }
  .title-sub { font-size: 15px; }
  .tools-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 14px; }
  .tool-card { padding: 16px; }
  .card-name { font-size: 16px; }
  .card-desc { font-size: 12px; -webkit-line-clamp: 2; }
}
</style>
