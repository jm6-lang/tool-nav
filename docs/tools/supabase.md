---
title: Supabase
description: 开源的Firebase替代方案，提供PostgreSQL数据库、实时订阅、认证和存储等全栈后端服务。
---

<div class="tool-header">
<div class="tool-icon"><img src="https://www.google.com/s2/favicons?domain=supabase.com&sz=128" alt="" class="tool-favicon-img" loading="lazy" /></div>
<div class="tool-info">
<div class="tool-title-row">
<h1 class="tool-title">Supabase</h1>
<span class="tool-tag" style="background:#fef9c3;color:#ca8a04">免费额度</span>
</div>
<div class="tool-cat">开发工具</div>
</div>
</div>

<div class="redirect-notice">
<div class="notice-icon"><img src="https://www.google.com/s2/favicons?domain=supabase.com&sz=128" alt="" class="notice-favicon" /></div>
<div class="notice-body">
<h3>即将离开 AI工具导航</h3>
<p>您正在访问 <strong>supabase.com</strong></p>
<p class="notice-desc">我们已对目标网站进行基础审核，但不对其内容和服务负责。</p>
</div>
<div class="notice-btn">
<a href="https://supabase.com" target="_blank" rel="noopener noreferrer" class="btn-confirm">确认访问 →</a>
<a href="/" class="btn-back">← 返回</a>
</div>
</div>

## 工具简介

Supabase 是一个开源的后端即服务（BaaS）平台，定位为Google Firebase的开源替代方案。与Firebase使用NoSQL数据库不同，Supabase基于PostgreSQL关系型数据库，提供SQL编辑器、实时订阅、身份认证、对象存储和Edge Functions等完整的后端服务。Supabase的免费额度非常充足（包括500MB数据库、1GB文件存储和5GB带宽），本地开发体验友好，支持Docker自托管，是全栈开发者的首选BaaS平台。

## 核心功能

**PostgreSQL数据库** — 提供托管的PostgreSQL数据库，内置Table Editor可视化管理工具和SQL编辑器，支持行级安全策略（RLS）进行细粒度权限控制。

**实时订阅** — 基于PostgreSQL的Change Data Capture（CDC）实现实时数据订阅，数据库变更可以实时推送到客户端，适合构建实时应用。

**身份认证** — 内置完整的认证系统，支持邮箱密码、OAuth（Google、GitHub等）、手机短信和魔法链接等多种登录方式。

**Edge Functions** — 基于Deno运行时的边缘函数，支持在全球边缘节点运行TypeScript代码，适合处理API逻辑和Webhook。

## 适用场景

**快速原型开发** — 使用Supabase快速搭建项目后端，无需自己搭建服务器和编写后端代码，专注于前端开发，大幅缩短项目启动时间。

**实时应用构建** — 利用实时订阅功能构建聊天应用、协作编辑器、实时仪表盘等需要实时数据推送的应用场景。

## 使用技巧

**利用RLS保护数据** — 在生产环境中务必配置行级安全策略（RLS），确保用户只能访问自己有权限的数据，这是Supabase安全的核心机制。

**本地开发配合Docker** — 使用Supabase CLI在本地启动完整的开发环境，与云端环境保持一致，开发和调试更方便。

## 优缺点简评

**优势：** 基于PostgreSQL，数据模型灵活强大；完全开源，可自托管；免费额度充足；实时订阅功能强大；客户端SDK覆盖主流框架。

**不足：** 免费版项目会自动暂停（7天不活跃）；复杂查询性能优化需要PostgreSQL专业知识；Edge Functions生态不如Vercel成熟；国内访问速度一般。

<div class="tool-footer">
<a href="https://supabase.com" target="_blank" rel="noopener noreferrer" class="visit-btn">🔗 访问 Supabase 官网</a>
</div>
