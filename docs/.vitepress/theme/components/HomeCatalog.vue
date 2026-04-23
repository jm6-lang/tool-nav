<template>
  <div class="catalog-layout">
    <!-- 左侧分类导航 -->
    <aside class="catalog-sidebar" aria-label="工具分类导航">
      <div class="sidebar-header">
        <div class="logo-area">
          <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="7" height="7" rx="2" fill="#4F46E5"/>
            <rect x="14" y="3" width="7" height="7" rx="2" fill="#06B6D4"/>
            <rect x="3" y="14" width="7" height="7" rx="2" fill="#8B5CF6"/>
            <rect x="14" y="14" width="7" height="7" rx="2" fill="#EC4899"/>
          </svg>
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
          <span class="cat-icon" v-html="cat.iconSvg"></span>
          <span class="cat-label">{{ cat.label }}</span>
          <span class="cat-count">{{ cat.id === 'all' ? tools.length : tools.filter(t => t.cat === cat.id).length }}</span>
        </button>
      </nav>
      <div class="sidebar-footer">
        <div class="stats-mini">
          <span class="stat-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            {{ tools.length }} 个工具
          </span>
        </div>
      </div>
    </aside>

    <!-- 右侧主内容区 -->
    <main class="catalog-main" id="main-content">
      <!-- Hero 区 -->
      <header class="hero-section">
        <div class="hero-content">
          <div class="hero-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            持续更新
          </div>
          <h1 class="hero-title">
            <span class="title-main">AI工具导航</span>
            <span class="title-sub">发现最实用的AI工具</span>
          </h1>
          <p class="hero-desc">聚合最实用的AI工具与高频下载工具，涵盖AI对话、AI图像生成、AI视频、AI写作、AI办公等分类，帮助快速找到高质量AI工具。</p>

          <div class="search-wrapper">
            <div class="search-bar" role="search" aria-label="搜索工具">
              <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input
                id="tool-search"
                v-model="searchQuery"
                type="search"
                placeholder="搜索工具名称、功能或分类..."
                class="search-input"
                autocomplete="off"
                aria-controls="tools-grid"
              />
              <span v-if="searchQuery" class="search-clear" @click="searchQuery = ''" role="button" tabindex="0" @keydown.enter="searchQuery = ''" aria-label="清除搜索">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </span>
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
            <div class="card-icon-wrap">
              <img
                :src="`https://${toolDomain(tool.url)}/favicon.ico`"
                :alt="tool.name + ' 图标'"
                class="card-icon"
                loading="lazy"
                :data-domain="toolDomain(tool.url)"
                @error="onFaviconError"
              />
            </div>
            <span class="card-tag" :class="tagClass(tool.tag)">{{ tool.tag }}</span>
          </div>
          <h2 class="card-name">{{ tool.name }}</h2>
          <p class="card-desc">{{ tool.desc }}</p>
          <div class="card-footer">
            <span class="card-cat">
              <span v-html="catSvg(tool.cat)"></span>
              {{ catName(tool.cat) }}
            </span>
            <span class="card-arrow">查看详情
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </span>
          </div>
        </a>
      </section>

      <!-- 空状态 -->
      <div v-if="displayedTools.length === 0" class="empty-state">
        <svg class="empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.4"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
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

<script setup lang="ts">
import { ref, computed } from 'vue'
import { tools, categories, catName, catSvg } from '../../data/tools'

const activeCategory = ref('all')
const searchQuery = ref('')

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

const toolDomain = (url: string): string => {
  try {
    return new URL(url).hostname
  } catch { return '' }
}

const onFaviconError = (e: Event) => {
  const target = e.target as HTMLImageElement
  const domain = target.dataset.domain
  if (domain) {
    target.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
    target.addEventListener('error', onFaviconSecondError, { once: true })
  } else {
    target.style.display = 'none'
  }
}

const onFaviconSecondError = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.style.display = 'none'
  const wrap = target.closest('.card-icon-wrap')
  if (wrap) {
    wrap.classList.add('fallback')
  }
}

const tagClass = (tag: string): string => {
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
.logo-icon { width: 28px; height: 28px; flex-shrink: 0; }
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

.cat-icon {
  width: 18px; height: 18px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.cat-icon :deep(svg) { width: 18px; height: 18px; }

.cat-label { flex: 1; }
.cat-count {
  font-size: 11px; background: var(--vp-c-bg-elv); color: var(--vp-c-text-2);
  padding: 2px 8px; border-radius: 12px; font-weight: 500;
}

.sidebar-footer { padding: 16px 20px; border-top: 1px solid var(--vp-c-divider); }
.stats-mini { display: flex; justify-content: center; }
.stat-item {
  font-size: 13px; color: var(--vp-c-text-2); background: var(--vp-c-bg-elv);
  padding: 6px 14px; border-radius: 20px;
  display: flex; align-items: center; gap: 6px;
}

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
.search-icon { color: var(--vp-c-text-3); flex-shrink: 0; }
.search-input { flex: 1; border: none; background: transparent; font-size: 15px; color: var(--vp-c-text-1); outline: none; }
.search-input::placeholder { color: var(--vp-c-text-3); }
.search-clear {
  color: var(--vp-c-text-3); cursor: pointer; padding: 4px 8px;
  border-radius: 6px; transition: all 0.15s; display: flex; align-items: center;
}
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

.card-icon-wrap {
  width: 40px; height: 40px; border-radius: 10px;
  background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  transition: all 0.2s;
}
.tool-card:hover .card-icon-wrap { border-color: var(--vp-c-brand-1); box-shadow: 0 0 0 3px rgba(30,136,229,0.1); }

.card-icon {
  width: 28px; height: 28px; object-fit: contain; display: block;
}

.card-icon-wrap.fallback {
  background: linear-gradient(135deg, #4F46E5, #7C3AED);
}
.card-icon-wrap.fallback .card-icon {
  display: none;
}

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

.card-footer {
  display: flex; align-items: center; justify-content: space-between;
  margin-top: auto; padding-top: 12px; border-top: 1px solid var(--vp-c-divider);
}
.card-cat {
  font-size: 12px; color: var(--vp-c-text-3);
  display: flex; align-items: center; gap: 5px;
}
.card-cat :deep(svg) { width: 14px; height: 14px; }

.card-arrow {
  font-size: 13px; color: var(--vp-c-brand-1); font-weight: 600;
  display: flex; align-items: center; gap: 4px;
  transition: all 0.2s;
}
.tool-card:hover .card-arrow { transform: translateX(4px); }

/* 空状态 */
.empty-state { text-align: center; padding: 80px 20px; color: var(--vp-c-text-3); }
.empty-icon { color: var(--vp-c-text-3); margin-bottom: 16px; }

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
