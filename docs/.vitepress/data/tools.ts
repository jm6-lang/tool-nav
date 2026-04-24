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
  { id: 'chatgpt', name: 'ChatGPT', desc: 'OpenAI旗舰对话AI，搭载GPT-4o多模态模型，支持文本、图像、语音交互，内置代码解释器、联网搜索和GPTs自定义助手生态，覆盖编程、写作、分析等全场景，全球用户超2亿。', cat: 'chatbot', url: 'https://chat.openai.com', tag: '免费可用', hot: true, tags: ['多模态', '代码生成', 'GPT-4o'] },
  { id: 'claude', name: 'Claude', desc: 'Anthropic旗下AI助手，搭载Claude 3.5 Sonnet模型，支持200K超长上下文窗口，在代码生成、学术写作和复杂推理方面表现卓越，以安全性和准确性著称，适合深度分析任务。', cat: 'chatbot', url: 'https://claude.ai', tag: '免费额度', hot: true, tags: ['长文本', '安全', '200K上下文'] },
  { id: 'qianwen', name: '通义千问', desc: '阿里云通义千问大模型，支持多轮对话、代码编写、文档解析和图像理解，内置通义听悟和通义万相等多模态能力，中文理解深度优秀，免费版功能丰富，国内用户首选之一。', cat: 'chatbot', url: 'https://qianwen.aliyun.com', tag: '免费可用', tags: ['中文优化', '代码编写', '多模态'] },
  { id: 'doubao', name: '豆包', desc: '字节跳动推出的AI智能助手，基于豆包大模型，支持智能对话、文案创作、图片生成和知识问答，深度集成抖音、飞书、今日头条等字节生态，提供便捷的跨平台AI体验。', cat: 'chatbot', url: 'https://www.doubao.com', tag: '免费', tags: ['多模态', '写作辅助', '飞书生态'] },
  { id: 'yiyan', name: '文心一言', desc: '百度文心一言，基于文心大模型4.0，擅长中文理解与生成，支持对话问答、文案写作、代码生成和AI绘画，内置插件生态涵盖搜索、图表、数据分析等场景，国内用户量领先。', cat: 'chatbot', url: 'https://yiyan.baidu.com', tag: '免费', tags: ['中文理解', '多场景', '插件生态'] },
  { id: 'kimi', name: 'Kimi', desc: '月之暗面推出的AI助手，支持200万字超长上下文输入，可一次性阅读整本书或多篇长文档，擅长长文摘要、资料整理、论文分析和多轮深度对话，学术和办公场景表现突出。', cat: 'chatbot', url: 'https://kimi.moonshot.cn', tag: '免费额度', hot: true, tags: ['超长上下文', '长文阅读', '资料整理'] },
  { id: 'deepseek', name: 'DeepSeek', desc: '深度求索推出的国产开源大模型，DeepSeek-V3在代码生成和数学推理方面达到国际领先水平，完全开源且API价格极低，支持128K上下文，是开发者和企业的性价比首选。', cat: 'chatbot', url: 'https://www.deepseek.com', tag: '免费开源', hot: true, tags: ['开源', '代码能力', '低成本'] },
  { id: 'grok', name: 'Grok', desc: 'xAI推出的AI助手，深度集成X平台（原Twitter）实时数据流，可获取最新资讯和热点话题，回答风格幽默犀利，支持图像生成和代码编写，X Premium用户可免费使用。', cat: 'chatbot', url: 'https://x.com/i/grok', tag: '付费', tags: ['实时数据', 'X平台', '个性化'] },
  { id: 'poe', name: 'Poe', desc: 'Quora旗下AI聚合平台，一站集成ChatGPT、Claude、Gemini、Llama等主流大模型，支持自定义Bot创建和模型切换对比，提供统一的对话界面管理多个AI助手，免费额度每日更新。', cat: 'chatbot', url: 'https://poe.com', tag: '免费额度', tags: ['多模型聚合', '一站访问', '社区Bot'] },
  { id: 'perplexity', name: 'Perplexity', desc: 'AI驱动的智能搜索引擎，实时联网检索并生成结构化回答，每条回答附带引用来源链接，支持文件上传分析、学术搜索和深度研究模式，是传统搜索引擎的强力替代品。', cat: 'chatbot', url: 'https://www.perplexity.ai', tag: '免费额度', hot: true, tags: ['AI搜索', '实时联网', '引用来源'] },

  // ===== AI 图像 =====
  { id: 'midjourney', name: 'Midjourney', desc: '顶级AI绘画工具，通过Discord或网页端输入文字描述即可生成高质量艺术图像，V6版本在细节还原、光影表现和文字渲染方面大幅提升，支持风格参考、图片混合和局部重绘，艺术创作者首选。', cat: 'image', url: 'https://www.midjourney.com', tag: '付费', hot: true, tags: ['AI绘画', '艺术风格', 'Discord'] },
  { id: 'stable-diffusion', name: 'Stable Diffusion', desc: 'Stability AI推出的开源图像生成模型，支持本地部署和完全自定义，通过LoRA微调、ControlNet精准控制和ComfyUI节点式工作流，可实现高度定制化的图像生成，社区生态极其丰富。', cat: 'image', url: 'https://stability.ai', tag: '免费开源', hot: true, tags: ['开源', 'LoRA定制', 'ControlNet'] },
  { id: 'dalle', name: 'DALL-E 3', desc: 'OpenAI推出的图像生成模型DALL-E 3，集成在ChatGPT中直接使用，对复杂提示词的理解能力极强，图像细节丰富、构图精准，文字渲染准确率在同类产品中领先，适合需要精确控制的场景。', cat: 'image', url: 'https://openai.com/dall-e-3', tag: '付费', tags: ['提示词理解', '文字渲染', 'OpenAI'] },
  { id: 'wanx', name: '通义万相', desc: '阿里通义万相，支持文生图、图生图、涂鸦生图和风格迁移等多种模式，中文提示词理解优秀，提供丰富的中国风和商业设计模板，免费额度充足，国内用户生成AI图像的便捷选择。', cat: 'image', url: 'https://wanx.alibaba.com', tag: '免费额度', tags: ['文生图', '风格迁移', '阿里云'] },
  { id: 'yige', name: '文心一格', desc: '百度文心一格，基于文心大模型的AI绘画平台，中文提示词理解精准，支持油画、水彩、素描、3D等多种艺术风格，提供一键修图和高清放大功能，适合国内用户快速生成艺术作品。', cat: 'image', url: 'https://yige.baidu.com', tag: '免费', tags: ['中文提示词', '艺术生成', '百度'] },
  { id: 'comfyui', name: 'ComfyUI', desc: '基于节点的Stable Diffusion图形化工作流编辑器，通过可视化节点连接构建复杂的图像生成流水线，支持LoRA、ControlNet、IPAdapter等插件扩展，高度灵活可定制，进阶用户必备工具。', cat: 'image', url: 'https://github.com/comfyanonymous/ComfyUI', tag: '免费开源', tags: ['节点式', '工作流', '进阶定制'] },
  { id: 'leonardo', name: 'Leonardo.ai', desc: 'AI图像生成和编辑平台，内置多种预设风格模型（如3D渲染、动漫、摄影），提供实时画布编辑、图像放大和背景移除功能，每日免费额度150张，社区作品丰富，适合设计师快速出图。', cat: 'image', url: 'https://leonardo.ai', tag: '免费额度', tags: ['风格预设', '社区', '游戏素材'] },
  { id: 'adobe-firefly', name: 'Adobe Firefly', desc: 'Adobe推出的AI图像生成工具，深度集成Photoshop、Illustrator等创意套件，支持文生图、生成式填充、文字特效和矢量图生成，所有训练数据均获授权，商业使用安全无忧。', cat: 'image', url: 'https://firefly.adobe.com', tag: '免费额度', tags: ['Adobe集成', '内容凭证', '商业安全'] },
  { id: 'remove-bg', name: 'Remove.bg', desc: 'AI一键抠图工具，基于深度学习算法自动识别前景主体并精确移除背景，5秒内完成处理，支持人像、产品、动物等多种场景，提供API接口和批量处理功能，电商和设计行业广泛使用。', cat: 'image', url: 'https://www.remove.bg', tag: '免费额度', tags: ['一键抠图', '批量处理', 'API接口'] },

  // ===== AI 视频 =====
  { id: 'sora', name: 'Sora', desc: 'OpenAI推出的文本生成视频模型，可根据文字描述生成长达60秒的高清视频，在物理世界模拟、镜头运动和场景连贯性方面表现惊人，目前面向部分创作者开放测试，引领AI视频生成新纪元。', cat: 'video', url: 'https://openai.com/sora', tag: '测试中', tags: ['文生视频', '60秒高清', 'OpenAI'] },
  { id: 'runway', name: 'Runway', desc: '专业AI视频编辑与生成平台，提供Gen-2文生视频、运动追踪、视频抠像、背景移除和慢动作等专业功能，支持4K分辨率输出，好莱坞影视制作团队广泛使用，是视频创作者的强大工具。', cat: 'video', url: 'https://runwayml.com', tag: '付费', hot: true, tags: ['视频编辑', '运动追踪', '影视级'] },
  { id: 'pika', name: 'Pika', desc: '新兴AI视频生成工具，支持文本生成视频和图片生成视频两种模式，可精确控制镜头运动和角色动作，提供视频延长、局部修改和口型同步功能，操作简洁直观，适合快速创作短视频内容。', cat: 'video', url: 'https://pika.art', tag: '免费试用', tags: ['图生视频', '简单易用', '流畅自然'] },
  { id: 'zenvideo', name: '腾讯智影', desc: '腾讯智影，一站式AI视频创作平台，提供数字人播报、智能字幕、文本配音、画面裁剪和模板套用等功能，集成腾讯云能力，支持批量生产，适合企业宣传、新闻播报和教育培训场景。', cat: 'video', url: 'https://zenvideo.qq.com', tag: '免费', tags: ['数字人', '智能剪辑', '字幕生成'] },
  { id: 'kling', name: '快影AI（可灵）', desc: '快手推出的可灵AI视频生成模型，支持生成5秒以上高清视频，在人物动作连贯性、镜头运动流畅度和物理效果模拟方面表现优异，提供图生视频和文生视频两种模式，国产AI视频领先者。', cat: 'video', url: 'https://klingai.com', tag: '免费额度', tags: ['高清视频', '动作连贯', '国产'] },
  { id: 'haiper', name: 'Haiper', desc: 'AI视频生成工具，支持文本描述生成短视频、图片动画化和视频风格转换，提供视频续写功能可延长已有视频内容，操作简单且免费试用，适合社交媒体内容创作者快速产出视频素材。', cat: 'video', url: 'https://haiper.ai', tag: '免费试用', tags: ['视频续写', '风格转换', '创新'] },

  // ===== AI 写作 =====
  { id: 'notion-ai', name: 'Notion AI', desc: 'Notion内置AI写作助手，可在文档、笔记和数据库中直接调用，支持内容续写、自动总结、翻译润色、提取要点和生成大纲，与Notion的知识库无缝集成，是知识工作者的高效写作伙伴。', cat: 'writing', url: 'https://notion.so', tag: '付费', hot: true, tags: ['笔记集成', '续写总结', '团队协作'] },
  { id: 'copy-ai', name: 'Copy.ai', desc: 'AI营销文案生成平台，提供广告文案、社交媒体帖子、产品描述、邮件模板和博客文章等多种模板，支持多语言输出和品牌语气定制，内置工作流自动化功能，营销团队提升效率的利器。', cat: 'writing', url: 'https://www.copy.ai', tag: '免费试用', tags: ['营销文案', '广告', '邮件模板'] },
  { id: 'xiezuocat', name: '秘塔写作猫', desc: '秘塔写作猫，专注中文AI写作辅助，提供文章续写、错别字纠正、语法修改、文风改写和智能配图功能，支持中英文混合写作，全中文界面操作友好，适合学生、编辑和内容创作者日常使用。', cat: 'writing', url: 'https://xiezuocat.com', tag: '免费', tags: ['中文写作', '错别字纠正', '文风改写'] },
  { id: 'xfwriting', name: '讯飞写作', desc: '科大讯飞AI写作平台，支持多语种内容创作、语音输入转文字和会议记录智能整理，提供公文写作、新闻稿和商业报告等专业模板，语音识别准确率行业领先，适合政企用户和媒体从业者。', cat: 'writing', url: 'https://xf.xunfei.cn', tag: '免费', tags: ['语音输入', '多语种', '会议记录'] },
  { id: 'jasper', name: 'Jasper', desc: '企业级AI内容创作平台，支持SEO优化文案、博客文章、广告语和社交媒体内容批量生成，内置品牌知识库确保输出风格一致，提供团队协作和工作流管理功能，大型营销团队的首选工具。', cat: 'writing', url: 'https://www.jasper.ai', tag: '付费', tags: ['企业级', 'SEO文案', '品牌语气'] },
  { id: 'wps-ai', name: 'WPS AI', desc: '金山办公推出的AI助手，深度集成在WPS文档、表格和演示中，支持智能写作、文档润色、数据分析和一键生成PPT，移动端和PC端同步使用，国产办公软件AI化的标杆产品。', cat: 'writing', url: 'https://ai.wps.cn', tag: '免费', tags: ['文档写作', '润色总结', '移动端'] },

  // ===== AI 音频 =====
  { id: 'elevenlabs', name: 'ElevenLabs', desc: '业界领先的AI语音合成和克隆平台，支持29种语言和数百种预设音色，语音自然度和情感表达接近真人水平，提供语音克隆、变声器和API接口，被广泛应用于有声书、播客和视频配音。', cat: 'audio', url: 'https://elevenlabs.io', tag: '免费试用', tags: ['语音克隆', '多语言', '声音风格'] },
  { id: 'jianying', name: '剪映', desc: '字节跳动推出的全能视频剪辑工具，内置AI智能配音、自动字幕生成、画面优化和音乐推荐功能，提供丰富的滤镜、特效和转场模板，零基础用户也能快速剪辑出专业级短视频，国内用户量最大。', cat: 'audio', url: 'https://www.capcut.cn', tag: '免费', tags: ['视频剪辑', 'AI配音', '智能字幕'] },
  { id: 'iflyrec', name: '讯飞听见', desc: '科大讯飞语音转写平台，支持实时语音识别和录音文件转写，中文识别准确率超过98%，提供智能区分说话人、自动生成会议纪要和多语种翻译功能，适合会议记录、采访整理和字幕制作。', cat: 'audio', url: 'https://www.iflyrec.com', tag: '免费额度', tags: ['语音转文字', '会议转写', '高准确率'] },
  { id: 'murf', name: 'Murf AI', desc: '专业AI配音平台，提供120多种高质量AI音色覆盖多种语言和地区口音，支持语音克隆、语速调节和音高控制，内置视频编辑器可同步配音与画面，适合企业培训、产品演示和商业广告制作。', cat: 'audio', url: 'https://murf.ai', tag: '付费', tags: ['专业配音', '声音编辑', '商业视频'] },

  // ===== AI 办公 =====
  { id: 'gamma', name: 'Gamma', desc: 'AI演示文稿生成工具，输入主题或大纲即可自动生成排版精美的PPT，支持嵌入图片、视频、图表和网页，提供多种设计主题和布局模板，可导出为PPT或PDF，大幅缩短演示文稿制作时间。', cat: 'office', url: 'https://gamma.app', tag: '免费试用', tags: ['AI生成PPT', '自动排版', '自定义样式'] },
  { id: 'beautiful-ai', name: 'Beautiful.ai', desc: 'AI驱动的智能演示文稿工具，自动优化排版布局和视觉设计，用户只需关注内容输入，系统实时调整字体、配色和元素位置确保美观一致，提供丰富的行业模板，适合商务汇报和产品展示。', cat: 'office', url: 'https://www.beautiful.ai', tag: '付费', tags: ['自动排版', '设计优化', '高效制作'] },
  { id: 'tome', name: 'Tome', desc: 'AI叙事型幻灯片生成工具，以讲故事为核心逻辑自动构建演示结构，支持嵌入3D模型、Figma设计稿、网页和视频等多媒体内容，提供协作编辑和分享功能，适合创意提案和产品路演。', cat: 'office', url: 'https://tome.app', tag: '免费试用', tags: ['叙事驱动', '3D嵌入', '多媒体'] },
  { id: 'mindshow', name: 'MindShow', desc: '国产AI演示文稿生成工具，支持Markdown大纲一键转换为精美PPT，提供多种设计主题和配色方案，内置AI内容优化功能可自动扩展要点，免费使用且支持导出PPTX格式，国内用户友好。', cat: 'office', url: 'https://mindshow.fun', tag: '免费', tags: ['大纲生成', '多主题', '国产免费'] },
  { id: 'slidesgo', name: 'Slidesgo', desc: 'Freepik旗下AI幻灯片模板平台，提供数千套由专业设计师制作的免费PPT模板，覆盖商务、教育、科技、医疗等行业，支持在线编辑和AI内容生成，与Google Slides和PowerPoint兼容。', cat: 'office', url: 'https://slidesgo.com', tag: '免费额度', tags: ['模板库', '行业模板', '在线编辑'] },
  { id: 'chartai', name: 'ChartGPT', desc: 'AI图表生成工具，输入数据或描述即可自动生成柱状图、折线图、饼图、散点图等多种精美图表，支持数据可视化建议和样式自定义，适合数据报告、学术展示和商业分析场景。', cat: 'office', url: 'https://chartgpt.io', tag: '免费', tags: ['数据可视化', '多图表类型', '自动生成'] },

  // ===== 浏览器 =====
  { id: 'chrome', name: 'Chrome', desc: 'Google推出的全球市场份额最大的浏览器，基于Chromium内核，V8引擎性能强劲，Chrome Web Store拥有数十万扩展插件，支持跨设备同步书签密码，开发者工具功能完善，全球用户超30亿。', cat: 'browser', url: 'https://www.google.com/chrome', tag: '免费', tags: ['Chromium', '扩展生态', '高性能'] },
  { id: 'edge', name: 'Edge', desc: '微软基于Chromium内核打造的浏览器，Windows系统预装，内置IE兼容模式可访问老旧网站，集成Copilot AI助手、Collections收藏夹和垂直标签页，与Office 365深度联动，国内访问无需翻墙。', cat: 'browser', url: 'https://www.microsoft.com/edge', tag: '免费', tags: ['Chromium', 'IE兼容', 'Windows预装'] },
  { id: 'firefox', name: 'Firefox', desc: 'Mozilla基金会维护的开源浏览器，采用Gecko引擎，注重用户隐私保护，内置增强型跟踪保护和容器标签页隔离功能，高度可定制，支持丰富的扩展生态，隐私意识用户的最佳选择。', cat: 'browser', url: 'https://www.mozilla.org/firefox', tag: '免费', tags: ['开源', '隐私保护', '高度自定义'] },
  { id: 'arc', name: 'Arc', desc: 'The Browser Company推出的颠覆性浏览器，采用垂直标签页和空间（Space）概念组织浏览内容，界面设计精美现代，内置AI助手Arc Max，支持Easel网页笔记功能，目前支持macOS和Windows。', cat: 'browser', url: 'https://arc.net', tag: '免费', tags: ['垂直标签', '空间概念', 'Mac'] },

  // ===== 下载工具 =====
  { id: 'idm', name: 'IDM', desc: 'Windows平台最强下载管理器，支持多线程加速下载（最高32线程），浏览器一键捕获下载链接，内置视频嗅探器可自动检测网页中的视频文件，支持断点续传和队列下载，下载速度远超浏览器自带下载。', cat: 'download', url: 'https://www.internetdownloadmanager.com', tag: '付费', tags: ['多线程', '断点续传', '视频抓取'] },
  { id: 'motrix', name: 'Motrix', desc: '开源免费的全能下载管理器，支持HTTP、FTP、BT种子和磁力链下载，界面简洁现代，支持下载队列管理和限速设置，跨平台支持Windows、macOS和Linux，是IDM的优秀免费替代品。', cat: 'download', url: 'https://motrix.app', tag: '免费开源', tags: ['开源', 'BT磁力', '网盘下载'] },
  { id: 'adm', name: 'ADM', desc: '安卓平台高效下载管理器，支持多线程加速和断点续传，可拦截浏览器下载请求接管文件下载，支持BT种子和磁力链，提供文件分类管理和下载速度限制功能，Android设备下载大文件的首选工具。', cat: 'download', url: 'https://play.google.com/store/apps/details?id=com.dv.adm', tag: '免费', tags: ['安卓', '多线程加速', '移动端'] },
  { id: 'xdown', name: 'XDown', desc: '免费开源的下载管理器，支持HTTP、BT、磁力链和网盘资源下载，采用多线程加速技术，支持浏览器扩展一键捕获下载，界面简洁无广告，轻量高效，是Windows平台IDM的免费替代方案。', cat: 'download', url: 'https://www.xdown.tv', tag: '免费开源', tags: ['开源', 'BT磁力', '无广告'] },

  // ===== 系统工具 =====
  { id: 'potplayer', name: 'Potplayer', desc: 'Windows平台功能最强大的本地视频播放器，支持几乎所有音视频格式（含HEVC、VP9），内置硬件加速解码，支持3D视频、多音轨切换、字幕在线搜索和画面滤镜调节，播放体验流畅专业。', cat: 'system', url: 'https://potplayer.daum.net', tag: '免费', tags: ['全格式', '硬件加速', '高度定制'] },
  { id: '7zip', name: '7-Zip', desc: '开源免费的高压缩比压缩工具，支持ZIP、RAR、7z、TAR等数十种压缩格式，7z格式压缩率比ZIP高出30-70%，支持分卷压缩和AES-256加密，命令行和图形界面双模式，体积小巧无广告。', cat: 'system', url: 'https://www.7-zip.org', tag: '免费开源', tags: ['开源', '多格式', '高压缩比'] },
  { id: 'everything', name: 'Everything', desc: 'Windows平台最快的文件搜索工具，基于NTFS文件系统索引实现即时搜索，输入关键词瞬间显示匹配结果，支持正则表达式、文件类型过滤和HTTP/FTP服务器分享，百万级文件秒级定位。', cat: 'system', url: 'https://www.voidtools.com', tag: '免费', tags: ['文件搜索', 'NTFS索引', '极速定位'] },
  { id: 'snipaste', name: 'Snipaste', desc: '截图+贴图效率工具，支持矩形、不规则和滚动截图，截图后可直接贴在屏幕最前端作为参考，内置标注工具（箭头、文字、马赛克），支持取色器和历史截图管理，提升工作效率的必备神器。', cat: 'system', url: 'https://www.snipaste.com', tag: '免费', tags: ['截图标注', '屏幕贴图', '效率工具'] },
  { id: 'listary', name: 'Listary', desc: 'Windows全局文件搜索和启动增强工具，双击Ctrl键即可呼出搜索框，输入关键词秒搜文件、文件夹和应用程序，支持快捷命令、自定义关键词和文件操作，大幅提升Windows文件管理效率。', cat: 'system', url: 'https://www.listary.com', tag: '免费', tags: ['全局搜索', '快捷键', '文件定位'] },
  { id: 'bandizip', name: 'Bandizip', desc: '轻量高效的压缩解压工具，支持ZIP、RAR、7z、ALZ等数十种格式，界面美观操作简洁，支持预览压缩包内文件、分卷压缩和密码管理，v7版本改为付费后，v6.25仍是免费使用的经典版本。', cat: 'system', url: 'https://www.bandisoft.com/bandizip', tag: '免费', tags: ['轻量', '多格式', '解压预览'] },

  // ===== 开发工具 =====
  { id: 'vscode', name: 'VS Code', desc: '微软推出的开源代码编辑器，支持数百种编程语言的智能补全和语法高亮，内置Git版本控制、集成终端和调试器，扩展市场拥有数万款插件，轻量高效，是全球程序员使用最广泛的开发工具。', cat: 'dev', url: 'https://code.visualstudio.com', tag: '免费开源', hot: true, tags: ['代码编辑', '插件生态', '多语言'] },
  { id: 'git', name: 'Git', desc: '分布式版本控制系统，支持分支管理、代码合并和冲突解决，记录每一次代码变更历史，支持GitHub、GitLab等远程仓库协作，是现代软件开发的标准基础设施，每位开发者必须掌握的核心工具。', cat: 'dev', url: 'https://git-scm.com', tag: '免费开源', tags: ['版本控制', '多人协作', '分布式'] },
  { id: 'docker', name: 'Docker', desc: '容器化应用部署平台，通过Dockerfile定义运行环境，将应用及其依赖打包为轻量级容器镜像，实现"一次构建，处处运行"，是微服务架构和DevOps流程的核心基础设施，开发和运维必备。', cat: 'dev', url: 'https://www.docker.com', tag: '免费', tags: ['容器化', 'DevOps', '微服务'] },
  { id: 'github', name: 'GitHub', desc: '全球最大的代码托管和开源协作平台，提供Git仓库管理、Pull Request代码审查、GitHub Actions CI/CD自动化和GitHub Pages静态网站托管，拥有超过1亿开发者，是开源生态的核心枢纽。', cat: 'dev', url: 'https://github.com', tag: '免费', hot: true, tags: ['代码托管', 'CI/CD', '开源社区'] },
  { id: 'cursor', name: 'Cursor', desc: '基于VS Code深度定制的AI代码编辑器，内置AI对话、代码自动补全和多文件编辑功能，支持自然语言描述需求自动生成代码，理解整个项目上下文，显著提升编程效率，被誉为一款"AI原生"的开发工具。', cat: 'dev', url: 'https://cursor.sh', tag: '免费', hot: true, tags: ['AI编程', 'VS Code', '代码补全'] },
  { id: 'copilot', name: 'GitHub Copilot', desc: 'GitHub推出的AI编程助手，基于OpenAI Codex模型训练，支持实时代码补全、函数生成、单元测试编写和Bug修复建议，深度集成VS Code和JetBrains等主流IDE，支持数十种编程语言。', cat: 'dev', url: 'https://github.com/features/copilot', tag: '付费', hot: true, tags: ['AI补全', '函数生成', 'Bug修复'] },
  { id: 'postman', name: 'Postman', desc: 'API开发和测试的全方位工具，支持HTTP请求构建、响应检查和自动化测试脚本编写，提供Mock Server模拟接口、环境变量管理和团队协作功能，内置API文档生成，是前后端开发者必备的接口调试工具。', cat: 'dev', url: 'https://www.postman.com', tag: '免费', tags: ['API调试', '自动化测试', '团队协作'] },

  // ===== 新增工具 =====

  // AI对话新增
  { id: 'gemini', name: 'Gemini', desc: 'Google DeepMind推出的多模态AI，原生支持文本、图像、音频、视频理解，Gemini 1.5 Pro拥有100万token超长上下文，深度集成Google搜索、Gmail、Docs等生态，免费开放。', cat: 'chatbot', url: 'https://gemini.google.com', tag: '免费可用', hot: true, tags: ['多模态', 'Google生态', '免费'] },
  { id: 'glm', name: '智谱清言', desc: '智谱AI推出的GLM系列大模型，支持长文本理解、代码生成和多模态交互，提供GLM-4和开源ChatGLM等多个版本，在中文场景下表现优异，API兼容OpenAI格式，开发者友好。', cat: 'chatbot', url: 'https://chatglm.cn', tag: '免费额度', tags: ['GLM系列', '长文本', '国产开源'] },
  { id: 'tiangong', name: '天工AI', desc: '昆仑万维推出的AI助手，集成AI搜索、智能对话和内容创作功能，支持实时联网检索最新信息，提供文档阅读和数据分析能力，免费开放，适合日常信息查询和知识获取。', cat: 'chatbot', url: 'https://www.tiangong.cn', tag: '免费', tags: ['AI搜索', '对话写作', '搜索引擎'] },
  { id: 'yuanbao', name: '腾讯元宝', desc: '腾讯混元大模型驱动的AI助手，支持多轮对话、文案写作和图像生成，深度集成微信搜一搜和腾讯文档生态，提供便捷的内容创作和知识问答服务，国内用户可直接访问。', cat: 'chatbot', url: 'https://yuanbao.tencent.com', tag: '免费', tags: ['混元大模型', '图像生成', '微信生态'] },

  // AI图像新增
  { id: 'ideogram', name: 'Ideogram', desc: 'AI图像生成工具，在文字渲染方面表现极为出色，可精确生成包含英文文字的海报、Logo和标志设计，图像质量高且风格多样，免费额度充足，是平面设计师的AI绘图新选择。', cat: 'image', url: 'https://ideogram.ai', tag: '免费额度', tags: ['文字渲染', '海报设计', 'Logo设计'] },
  { id: 'flux', name: 'Flux', desc: 'Black Forest Labs推出的开源图像生成模型，由Stable Diffusion原班团队打造，在画质细腻度、人体比例和手部细节方面表现卓越，提供Pro和Dev等多个版本，开源社区活跃。', cat: 'image', url: 'https://blackforestlabs.ai', tag: '免费开源', tags: ['开源', '高画质', '人体细节'] },
  { id: 'playground', name: 'Playground AI', desc: '免费AI图像生成平台，集成多种开源模型（包括Stable Diffusion和Playground v2.5），提供在线编辑器支持笔刷修改、图像扩展和背景替换，社区分享大量优质作品和提示词模板。', cat: 'image', url: 'https://playground.com', tag: '免费', tags: ['免费生成', '多模型', '社区作品'] },

  // AI视频新增
  { id: 'vidu', name: 'Vidu', desc: '生数科技推出的AI视频生成平台，支持文生视频和图生视频，可生成4秒至8秒的高清视频片段，在人物一致性和场景连贯性方面表现良好，国产AI视频生成领域的重要参与者。', cat: 'video', url: 'https://www.vidu.studio', tag: '免费额度', tags: ['文生视频', '图生视频', '国产'] },
  { id: 'luma', name: 'Luma Dream Machine', desc: 'Luma Dream Machine，AI视频生成工具，支持根据文字描述或参考图片生成高质量视频，在3D场景理解和运动一致性方面表现出色，提供免费试用额度，适合创意视频快速原型制作。', cat: 'video', url: 'https://lumalabs.ai', tag: '免费试用', tags: ['3D视频', '动画生成', '逼真效果'] },

  // AI写作新增
  { id: 'grammarly', name: 'Grammarly', desc: 'AI英文写作助手，实时检测语法错误、拼写问题和标点误用，提供风格优化、语气调整和清晰度建议，内置抄袭检测功能，支持Chrome浏览器插件和跨平台使用，英文写作必备工具。', cat: 'writing', url: 'https://www.grammarly.com', tag: '免费额度', tags: ['语法纠错', '风格优化', '抄袭检测'] },
  { id: 'quillbot', name: 'QuillBot', desc: 'AI文本改写和润色工具，支持段落改写、语法检查、摘要生成和翻译功能，提供多种改写模式（流畅、正式、简洁、创意），内置同义词滑块可精确控制改写程度，学术写作和内容优化的实用工具。', cat: 'writing', url: 'https://quillbot.com', tag: '免费额度', tags: ['改写润色', '多语言', '摘要生成'] },

  // AI音频新增
  { id: 'suno', name: 'Suno', desc: 'AI音乐生成平台，输入文字描述或歌词即可生成包含人声演唱和乐器编曲的完整歌曲，支持流行、摇滚、电子、古典等数十种风格，生成质量极高，音乐零基础也能创作专业级作品。', cat: 'audio', url: 'https://suno.com', tag: '免费额度', hot: true, tags: ['AI音乐', '文字生歌', '多风格'] },
  { id: 'udio', name: 'Udio', desc: 'AI音乐创作平台，在音质和人声表现方面达到专业水准，支持多种音乐风格和语言，提供精细的音频控制参数，可生成高品质的完整歌曲，音乐人和内容创作者的新型创作工具。', cat: 'audio', url: 'https://www.udio.com', tag: '免费额度', tags: ['音乐创作', '人声合成', '高质量'] },
  { id: 'ttsmaker', name: 'TTSMaker', desc: '免费在线文字转语音工具，支持50多种语言和数百种音色选择，提供语速、音调和音量调节功能，无需注册即可使用，支持批量文本转换和音频下载，适合快速生成配音和语音播报。', cat: 'audio', url: 'https://ttsmaker.cn', tag: '免费', tags: ['文字转语音', '多语言', '在线即用'] },

  // AI办公新增
  { id: 'canva-ai', name: 'Canva AI', desc: '全球领先的在线设计平台，AI功能支持一键生成海报、社交媒体图、演示文稿和视频缩略图，提供海量模板和素材库，内置AI背景移除、智能裁剪和文案生成功能，非设计师也能快速出图。', cat: 'office', url: 'https://www.canva.com', tag: '免费额度', tags: ['在线设计', '海报生成', '模板丰富'] },

  // 浏览器新增
  { id: 'brave', name: 'Brave', desc: '注重隐私保护的浏览器，基于Chromium内核，内置Brave Shields广告拦截和跟踪防护，浏览速度比Chrome快约3倍，支持Brave Search隐私搜索引擎和Brave Rewards广告收益分享计划。', cat: 'browser', url: 'https://brave.com', tag: '免费', tags: ['隐私保护', '广告拦截', 'Chrome扩展'] },
  { id: 'vivaldi', name: 'Vivaldi', desc: '高度可定制的浏览器，由Opera前CEO创立，支持标签页堆叠、分屏浏览、内置笔记和邮件客户端，提供丰富的页面操作快捷键和主题定制选项，功能密度极高，适合高级用户和极客。', cat: 'browser', url: 'https://vivaldi.com', tag: '免费', tags: ['高度自定义', '标签堆叠', '内置笔记'] },

  // 下载工具新增
  { id: 'aria2', name: 'Aria2', desc: '轻量级命令行下载工具，支持HTTP/HTTPS、FTP、BitTorrent和Metalink多种协议，支持多线程和断点续传，资源占用极低，常用于服务器环境部署，配合WebUI可实现远程下载管理。', cat: 'download', url: 'https://aria2.github.io', tag: '免费开源', tags: ['命令行', 'BT磁力', '轻量高效'] },
  { id: 'neatdownload', name: 'Neat Download Manager', desc: '免费跨平台下载管理器，支持Windows和macOS，提供多线程加速、断点续传和浏览器集成功能，界面简洁直观，支持下载队列和分类管理，是IDM的轻量级免费替代选择。', cat: 'download', url: 'https://www.neatdownloadmanager.com', tag: '免费', tags: ['跨平台', '简洁高效', 'IDM替代'] },

  // 系统工具新增
  { id: 'obs', name: 'OBS Studio', desc: '开源免费的录屏和直播软件，支持多场景、多源叠加（摄像头、屏幕、窗口、图片），内置音频混音器、场景切换和虚拟摄像头功能，支持RTMP推流至各大直播平台，录屏直播的首选工具。', cat: 'system', url: 'https://obsproject.com', tag: '免费开源', tags: ['录屏直播', '多场景', '多源叠加'] },
  { id: 'powerToys', name: 'PowerToys', desc: '微软官方推出的Windows系统增强工具集，包含PowerToys Run快捷启动器、FancyZones窗口分屏管理、Color Picker取色器、PowerRename批量重命名和Keyboard Manager快捷键管理等十余款实用工具。', cat: 'system', url: 'https://github.com/microsoft/PowerToys', tag: '免费开源', tags: ['Windows增强', '窗口管理', '官方工具'] },
  { id: 'geek', name: 'Geek Uninstaller', desc: 'Windows程序彻底卸载工具，体积仅数MB免安装，支持强制卸载残留程序和清理注册表、文件夹残留，卸载速度极快且清理彻底，是Windows自带卸载程序的完美补充，维护系统整洁的必备工具。', cat: 'system', url: 'https://geekuninstaller.com', tag: '免费', tags: ['彻底卸载', '清理残留', '免安装'] },

  // 开发工具新增
  { id: 'vercel', name: 'Vercel', desc: '前端应用部署和托管平台，对Next.js、Nuxt等框架提供一级支持，Git推送自动触发构建部署，全球CDN边缘节点确保访问速度，提供Serverless函数和边缘计算能力，前端开发者首选的部署方案。', cat: 'dev', url: 'https://vercel.com', tag: '免费额度', tags: ['前端部署', 'Next.js', '全球CDN'] },
  { id: 'figma', name: 'Figma', desc: '云端协作UI设计工具，支持实时多人协同编辑，提供矢量绘图、原型交互、组件库和设计系统管理功能，支持开发者模式自动生成CSS代码，设计师和前端工程师协作的行业标准工具。', cat: 'dev', url: 'https://www.figma.com', tag: '免费额度', tags: ['UI设计', '协作', '原型'] },

  // ===== 第二批新增工具 =====

  // AI对话新增
  { id: 'doubao-pro', name: '豆包·实时对话', desc: '字节跳动推出的实时语音AI助手，支持自然流畅的语音对话交互，可实时打断和追问，内置视觉能力可识别图片内容，提供翻译、解题、闲聊等多种场景，免费使用体验接近GPT-4o语音模式。', cat: 'chatbot', url: 'https://www.doubao.com/chat', tag: '免费', tags: ['语音对话', '实时交互', '视觉识别'] },
  { id: 'hunyuan', name: '腾讯混元', desc: '腾讯混元大模型，支持多轮对话、长文档解析、图像理解和代码生成，深度集成微信、QQ、腾讯文档等生态，提供企业级API服务，中文理解能力出色，适合办公和开发场景。', cat: 'chatbot', url: 'https://hunyuan.tencent.com', tag: '免费额度', tags: ['腾讯生态', '企业级', '多模态'] },
  { id: 'stepfun', name: '阶跃星辰', desc: '阶跃星辰推出的Step系列大模型，在中文理解和多模态方面表现突出，支持长文本处理、图像理解和代码生成，提供免费在线体验和API服务，国产大模型新锐力量。', cat: 'chatbot', url: 'https://platform.stepfun.com', tag: '免费额度', tags: ['多模态', '长文本', '国产新锐'] },
  { id: 'minimax', name: 'MiniMax', desc: 'MiniMax推出的海螺AI助手，支持高质量语音合成、多轮对话和内容创作，语音效果接近真人，支持角色扮演和情感表达，在语音交互和娱乐社交场景表现亮眼。', cat: 'chatbot', url: 'https://www.minimaxi.com', tag: '免费额度', tags: ['语音合成', '角色扮演', '情感表达'] },

  // AI图像新增
  { id: 'krea', name: 'Krea AI', desc: 'AI图像生成和增强平台，提供实时图像生成、高清放大、风格迁移和AI训练功能，支持实时预览和参数调节，界面直观易用，适合设计师快速探索创意方向。', cat: 'image', url: 'https://www.krea.ai', tag: '免费额度', tags: ['实时生成', '图像增强', '风格迁移'] },
  { id: 'clipdrop', name: 'Clipdrop', desc: 'Stability AI旗下全能AI图像编辑工具，提供一键抠图、背景替换、图像修复、文字移除、AI重绘和高清放大等功能，支持网页和移动端使用，免费版功能已足够日常使用。', cat: 'image', url: 'https://clipdrop.co', tag: '免费额度', tags: ['图像编辑', '一键抠图', 'AI修复'] },
  { id: 'tensorart', name: 'Tensor.Art', desc: '在线Stable Diffusion图像生成平台，提供海量社区模型和LoRA，支持ComfyUI工作流在线运行，免费用户每日可生成100张图片，模型库丰富，二次元和写实风格均有大量优质模型。', cat: 'image', url: 'https://tensor.art', tag: '免费额度', tags: ['SD在线', '模型库', '社区分享'] },

  // AI视频新增
  { id: 'minimax-video', name: '海螺AI视频', desc: 'MiniMax推出的AI视频生成工具，支持文本和图片生成高质量视频，在人物动作自然度和场景一致性方面表现优异，提供视频延长和风格化功能，免费试用额度充足。', cat: 'video', url: 'https://hailuoai.video', tag: '免费额度', tags: ['文生视频', '图生视频', '人物动作'] },
  { id: 'pixverse', name: 'PixVerse', desc: 'AI视频生成和编辑平台，支持文生视频、图生视频和视频风格化，提供角色一致性保持功能，可生成连贯的多场景视频内容，免费使用且效果出色，短视频创作者的实用工具。', cat: 'video', url: 'https://pixverse.ai', tag: '免费', tags: ['角色一致', '风格化', '短视频'] },

  // AI写作新增
  { id: 'monica', name: 'Monica', desc: '浏览器AI助手插件，集成GPT-4和Claude等模型，支持网页内容总结、邮件智能回复、翻译润色和文案生成，侧边栏随时调用无需切换页面，支持Chrome和Edge浏览器。', cat: 'writing', url: 'https://monica.im', tag: '免费额度', tags: ['浏览器插件', '侧边栏', '多模型'] },
  { id: 'writefull', name: 'Writefull', desc: 'AI学术写作辅助工具，专为科研人员设计，提供语法检查、学术用语优化、自动改写和标题生成功能，支持Word和Overleaf集成，可检测AI生成内容比例，学术论文写作的得力助手。', cat: 'writing', url: 'https://www.writefull.com', tag: '免费额度', tags: ['学术写作', '语法检查', 'Overleaf'] },

  // AI音频新增
  { id: 'capcut-voiceover', name: 'CapCut配音', desc: '剪映国际版的AI配音功能，提供数百种多语言AI音色，支持情感调节和语速控制，与视频编辑无缝集成，可自动生成字幕时间轴，TikTok创作者广泛使用的免费配音工具。', cat: 'audio', url: 'https://www.capcut.com', tag: '免费', tags: ['多语言', '情感调节', '视频集成'] },
  { id: 'bark', name: 'Bark', desc: 'Suno推出的开源文本转语音模型，支持多语言语音生成，可模拟笑声、停顿、语气变化等非语言声音，支持音乐和环境音效生成，完全开源可本地部署，开发者友好。', cat: 'audio', url: 'https://github.com/suno-ai/bark', tag: '免费开源', tags: ['开源TTS', '非语言声音', '本地部署'] },

  // AI办公新增
  { id: 'ai-ppt', name: 'AiPPT', desc: '国产AI演示文稿生成平台，输入主题即可一键生成完整PPT，提供海量行业模板和智能排版功能，支持在线编辑和团队协作，免费用户每日可生成多份演示文稿，国内访问速度快。', cat: 'office', url: 'https://www.aippt.cn', tag: '免费额度', tags: ['一键生成', '行业模板', '国产'] },
  { id: 'napkin', name: 'Napkin AI', desc: 'AI图表和可视化工具，将文字内容自动转换为精美的流程图、思维导图和信息图，支持多种布局和样式选择，一键美化文档中的概念和流程，适合商务汇报和知识分享场景。', cat: 'office', url: 'https://napkin.ai', tag: '免费试用', tags: ['文字转图表', '思维导图', '信息图'] },

  // 浏览器新增
  { id: 'opera', name: 'Opera', desc: '老牌浏览器，内置免费VPN和广告拦截器，集成AI助手Aria，支持快速社交媒体消息面板和流量节省模式，桌面端和移动端体验一致，注重隐私和效率的用户值得尝试。', cat: 'browser', url: 'https://www.opera.com', tag: '免费', tags: ['内置VPN', '广告拦截', 'AI助手'] },
  { id: 'raycast', name: 'Raycast', desc: 'macOS效率启动器，替代Spotlight的超级工具，内置AI对话、窗口管理、剪贴板历史、代码片段管理和团队协作功能，扩展生态丰富，Mac用户提升效率的必备工具。', cat: 'browser', url: 'https://www.raycast.com', tag: '免费额度', tags: ['macOS', '效率工具', '扩展生态'] },

  // 下载工具新增
  { id: 'gopeed', name: 'Gopeed', desc: '新一代开源下载管理器，支持HTTP、BT和磁力链下载，采用Rust+Flutter开发，界面现代简洁，支持全平台（Windows/macOS/Linux/Android），下载速度优秀，IDM的轻量替代品。', cat: 'download', url: 'https://gopeed.com', tag: '免费开源', tags: ['全平台', 'BT磁力', '轻量'] },
  { id: 'filezilla', name: 'FileZilla', desc: '知名开源FTP/SFTP文件传输工具，支持断点续传、拖拽上传和站点管理器，跨平台支持Windows/macOS/Linux，界面经典功能完善，服务器运维和网站管理的必备工具。', cat: 'download', url: 'https://filezilla-project.org', tag: '免费开源', tags: ['FTP传输', '站点管理', '跨平台'] },

  // 系统工具新增
  { id: 'ditto', name: 'Ditto', desc: 'Windows剪贴板管理工具，自动保存所有复制历史，支持搜索、分组、置顶和快捷键调用，可保存文本、图片和HTML格式内容，安装后后台静默运行，办公效率提升神器。', cat: 'system', url: 'https://ditto-cp.sourceforge.io', tag: '免费开源', tags: ['剪贴板', '历史记录', '快捷键'] },
  { id: 'utools', name: 'uTools', desc: '国产全能效率工具，类似macOS Alfred的Windows版超级启动器，支持快速搜索、计算器、翻译、编码转换等数百个插件，本地化程度高，支持数据同步，国内用户的首选效率工具。', cat: 'system', url: 'https://www.u.tools', tag: '免费额度', tags: ['效率启动器', '插件生态', '国产'] },
  { id: 'quicker', name: 'Quicker', desc: 'Windows效率工具，通过鼠标中键呼出快捷面板，可一键执行常用操作和复杂流程，支持动作库分享和自定义开发，大幅减少重复操作，办公和设计用户的效率倍增器。', cat: 'system', url: 'https://www.getquicker.net', tag: '免费额度', tags: ['快捷面板', '动作库', '自动化'] },
  { id: 'rustdesk', name: 'RustDesk', desc: '开源远程桌面控制软件，支持Windows/macOS/Linux/Android/iOS全平台，可自建中继服务器确保数据安全，画面流畅延迟低，功能媲美TeamViewer但完全免费，个人和企业均可使用。', cat: 'system', url: 'https://rustdesk.com', tag: '免费开源', tags: ['远程控制', '全平台', '自建服务器'] },

  // 开发工具新增
  { id: 'windsurf', name: 'Windsurf', desc: 'Codeium推出的AI代码编辑器，基于VS Code深度定制，内置Cascade AI对话式编程助手，支持多文件上下文理解和智能代码补全，免费个人版功能强大，Cursor的有力竞争者。', cat: 'dev', url: 'https://codeium.com/windsurf', tag: '免费额度', tags: ['AI编程', 'VS Code', 'Cascade'] },
  { id: 'supabase', name: 'Supabase', desc: '开源的Firebase替代方案，提供PostgreSQL数据库、实时订阅、身份认证、存储和Edge Functions全栈后端服务，免费额度充足，本地开发体验友好，全栈开发者的首选BaaS平台。', cat: 'dev', url: 'https://supabase.com', tag: '免费额度', tags: ['数据库', '实时订阅', 'BaaS'] },
  { id: 'insomnia', name: 'Insomnia', desc: '开源API开发和测试工具，支持GraphQL和REST API调试，提供环境变量管理、自动化测试和团队协作功能，界面现代简洁，支持插件扩展，Postman的优秀免费替代品。', cat: 'dev', url: 'https://insomnia.rest', tag: '免费开源', tags: ['API调试', 'GraphQL', '自动化测试'] },
  { id: 'linear', name: 'Linear', desc: '现代化项目管理工具，专为软件团队设计，界面极简流畅，支持Issue追踪、Sprint规划和Roadmap管理，集成GitHub和Slack，键盘操作高效，追求极致开发体验的团队首选。', cat: 'dev', url: 'https://linear.app', tag: '免费额度', tags: ['项目管理', 'Issue追踪', 'Sprint'] },
  { id: 'vercel-ai', name: 'Vercel AI SDK', desc: 'Vercel推出的AI应用开发工具包，提供React/Vue/Svelte等框架的AI组件和Hook，内置流式响应、多模型支持和边缘运行能力，帮助开发者快速构建AI驱动的Web应用。', cat: 'dev', url: 'https://sdk.vercel.ai', tag: '免费开源', tags: ['AI SDK', '流式响应', 'React'] },
  { id: 'replit', name: 'Replit', desc: '在线IDE和AI编程平台，支持50+种编程语言，内置AI代码助手Ghostwriter，提供即时运行环境和协作编程功能，无需本地配置即可开发部署全栈应用，编程学习和快速原型的理想平台。', cat: 'dev', url: 'https://replit.com', tag: '免费额度', tags: ['在线IDE', '多语言', '协作编程'] },
  { id: 'dify', name: 'Dify', desc: '开源LLM应用开发平台，提供可视化的AI应用构建工具，支持工作流编排、RAG知识库、Agent智能体和模型管理，可一键部署企业级AI应用，支持GPT、Claude、通义千问等主流模型。', cat: 'dev', url: 'https://dify.ai', tag: '免费开源', tags: ['LLM平台', 'RAG', 'Agent'] },
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
