import os

tools = [
    {'id': 'chatgpt', 'name': 'ChatGPT', 'cat': 'chatbot', 'icon': '💬', 'tag': '免费可用', 'url': 'https://chat.openai.com', 'desc': 'OpenAI最强对话AI，支持GPT-4和GPT-4o，多模态、代码生成、创意写作，全球最流行AI工具。'},
    {'id': 'claude', 'name': 'Claude', 'cat': 'chatbot', 'icon': '💬', 'tag': '免费额度', 'url': 'https://claude.ai', 'desc': 'Anthropic开发，安全性强，支持100K上下文窗口，深度写作和复杂分析首选。'},
    {'id': 'qianwen', 'name': '通义千问', 'cat': 'chatbot', 'icon': '💬', 'tag': '免费可用', 'url': 'https://qianwen.aliyun.com', 'desc': '阿里云自研大模型，支持中文深度对话、代码编写、知识问答，稳定可靠。'},
    {'id': 'doubao', 'name': '豆包', 'cat': 'chatbot', 'icon': '💬', 'tag': '免费', 'url': 'https://www.doubao.com', 'desc': '字节跳动AI助手，智能对话、写作辅助、图片生成，集成抖音飞书生态。'},
    {'id': 'yiyan', 'name': '文心一言', 'cat': 'chatbot', 'icon': '💬', 'tag': '免费', 'url': 'https://yiyan.baidu.com', 'desc': '百度文心大模型，擅长中文理解生成，覆盖写作、问答、代码等多种场景。'},
    {'id': 'kimi', 'name': 'Kimi', 'cat': 'chatbot', 'icon': '💬', 'tag': '免费额度', 'url': 'https://kimi.moonshot.cn', 'desc': '月之暗面AI助手，支持20万字超长上下文，擅长长文阅读、资料整理和多轮对话。'},
    {'id': 'deepseek', 'name': 'DeepSeek', 'cat': 'chatbot', 'icon': '💬', 'tag': '免费开源', 'url': 'https://www.deepseek.com', 'desc': '国产开源大模型，代码能力强，成本低，支持超长上下文，开发者首选。'},
    {'id': 'grok', 'name': 'Grok', 'cat': 'chatbot', 'icon': '💬', 'tag': '付费', 'url': 'https://x.com/i/grok', 'desc': 'xAI推出的AI助手，接入X平台（Twitter）实时数据，风格独特，回答有深度。'},
    {'id': 'poe', 'name': 'Poe', 'cat': 'chatbot', 'icon': '💬', 'tag': '免费额度', 'url': 'https://poe.com', 'desc': 'Quora旗下AI聚合平台，一站访问ChatGPT/Claude/GPT-4/Claude等多模型。'},
    {'id': 'perplexity', 'name': 'Perplexity', 'cat': 'chatbot', 'icon': '💬', 'tag': '免费额度', 'url': 'https://www.perplexity.ai', 'desc': 'AI搜索引擎，实时联网，回答带引用来源，是传统搜索的强替代。'},
    {'id': 'midjourney', 'name': 'Midjourney', 'cat': 'image', 'icon': '🎨', 'tag': '付费', 'url': 'https://www.midjourney.com', 'desc': '最强AI绘画工具之一，Discord指令生成精美图像，艺术风格多样。'},
    {'id': 'stable-diffusion', 'name': 'Stable Diffusion', 'cat': 'image', 'icon': '🎨', 'tag': '免费开源', 'url': 'https://stability.ai', 'desc': '开源免费AI图像生成模型，支持LoRA定制和ControlNet，本地可部署。'},
    {'id': 'dalle', 'name': 'DALL-E 3', 'cat': 'image', 'icon': '🎨', 'tag': '付费', 'url': 'https://openai.com/dall-e-3', 'desc': 'OpenAI图像生成模型，理解复杂提示词能力极强，图像细节丰富、文字渲染准确。'},
    {'id': 'wanx', 'name': '通义万相', 'cat': 'image', 'icon': '🎨', 'tag': '免费额度', 'url': 'https://wanx.alibaba.com', 'desc': '阿里云AI绘画，支持文生图、图生图、风格迁移，免费额度充足。'},
    {'id': 'yige', 'name': '文心一格', 'cat': 'image', 'icon': '🎨', 'tag': '免费', 'url': 'https://yige.baidu.com', 'desc': '百度AI绘画，中文提示词理解优秀，适合国内用户快速生成AI艺术作品。'},
    {'id': 'comfyui', 'name': 'ComfyUI', 'cat': 'image', 'icon': '🎨', 'tag': '免费开源', 'url': 'https://github.com/comfyanonymous/ComfyUI', 'desc': 'Stable Diffusion最强GUI，节点式工作流，高度自定义，适合进阶用户。'},
    {'id': 'leonardo', 'name': 'Leonardo.ai', 'cat': 'image', 'icon': '🎨', 'tag': '免费额度', 'url': 'https://leonardo.ai', 'desc': 'AI图像生成平台，预设多种风格模型，社区氛围好，每天免费额度。'},
    {'id': 'adobe-firefly', 'name': 'Adobe Firefly', 'cat': 'image', 'icon': '🎨', 'tag': '免费额度', 'url': 'https://firefly.adobe.com', 'desc': 'Adobe AI图像生成，深度集成PS/PR/Ai，内置内容真实性标签。'},
    {'id': 'remove-bg', 'name': 'Remove.bg', 'cat': 'image', 'icon': '🎨', 'tag': '免费额度', 'url': 'https://www.remove.bg', 'desc': 'AI一键抠图神器，自动移除背景，5秒出图，支持批量处理。'},
    {'id': 'sora', 'name': 'Sora', 'cat': 'video', 'icon': '🎬', 'tag': '测试中', 'url': 'https://openai.com/sora', 'desc': 'OpenAI AI视频生成模型，文本描述生成60秒高清视频，当前测试中。'},
    {'id': 'runway', 'name': 'Runway', 'cat': 'video', 'icon': '🎬', 'tag': '付费', 'url': 'https://runwayml.com', 'desc': 'AI视频编辑与生成平台，支持视频抠像、运动追踪、文生视频，影视级。'},
    {'id': 'pika', 'name': 'Pika', 'cat': 'video', 'icon': '🎬', 'tag': '免费试用', 'url': 'https://pika.art', 'desc': '新兴AI视频生成工具，操作简单，图生视频和文生视频，流畅自然。'},
    {'id': 'zenvideo', 'name': '腾讯智影', 'cat': 'video', 'icon': '🎬', 'tag': '免费', 'url': 'https://zenvideo.qq.com', 'desc': '腾讯AI视频编辑，数字人播报、智能剪辑、字幕生成，集成腾讯生态。'},
    {'id': 'kling', 'name': '快影AI（可灵）', 'cat': 'video', 'icon': '🎬', 'tag': '免费额度', 'url': 'https://klingai.kuaishou.com', 'desc': '快手可灵大模型，生成5秒以上高清视频，动作连贯、镜头感强。'},
    {'id': 'haiper', 'name': 'Haiper', 'cat': 'video', 'icon': '🎬', 'tag': '免费试用', 'url': 'https://haiper.ai', 'desc': 'AI视频生成工具，支持视频续写和风格转换，开创性视频生成能力。'},
    {'id': 'notion-ai', 'name': 'Notion AI', 'cat': 'writing', 'icon': '✍️', 'tag': '付费', 'url': 'https://notion.so', 'desc': 'Notion内置AI写作助手，笔记中直接调用AI，续写、总结、翻译、润色。'},
    {'id': 'copy-ai', 'name': 'Copy.ai', 'cat': 'writing', 'icon': '✍️', 'tag': '免费试用', 'url': 'https://copy.ai', 'desc': 'AI营销文案生成，支持广告文案、社交帖子、邮件模板，高效产出。'},
    {'id': 'xiezuocat', 'name': '秘塔写作猫', 'cat': 'writing', 'icon': '✍️', 'tag': '免费', 'url': 'https://xiezuocat.com', 'desc': '中文AI写作辅助，文章续写、错别字纠正、文风改写，全中文界面。'},
    {'id': 'xfwriting', 'name': '讯飞写作', 'cat': 'writing', 'icon': '✍️', 'tag': '免费', 'url': 'https://writing.iciba.com', 'desc': '科大讯飞AI写作，多语种写作、语音输入转文字，会议记录整理。'},
    {'id': 'jasper', 'name': 'Jasper', 'cat': 'writing', 'icon': '✍️', 'tag': '付费', 'url': 'https://jasper.ai', 'desc': '企业级AI内容平台，SEO文案、博客文章、品牌语气一致，大团队首选。'},
    {'id': 'wps-ai', 'name': 'WPS AI', 'cat': 'writing', 'icon': '✍️', 'tag': '免费', 'url': 'https://ai.wps.cn', 'desc': 'WPS内置AI助手，文档写作、润色、总结、移动端支持，国产办公首选。'},
    {'id': 'elevenlabs', 'name': 'ElevenLabs', 'cat': 'audio', 'icon': '🎵', 'tag': '免费试用', 'url': 'https://elevenlabs.io', 'desc': 'AI语音克隆和文字转语音，语音自然逼真，支持28种语言和多种声音风格。'},
    {'id': 'jianying', 'name': '剪映', 'cat': 'audio', 'icon': '🎵', 'tag': '免费', 'url': 'https://www.jianying.com', 'desc': '字节跳动视频剪辑，AI配音、智能字幕、画面优化，零基础也能快速上手。'},
    {'id': 'iflyrec', 'name': '讯飞听见', 'cat': 'audio', 'icon': '🎵', 'tag': '免费额度', 'url': 'https://www.iflyrec.com', 'desc': '科大讯飞语音识别，实时语音转文字、会议录音转写，准确率行业领先。'},
    {'id': 'murf', 'name': 'Murf AI', 'cat': 'audio', 'icon': '🎵', 'tag': '付费', 'url': 'https://murf.ai', 'desc': '专业AI配音平台，120+种语言，语音克隆，声音编辑，适合商业视频。'},
    {'id': 'gamma', 'name': 'Gamma', 'cat': 'office', 'icon': '📊', 'tag': '免费试用', 'url': 'https://gamma.app', 'desc': 'AI生成PPT和演示文稿，输入主题生成完整幻灯片，支持自定义样式。'},
    {'id': 'beautiful-ai', 'name': 'Beautiful.ai', 'cat': 'office', 'icon': '📊', 'tag': '付费', 'url': 'https://www.beautiful.ai', 'desc': 'AI演示文稿，自动优化排版和设计，节省大量PPT制作时间。'},
    {'id': 'tome', 'name': 'Tome', 'cat': 'office', 'icon': '📊', 'tag': '免费试用', 'url': 'https://tome.app', 'desc': 'AI幻灯片生成，以叙事为中心，支持嵌入3D模型、视频和网页。'},
    {'id': 'mindshow', 'name': 'MindShow', 'cat': 'office', 'icon': '📊', 'tag': '免费', 'url': 'https://mindshow.com', 'desc': '国产AI生成PPT，输入大纲自动生成演示，支持多种主题，免费使用。'},
    {'id': 'slidesgo', 'name': 'Slidesgo', 'cat': 'office', 'icon': '📊', 'tag': '免费额度', 'url': 'https://slidesgo.com', 'desc': 'AI幻灯片模板平台，FreePik旗下，丰富的行业模板库，支持在线编辑。'},
    {'id': 'chartai', 'name': 'ChartGPT', 'cat': 'office', 'icon': '📊', 'tag': '免费', 'url': 'https://chartgpt.com', 'desc': 'AI图表生成器，输入数据自动生成精美图表，支持多种图表类型。'},
    {'id': 'chrome', 'name': 'Chrome', 'cat': 'browser', 'icon': '🌐', 'tag': '免费', 'url': 'https://www.google.com/chrome', 'desc': 'Google全球最广泛浏览器，基于Chromium，性能强劲，扩展生态最丰富。'},
    {'id': 'edge', 'name': 'Edge', 'cat': 'browser', 'icon': '🌐', 'tag': '免费', 'url': 'https://www.microsoft.com/edge', 'desc': '微软基于Chromium，Windows预装，IE兼容模式，内置丰富功能。'},
    {'id': 'firefox', 'name': 'Firefox', 'cat': 'browser', 'icon': '🌐', 'tag': '免费', 'url': 'https://www.mozilla.org/firefox', 'desc': 'Mozilla开源浏览器，注重隐私保护，不使用Chromium，高度自定义。'},
    {'id': 'arc', 'name': 'Arc', 'cat': 'browser', 'icon': '🌐', 'tag': '免费', 'url': 'https://arc.net', 'desc': '颠覆性浏览器设计，垂直标签页、空间概念、外观精美，Mac用户首选。'},
    {'id': 'idm', 'name': 'IDM', 'cat': 'download', 'icon': '📥', 'tag': '付费', 'url': 'https://www.internetdownloadmanager.com', 'desc': 'Windows最强下载管理器，多线程、断点续传、视频抓取，下载速度极快。'},
    {'id': 'motrix', 'name': 'Motrix', 'cat': 'download', 'icon': '📥', 'tag': '免费开源', 'url': 'https://motrix.app', 'desc': '免费开源全能下载器，支持HTTP、BT、磁力链、网盘下载，界面简洁。'},
    {'id': 'adm', 'name': 'ADM', 'cat': 'download', 'icon': '📥', 'tag': '免费', 'url': 'https://play.google.com/store/apps/details?id=com.modess.motrix', 'desc': '安卓平台高效下载工具，多线程加速、断点续传，替代手机内置下载器。'},
    {'id': 'xdown', 'name': 'XDown', 'cat': 'download', 'icon': '📥', 'tag': '免费开源', 'url': 'https://xdown.org', 'desc': '免费开源下载器，支持BT/磁力/HTTP/网盘，IDM替代品，无广告。'},
    {'id': 'potplayer', 'name': 'Potplayer', 'cat': 'system', 'icon': '🛠️', 'tag': '免费', 'url': 'https://potplayer.daum.net', 'desc': 'Windows最强视频播放器，支持几乎所有音视频格式，功能定制能力极强。'},
    {'id': '7zip', 'name': '7-Zip', 'cat': 'system', 'icon': '🛠️', 'tag': '免费开源', 'url': 'https://www.7-zip.org', 'desc': '免费开源压缩工具，支持ZIP、RAR、7z等格式，解压速度快，无广告。'},
    {'id': 'everything', 'name': 'Everything', 'cat': 'system', 'icon': '🛠️', 'tag': '免费', 'url': 'https://www.voidtools.com', 'desc': 'Windows文件搜索神器，基于NTFS索引，输入即显示结果，定位文件极快。'},
    {'id': 'snipaste', 'name': 'Snipaste', 'cat': 'system', 'icon': '🛠️', 'tag': '免费', 'url': 'https://www.snipaste.com', 'desc': '截图+贴图工具，截图、标注、贴图到屏幕最前端，效率神器。'},
    {'id': 'listary', 'name': 'Listary', 'cat': 'system', 'icon': '🛠️', 'tag': '免费', 'url': 'https://www.listary.com', 'desc': 'Windows全局搜索增强，双击Ctrl快速呼出，文件/应用秒搜。'},
    {'id': 'bandizip', 'name': 'Bandizip', 'cat': 'system', 'icon': '🛠️', 'tag': '免费', 'url': 'https://www.bandizip.com', 'desc': '轻量压缩工具，支持多种格式，界面美观，解压预览功能强大。'},
    {'id': 'vscode', 'name': 'VS Code', 'cat': 'dev', 'icon': '💻', 'tag': '免费开源', 'url': 'https://code.visualstudio.com', 'desc': '微软开源代码编辑器，多语言、智能补全、Git集成、扩展市场，程序员必备。'},
    {'id': 'git', 'name': 'Git', 'cat': 'dev', 'icon': '💻', 'tag': '免费开源', 'url': 'https://git-scm.com', 'desc': '分布式版本控制，管理代码变更，支持多人协作，现代软件开发标配。'},
    {'id': 'docker', 'name': 'Docker', 'cat': 'dev', 'icon': '💻', 'tag': '免费', 'url': 'https://www.docker.com', 'desc': '容器化平台，环境一致性保证，DevOps和微服务基础设施。'},
    {'id': 'github', 'name': 'GitHub', 'cat': 'dev', 'icon': '💻', 'tag': '免费', 'url': 'https://github.com', 'desc': '全球最大代码托管平台，GitHub Actions CI/CD，开发者社区和开源生态核心。'},
    {'id': 'cursor', 'name': 'Cursor', 'cat': 'dev', 'icon': '💻', 'tag': '免费', 'url': 'https://cursor.sh', 'desc': 'AI代码编辑器，基于VS Code，AI自动补全、代码生成、聊天辅助编程。'},
    {'id': 'copilot', 'name': 'GitHub Copilot', 'cat': 'dev', 'icon': '💻', 'tag': '付费', 'url': 'https://github.com/features/copilot', 'desc': 'GitHub AI编程助手，代码补全、函数生成、Bug修复，提高编程效率。'},
    {'id': 'postman', 'name': 'Postman', 'cat': 'dev', 'icon': '💻', 'tag': '免费', 'url': 'https://www.postman.com', 'desc': 'API开发和测试工具，接口调试、自动化测试、团队协作，开发者必备。'},
]

# 模板：tool-detail 布局，markdown内容通过 <Content /> 渲染
TEMPLATE = """---
layout: tool-detail
title: {name}
desc: {desc}
cat: {cat}
icon: {icon}
tag: {tag}
url: {url}
---

{desc}

## 核心功能

- 支持多种使用场景
- 持续更新功能列表
- 访问官网获取完整功能介绍

## 适用人群

各类用户均可使用，具体请参考官网说明。

## 官方链接

👉 [访问 {name} 官网]({url})
"""

for tool in tools:
    content = TEMPLATE.format(name=tool['name'], desc=tool['desc'], cat=tool['cat'],
                              icon=tool['icon'], tag=tool['tag'], url=tool['url'])
    filepath = f"C:/tool-nav/docs/tools/{tool['id']}.md"
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Written: {filepath}")

print(f"\nTotal: {len(tools)} tools regenerated")
