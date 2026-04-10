<template>
  <Layout :frontmatter="frontmatter">
    <div class="tool-detail-page">
      <!-- 返回导航 -->
      <div class="back-nav">
        <a href="/" class="back-link">
          <span>←</span> 返回工具导航
        </a>
      </div>

      <!-- 工具头 -->
      <header class="tool-header">
        <div class="tool-icon">{{ frontmatter.icon }}</div>
        <div class="tool-meta">
          <div class="tool-title-row">
            <h1 class="tool-title">{{ frontmatter.title }}</h1>
            <span class="tool-tag" :class="tagClass(frontmatter.tag)">{{ frontmatter.tag }}</span>
          </div>
          <div class="tool-cat-badge">
            <span>{{ catName(frontmatter.cat) }}</span>
          </div>
        </div>
      </header>

      <!-- 外部链接提示（先跳转到这里，用户确认后再跳转） -->
      <div class="redirect-notice">
        <div class="notice-icon">🔗</div>
        <div class="notice-content">
          <h3>即将离开 AI工具导航</h3>
          <p>您正在访问外部网站 <strong>{{ getHost(frontmatter.url) }}</strong></p>
          <p class="notice-desc">我们已对目标网站进行基础审核，但不对其内容和服务负责。建议您确认后再继续。</p>
        </div>
        <div class="notice-actions">
          <a :href="frontmatter.url" target="_blank" rel="noopener noreferrer" class="btn-primary">
            确认访问 →
          </a>
          <a href="/" class="btn-secondary">
            ← 返回导航
          </a>
        </div>
      </div>

      <!-- 工具内容 -->
      <div class="tool-content">
        <Content />
      </div>

      <!-- 底部访问按钮 -->
      <div class="tool-footer">
        <a :href="frontmatter.url" target="_blank" rel="noopener noreferrer" class="btn-visit-main">
          🔗 访问 {{ frontmatter.title }} 官网
        </a>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { frontmatter, Layout } = useData()

const categories = [
  { id: 'all', label: '全部' },
  { id: 'chatbot', label: 'AI对话' },
  { id: 'image', label: 'AI图像' },
  { id: 'video', label: 'AI视频' },
  { id: 'writing', label: 'AI写作' },
  { id: 'audio', label: 'AI音频' },
  { id: 'office', label: 'AI办公' },
  { id: 'browser', label: '浏览器' },
  { id: 'download', label: '下载工具' },
  { id: 'system', label: '系统工具' },
  { id: 'dev', label: '开发工具' },
]

const catName = (id) => categories.find(c => c.id === id)?.label || id

const tagClass = (tag) => {
  if (!tag) return ''
  if (tag.includes('开源')) return 'tag-foss'
  if (tag.includes('免费')) return 'tag-free'
  if (tag.includes('付费')) return 'tag-paid'
  if (tag.includes('测试')) return 'tag-beta'
  return 'tag-trial'
}

const getHost = (url) => {
  try {
    return new URL(url).hostname
  } catch {
    return url
  }
}
</script>

<style scoped>
.tool-detail-page {
  max-width: 780px;
  margin: 0 auto;
  padding: 32px 24px 80px;
}

.back-nav {
  margin-bottom: 24px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--vp-c-brand-1);
}

.tool-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: linear-gradient(135deg, rgba(30,136,229,0.06), rgba(156,39,176,0.04));
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 24px;
}

.tool-icon {
  font-size: 64px;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
  flex-shrink: 0;
}

.tool-meta {
  flex: 1;
}

.tool-title-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.tool-title {
  font-size: 36px;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin: 0;
  letter-spacing: -0.5px;
}

.tool-tag {
  font-size: 12px;
  padding: 5px 14px;
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

.tool-cat-badge {
  display: inline-block;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

/* 外链提示 */
.redirect-notice {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: linear-gradient(135deg, #fff7ed, #ffedd5);
  border: 1px solid #fed7aa;
  border-radius: 16px;
  padding: 20px 24px;
  margin-bottom: 32px;
}

[data-theme="dark"] .redirect-notice {
  background: linear-gradient(135deg, rgba(251,146,60,0.08), rgba(251,146,60,0.04));
  border-color: rgba(251,146,60,0.2);
}

.notice-icon {
  font-size: 32px;
  flex-shrink: 0;
  margin-top: 2px;
}

.notice-content {
  flex: 1;
}

.notice-content h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 6px;
}

.notice-content p {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin: 0 0 4px;
}

.notice-desc {
  font-size: 12px !important;
  color: var(--vp-c-text-3) !important;
  margin-top: 6px !important;
}

.notice-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ea580c, #dc2626);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(234,88,12,0.3);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(234,88,12,0.4);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 500;
  padding: 9px 16px;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  text-decoration: none;
  transition: all 0.2s;
  white-space: nowrap;
}

.btn-secondary:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

/* 内容区 */
.tool-content {
  line-height: 1.8;
  font-size: 15px;
}

.tool-content :deep(h2) {
  font-size: 20px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 32px 0 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--vp-c-brand-1);
}

.tool-content :deep(h3) {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 20px 0 8px;
}

.tool-content :deep(p) {
  color: var(--vp-c-text-2);
  margin: 0 0 12px;
}

.tool-content :deep(ul) {
  padding-left: 20px;
  margin: 0 0 12px;
}

.tool-content :deep(li) {
  color: var(--vp-c-text-2);
  margin-bottom: 6px;
}

.tool-content :deep(strong) {
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.tool-content :deep(a) {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

/* 底部按钮 */
.tool-footer {
  margin-top: 40px;
  text-align: center;
  padding-top: 32px;
  border-top: 1px solid var(--vp-c-divider);
}

.btn-visit-main {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: 14px;
  text-decoration: none;
  transition: all 0.25s;
  box-shadow: 0 6px 20px rgba(30,136,229,0.3);
}

.btn-visit-main:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(30,136,229,0.4);
}

/* 移动端 */
@media (max-width: 640px) {
  .tool-detail-page { padding: 20px 16px 60px; }
  .tool-header { padding: 20px; flex-direction: column; }
  .tool-icon { font-size: 48px; }
  .tool-title { font-size: 26px; }
  .redirect-notice { flex-direction: column; }
  .notice-actions { flex-direction: row; width: 100%; }
  .btn-primary, .btn-secondary { flex: 1; justify-content: center; }
}
</style>
