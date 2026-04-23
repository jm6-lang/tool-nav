# AI工具导航

> 聚合最实用的AI工具与高频下载工具的导航网站

## 在线访问

🔗 [tool.skillxm.cn](https://tool.skillxm.cn)

## 技术栈

- [VitePress](https://vitepress.dev/) - 基于 Vue 的静态站点生成器
- [Vue 3](https://vuejs.org/) - UI 组件框架
- [Cloudflare Pages](https://pages.cloudflare.com/) - 部署平台

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 项目结构

```
docs/
├── .vitepress/          # VitePress 配置和主题
│   ├── config.mts       # 站点配置
│   └── theme/           # 自定义主题组件
├── ai-tools/            # AI工具分类页面
├── popular-tools/       # 热门工具分类页面
├── tools/               # 工具详情页
├── public/              # 静态资源
└── index.md             # 首页
```

## 贡献指南

欢迎通过 [GitHub Issues](https://github.com/jm6-lang/tool-nav/issues) 推荐优质工具或反馈问题。

## License

MIT
