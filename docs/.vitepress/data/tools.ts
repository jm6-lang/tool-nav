// SVG 图标常量
const svgHome = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`
const svgChat = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`
const svgImage = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`
const svgVideo = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`
const svgWrite = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`
const svgAudio = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`
const svgOffice = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`
const svgBrowser = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
const svgDownload = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`
const svgSystem = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
const svgDev = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`

// 分类定义
export const categories = [
  { id: 'all', label: '全部', iconSvg: svgHome },
  { id: 'chatbot', label: 'AI对话', iconSvg: svgChat },
  { id: 'image', label: 'AI图像', iconSvg: svgImage },
  { id: 'video', label: 'AI视频', iconSvg: svgVideo },
  { id: 'writing', label: 'AI写作', iconSvg: svgWrite },
  { id: 'audio', label: 'AI音频', iconSvg: svgAudio },
  { id: 'office', label: 'AI办公', iconSvg: svgOffice },
  { id: 'browser', label: '浏览器', iconSvg: svgBrowser },
  { id: 'download', label: '下载工具', iconSvg: svgDownload },
  { id: 'system', label: '系统工具', iconSvg: svgSystem },
  { id: 'dev', label: '开发工具', iconSvg: svgDev },
]

// 工具数据
export const tools = [
  // ===== AI 对话 =====
  { id: 'chatgpt', name: 'ChatGPT', desc: 'OpenAI最强对话AI，支持GPT-4和GPT-4o，多模态、代码生成、创意写作，全球最流行AI工具。', cat: 'chatbot', url: 'https://chat.openai.com', tag: '免费可用' },
  { id: 'claude', name: 'Claude', desc: 'Anthropic开发，安全性强，支持100K上下文窗口，深度写作和复杂分析首选。', cat: 'chatbot', url: 'https://claude.ai', tag: '免费额度' },
  { id: 'qianwen', name: '通义千问', desc: '阿里云自研大模型，支持中文深度对话、代码编写、知识问答，稳定可靠。', cat: 'chatbot', url: 'https://qianwen.aliyun.com', tag: '免费可用' },
  { id: 'doubao', name: '豆包', desc: '字节跳动AI助手，智能对话、写作辅助、图片生成，集成抖音飞书生态。', cat: 'chatbot', url: 'https://www.doubao.com', tag: '免费' },
  { id: 'yiyan', name: '文心一言', desc: '百度文心大模型，擅长中文理解生成，覆盖写作、问答、代码等多种场景。', cat: 'chatbot', url: 'https://yiyan.baidu.com', tag: '免费' },
  { id: 'kimi', name: 'Kimi', desc: '月之暗面AI助手，支持20万字超长上下文，擅长长文阅读、资料整理和多轮对话。', cat: 'chatbot', url: 'https://kimi.moonshot.cn', tag: '免费额度' },
  { id: 'deepseek', name: 'DeepSeek', desc: '国产开源大模型，代码能力强，成本低，支持超长上下文，开发者首选。', cat: 'chatbot', url: 'https://www.deepseek.com', tag: '免费开源' },
  { id: 'grok', name: 'Grok', desc: 'xAI推出的AI助手，接入X平台（Twitter）实时数据，风格独特，回答有深度。', cat: 'chatbot', url: 'https://x.com/i/grok', tag: '付费' },
  { id: 'poe', name: 'Poe', desc: 'Quora旗下AI聚合平台，一站访问ChatGPT/Claude/GPT-4/Claude等多模型。', cat: 'chatbot', url: 'https://poe.com', tag: '免费额度' },
  { id: 'perplexity', name: 'Perplexity', desc: 'AI搜索引擎，实时联网，回答带引用来源，是传统搜索的强替代。', cat: 'chatbot', url: 'https://www.perplexity.ai', tag: '免费额度' },

  // ===== AI 图像 =====
  { id: 'midjourney', name: 'Midjourney', desc: '最强AI绘画工具之一，Discord指令生成精美图像，艺术风格多样。', cat: 'image', url: 'https://www.midjourney.com', tag: '付费' },
  { id: 'stable-diffusion', name: 'Stable Diffusion', desc: '开源免费AI图像生成模型，支持LoRA定制和ControlNet，本地可部署。', cat: 'image', url: 'https://stability.ai', tag: '免费开源' },
  { id: 'dalle', name: 'DALL-E 3', desc: 'OpenAI图像生成模型，理解复杂提示词能力极强，图像细节丰富、文字渲染准确。', cat: 'image', url: 'https://openai.com/dall-e-3', tag: '付费' },
  { id: 'wanx', name: '通义万相', desc: '阿里云AI绘画，支持文生图、图生图、风格迁移，免费额度充足。', cat: 'image', url: 'https://wanx.alibaba.com', tag: '免费额度' },
  { id: 'yige', name: '文心一格', desc: '百度AI绘画，中文提示词理解优秀，适合国内用户快速生成AI艺术作品。', cat: 'image', url: 'https://yige.baidu.com', tag: '免费' },
  { id: 'comfyui', name: 'ComfyUI', desc: 'Stable Diffusion最强GUI，节点式工作流，高度自定义，适合进阶用户。', cat: 'image', url: 'https://github.com/comfyanonymous/ComfyUI', tag: '免费开源' },
  { id: 'leonardo', name: 'Leonardo.ai', desc: 'AI图像生成平台，预设多种风格模型，社区氛围好，每天免费额度。', cat: 'image', url: 'https://leonardo.ai', tag: '免费额度' },
  { id: 'adobe-firefly', name: 'Adobe Firefly', desc: 'Adobe AI图像生成，深度集成PS/PR/Ai，内置内容真实性标签。', cat: 'image', url: 'https://firefly.adobe.com', tag: '免费额度' },
  { id: 'remove-bg', name: 'Remove.bg', desc: 'AI一键抠图神器，自动移除背景，5秒出图，支持批量处理。', cat: 'image', url: 'https://www.remove.bg', tag: '免费额度' },

  // ===== AI 视频 =====
  { id: 'sora', name: 'Sora', desc: 'OpenAI AI视频生成模型，文本描述生成60秒高清视频，当前测试中。', cat: 'video', url: 'https://openai.com/sora', tag: '测试中' },
  { id: 'runway', name: 'Runway', desc: 'AI视频编辑与生成平台，支持视频抠像、运动追踪、文生视频，影视级。', cat: 'video', url: 'https://runwayml.com', tag: '付费' },
  { id: 'pika', name: 'Pika', desc: '新兴AI视频生成工具，操作简单，图生视频和文生视频，流畅自然。', cat: 'video', url: 'https://pika.art', tag: '免费试用' },
  { id: 'zenvideo', name: '腾讯智影', desc: '腾讯AI视频编辑，数字人播报、智能剪辑、字幕生成，集成腾讯生态。', cat: 'video', url: 'https://zenvideo.qq.com', tag: '免费' },
  { id: 'kling', name: '快影AI（可灵）', desc: '快手可灵大模型，生成5秒以上高清视频，动作连贯、镜头感强。', cat: 'video', url: 'https://klingai.com', tag: '免费额度' },
  { id: 'haiper', name: 'Haiper', desc: 'AI视频生成工具，支持视频续写和风格转换，开创性视频生成能力。', cat: 'video', url: 'https://haiper.ai', tag: '免费试用' },

  // ===== AI 写作 =====
  { id: 'notion-ai', name: 'Notion AI', desc: 'Notion内置AI写作助手，笔记中直接调用AI，续写、总结、翻译、润色。', cat: 'writing', url: 'https://notion.so', tag: '付费' },
  { id: 'copy-ai', name: 'Copy.ai', desc: 'AI营销文案生成，支持广告文案、社交帖子、邮件模板，高效产出。', cat: 'writing', url: 'https://www.copy.ai', tag: '免费试用' },
  { id: 'xiezuocat', name: '秘塔写作猫', desc: '中文AI写作辅助，文章续写、错别字纠正、文风改写，全中文界面。', cat: 'writing', url: 'https://xiezuocat.com', tag: '免费' },
  { id: 'xfwriting', name: '讯飞写作', desc: '科大讯飞AI写作，多语种写作、语音输入转文字，会议记录整理。', cat: 'writing', url: 'https://xf.xunfei.cn', tag: '免费' },
  { id: 'jasper', name: 'Jasper', desc: '企业级AI内容平台，SEO文案、博客文章，品牌语气一致，大团队首选。', cat: 'writing', url: 'https://www.jasper.ai', tag: '付费' },
  { id: 'wps-ai', name: 'WPS AI', desc: 'WPS内置AI助手，文档写作、润色、总结、移动端支持，国产办公首选。', cat: 'writing', url: 'https://ai.wps.cn', tag: '免费' },

  // ===== AI 音频 =====
  { id: 'elevenlabs', name: 'ElevenLabs', desc: 'AI语音克隆和文字转语音，语音自然逼真，支持28种语言和多种声音风格。', cat: 'audio', url: 'https://elevenlabs.io', tag: '免费试用' },
  { id: 'jianying', name: '剪映', desc: '字节跳动视频剪辑，AI配音、智能字幕、画面优化，零基础也能快速上手。', cat: 'audio', url: 'https://www.capcut.cn', tag: '免费' },
  { id: 'iflyrec', name: '讯飞听见', desc: '科大讯飞语音识别，实时语音转文字、会议录音转写，准确率行业领先。', cat: 'audio', url: 'https://www.iflyrec.com', tag: '免费额度' },
  { id: 'murf', name: 'Murf AI', desc: '专业AI配音平台，120+种语言，语音克隆，声音编辑，适合商业视频。', cat: 'audio', url: 'https://murf.ai', tag: '付费' },

  // ===== AI 办公 =====
  { id: 'gamma', name: 'Gamma', desc: 'AI生成PPT和演示文稿，输入主题生成完整幻灯片，支持自定义样式。', cat: 'office', url: 'https://gamma.app', tag: '免费试用' },
  { id: 'beautiful-ai', name: 'Beautiful.ai', desc: 'AI演示文稿，自动优化排版和设计，节省大量PPT制作时间。', cat: 'office', url: 'https://www.beautiful.ai', tag: '付费' },
  { id: 'tome', name: 'Tome', desc: 'AI幻灯片生成，以叙事为中心，支持嵌入3D模型、视频和网页。', cat: 'office', url: 'https://tome.app', tag: '免费试用' },
  { id: 'mindshow', name: 'MindShow', desc: '国产AI生成PPT，输入大纲自动生成演示，支持多种主题，免费使用。', cat: 'office', url: 'https://mindshow.fun', tag: '免费' },
  { id: 'slidesgo', name: 'Slidesgo', desc: 'AI幻灯片模板平台，FreePik旗下，丰富的行业模板库，支持在线编辑。', cat: 'office', url: 'https://slidesgo.com', tag: '免费额度' },
  { id: 'chartai', name: 'ChartGPT', desc: 'AI图表生成器，输入数据自动生成精美图表，支持多种图表类型。', cat: 'office', url: 'https://chartgpt.io', tag: '免费' },

  // ===== 浏览器 =====
  { id: 'chrome', name: 'Chrome', desc: 'Google全球最广泛浏览器，基于Chromium，性能强劲，扩展生态最丰富。', cat: 'browser', url: 'https://www.google.com/chrome', tag: '免费' },
  { id: 'edge', name: 'Edge', desc: '微软基于Chromium，Windows预装，IE兼容模式，内置丰富功能。', cat: 'browser', url: 'https://www.microsoft.com/edge', tag: '免费' },
  { id: 'firefox', name: 'Firefox', desc: 'Mozilla开源浏览器，注重隐私保护，不使用Chromium，高度自定义。', cat: 'browser', url: 'https://www.mozilla.org/firefox', tag: '免费' },
  { id: 'arc', name: 'Arc', desc: '颠覆性浏览器设计，垂直标签页、空间概念、外观精美，Mac用户首选。', cat: 'browser', url: 'https://arc.net', tag: '免费' },

  // ===== 下载工具 =====
  { id: 'idm', name: 'IDM', desc: 'Windows最强下载管理器，多线程、断点续传、视频抓取，下载速度极快。', cat: 'download', url: 'https://www.internetdownloadmanager.com', tag: '付费' },
  { id: 'motrix', name: 'Motrix', desc: '免费开源全能下载器，支持HTTP、BT、磁力链、网盘下载，界面简洁。', cat: 'download', url: 'https://motrix.app', tag: '免费开源' },
  { id: 'adm', name: 'ADM', desc: '安卓平台高效下载工具，多线程加速、断点续传，替代手机内置下载器。', cat: 'download', url: 'https://play.google.com/store/apps/details?id=com.dv.adm', tag: '免费' },
  { id: 'xdown', name: 'XDown', desc: '免费开源下载器，支持BT/磁力/HTTP/网盘，IDM替代品，无广告。', cat: 'download', url: 'https://www.xdown.tv', tag: '免费开源' },

  // ===== 系统工具 =====
  { id: 'potplayer', name: 'Potplayer', desc: 'Windows最强视频播放器，支持几乎所有音视频格式，功能定制能力极强。', cat: 'system', url: 'https://potplayer.daum.net', tag: '免费' },
  { id: '7zip', name: '7-Zip', desc: '免费开源压缩工具，支持ZIP、RAR、7z等格式，解压速度快，无广告。', cat: 'system', url: 'https://www.7-zip.org', tag: '免费开源' },
  { id: 'everything', name: 'Everything', desc: 'Windows文件搜索神器，基于NTFS索引，输入即显示结果，定位文件极快。', cat: 'system', url: 'https://www.voidtools.com', tag: '免费' },
  { id: 'snipaste', name: 'Snipaste', desc: '截图+贴图工具，截图、标注、贴图到屏幕最前端，效率神器。', cat: 'system', url: 'https://www.snipaste.com', tag: '免费' },
  { id: 'listary', name: 'Listary', desc: 'Windows全局搜索增强，双击Ctrl快速呼出，文件/应用秒搜。', cat: 'system', url: 'https://www.listary.com', tag: '免费' },
  { id: 'bandizip', name: 'Bandizip', desc: '轻量压缩工具，支持多种格式，界面美观，解压预览功能强大。', cat: 'system', url: 'https://www.bandisoft.com/bandizip', tag: '免费' },

  // ===== 开发工具 =====
  { id: 'vscode', name: 'VS Code', desc: '微软开源代码编辑器，多语言、智能补全、Git集成、扩展市场，程序员必备。', cat: 'dev', url: 'https://code.visualstudio.com', tag: '免费开源' },
  { id: 'git', name: 'Git', desc: '分布式版本控制，管理代码变更，支持多人协作，现代软件开发标配。', cat: 'dev', url: 'https://git-scm.com', tag: '免费开源' },
  { id: 'docker', name: 'Docker', desc: '容器化平台，环境一致性保证，DevOps和微服务基础设施。', cat: 'dev', url: 'https://www.docker.com', tag: '免费' },
  { id: 'github', name: 'GitHub', desc: '全球最大代码托管平台，GitHub Actions CI/CD，开发者社区和开源生态核心。', cat: 'dev', url: 'https://github.com', tag: '免费' },
  { id: 'cursor', name: 'Cursor', desc: 'AI代码编辑器，基于VS Code，AI自动补全、代码生成、聊天辅助编程。', cat: 'dev', url: 'https://cursor.sh', tag: '免费' },
  { id: 'copilot', name: 'GitHub Copilot', desc: 'GitHub AI编程助手，代码补全、函数生成、Bug修复，提高编程效率。', cat: 'dev', url: 'https://github.com/features/copilot', tag: '付费' },
  { id: 'postman', name: 'Postman', desc: 'API开发和测试工具，接口调试、自动化测试、团队协作，开发者必备。', cat: 'dev', url: 'https://www.postman.com', tag: '免费' },

  // ===== 新增工具 =====

  // AI对话新增
  { id: 'gemini', name: 'Gemini', desc: 'Google最新多模态AI，支持文本、图像、代码、视频理解，集成Google生态，免费可用。', cat: 'chatbot', url: 'https://gemini.google.com', tag: '免费可用' },
  { id: 'glm', name: '智谱清言', desc: '智谱AI大模型，GLM系列，支持长文本、代码、多模态，国产开源代表。', cat: 'chatbot', url: 'https://chatglm.cn', tag: '免费额度' },
  { id: 'tiangong', name: '天工AI', desc: '昆仑万维AI助手，支持AI搜索、对话、写作，集成搜索引擎能力。', cat: 'chatbot', url: 'https://www.tiangong.cn', tag: '免费' },
  { id: 'yuanbao', name: '腾讯元宝', desc: '腾讯混元大模型，支持对话、写作、图像生成，集成微信生态。', cat: 'chatbot', url: 'https://yuanbao.tencent.com', tag: '免费' },

  // AI图像新增
  { id: 'ideogram', name: 'Ideogram', desc: 'AI图像生成工具，文字渲染能力极强，海报和Logo设计首选，免费额度充足。', cat: 'image', url: 'https://ideogram.ai', tag: '免费额度' },
  { id: 'flux', name: 'Flux', desc: 'Black Forest Labs出品，开源图像生成模型，画质细腻，人体和手部细节出色。', cat: 'image', url: 'https://blackforestlabs.ai', tag: '免费开源' },
  { id: 'playground', name: 'Playground AI', desc: '免费AI图像生成平台，支持多种模型，社区作品丰富，适合初学者。', cat: 'image', url: 'https://playground.com', tag: '免费' },

  // AI视频新增
  { id: 'vidu', name: 'Vidu', desc: '生数科技AI视频生成，支持文生视频和图生视频，国产视频AI领先者。', cat: 'video', url: 'https://www.vidu.studio', tag: '免费额度' },
  { id: 'luma', name: 'Luma Dream Machine', desc: 'AI视频生成工具，高质量3D视频和动画，效果逼真，免费试用。', cat: 'video', url: 'https://lumalabs.ai', tag: '免费试用' },

  // AI写作新增
  { id: 'grammarly', name: 'Grammarly', desc: 'AI英文写作助手，语法纠错、风格优化、抄袭检测，英文写作必备。', cat: 'writing', url: 'https://www.grammarly.com', tag: '免费额度' },
  { id: 'quillbot', name: 'QuillBot', desc: 'AI改写和润色工具，支持多语言，段落改写、语法检查、摘要生成。', cat: 'writing', url: 'https://quillbot.com', tag: '免费额度' },

  // AI音频新增
  { id: 'suno', name: 'Suno', desc: 'AI音乐生成平台，输入文字描述即可生成完整歌曲，支持多种音乐风格。', cat: 'audio', url: 'https://suno.com', tag: '免费额度' },
  { id: 'udio', name: 'Udio', desc: 'AI音乐创作工具，高质量音乐生成，支持人声和乐器，音乐人新选择。', cat: 'audio', url: 'https://www.udio.com', tag: '免费额度' },
  { id: 'ttsmaker', name: 'TTSMaker', desc: '免费文字转语音工具，支持50+种语言和多种音色，在线即用无需注册。', cat: 'audio', url: 'https://ttsmaker.cn', tag: '免费' },

  // AI办公新增
  { id: 'canva-ai', name: 'Canva AI', desc: '在线设计平台AI功能，一键生成海报、PPT、社交媒体图，模板丰富。', cat: 'office', url: 'https://www.canva.com', tag: '免费额度' },

  // 浏览器新增
  { id: 'brave', name: 'Brave', desc: '注重隐私的浏览器，内置广告拦截，速度快，支持Chrome扩展。', cat: 'browser', url: 'https://brave.com', tag: '免费' },
  { id: 'vivaldi', name: 'Vivaldi', desc: '高度自定义浏览器，标签页堆叠、内置笔记，功能丰富，极客首选。', cat: 'browser', url: 'https://vivaldi.com', tag: '免费' },

  // 下载工具新增
  { id: 'aria2', name: 'Aria2', desc: '命令行下载工具，支持HTTP/FTP/BT/磁力，轻量高效，服务器常用。', cat: 'download', url: 'https://aria2.github.io', tag: '免费开源' },
  { id: 'neatdownload', name: 'Neat Download Manager', desc: '免费下载管理器，跨平台支持，简洁高效，IDM免费替代品。', cat: 'download', url: 'https://www.neatdownloadmanager.com', tag: '免费' },

  // 系统工具新增
  { id: 'obs', name: 'OBS Studio', desc: '免费开源录屏直播软件，支持多场景、多源叠加，直播和录屏首选。', cat: 'system', url: 'https://obsproject.com', tag: '免费开源' },
  { id: 'powerToys', name: 'PowerToys', desc: '微软官方Windows增强工具集，包含PowerToys Run、FancyZones等实用功能。', cat: 'system', url: 'https://github.com/microsoft/PowerToys', tag: '免费开源' },
  { id: 'geek', name: 'Geek Uninstaller', desc: 'Windows彻底卸载工具，强制卸载+清理残留，体积小巧免安装。', cat: 'system', url: 'https://geekuninstaller.com', tag: '免费' },

  // 开发工具新增
  { id: 'vercel', name: 'Vercel', desc: '前端部署平台，支持Next.js/Nuxt等框架，全球CDN，开发者首选。', cat: 'dev', url: 'https://vercel.com', tag: '免费额度' },
  { id: 'figma', name: 'Figma', desc: '在线UI设计工具，实时协作，组件库丰富，设计师和前端必备。', cat: 'dev', url: 'https://www.figma.com', tag: '免费额度' },
]

// 根据 cat id 获取分类名称
export const catName = (id: string): string => {
  const found = categories.find(c => c.id === id)
  return found ? found.label : ''
}

// 根据 cat id 获取分类 SVG 图标
export const catSvg = (id: string): string => {
  const map: Record<string, string> = {
    chatbot: svgChat,
    image: svgImage,
    video: svgVideo,
    writing: svgWrite,
    audio: svgAudio,
    office: svgOffice,
    browser: svgBrowser,
    download: svgDownload,
    system: svgSystem,
    dev: svgDev,
  }
  return map[id] || svgHome
}
