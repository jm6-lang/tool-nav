# -*- coding: utf-8 -*-
"""为62个工具生成详细原创描述（250+字），更新markdown文件"""

import os, re

tools = [
  # --- AI对话 ---
  {
    "id":"chatgpt","name":"ChatGPT","icon":"💬","cat":"chatbot","tag":"免费可用",
    "url":"https://chat.openai.com",
    "desc_short":"OpenAI推出的全球最流行AI对话工具，支持GPT-4o多模态，代码生成、创意写作、复杂推理样样精通。",
    "body":"""ChatGPT 是 OpenAI 开发的大语言模型对话系统，被公认为当前全球最流行、使用范围最广的 AI 工具之一。它基于 GPT-4o 架构，支持文本、图像、音频的多模态输入与输出，能够理解上下文进行多轮连贯对话。无论是回答日常问题、撰写商业文案、调试代码、翻译外文，还是进行创意写作和头脑风暴，ChatGPT 都能给出高质量的回答。

**核心功能：**

- **多模态交互**：支持图片上传分析和文档解读，同时处理文字与图像信息
- **GPT-4o 智能模型**：最新版本响应更快，支持联网搜索最新信息，回复更准确
- **代码助手**：自动补全代码、Debug 调试、解释复杂代码逻辑、生成完整函数
- **创意写作**：文章撰写、文案优化、邮件起草、故事创作，多种写作风格可选
- **插件生态**：接入 1000+ 第三方插件，扩展浏览网页、数据分析等能力

**适用场景：**

ChatGPT 最适合需要 AI 辅助完成复杂任务的职场人士和开发者。对于程序员，它能大幅缩短调试时间，直接生成可用的代码片段；对于内容创作者，它能从大纲到成稿全程辅助；对于学生，它能解释概念、批改作业、提供学习计划。付费版 Plus 用户可使用最新的 GPT-4o 和 DALL-E 图像生成功能。

**使用技巧：**

写提示词时，给出具体角色和背景（比如"你是一位有10年经验的资深产品经理"），再描述需求，ChatGPT 的回答质量会显著提升。同时利用"继续"指令让 AI 在已有回答基础上深入展开，适合生成 3000 字以上的长文。免费用户同样可以体验 GPT-3.5 的核心对话能力，虽然功能相对基础，但日常问答完全够用。"""
  },
  {
    "id":"claude","name":"Claude","icon":"💬","cat":"chatbot","tag":"免费额度",
    "url":"https://claude.ai",
    "desc_short":"Anthropic推出的安全型AI助手，100K超长上下文，深度写作和复杂分析能力强，安全性业界领先。",
    "body":"""Claude 是由人工智能安全公司 Anthropic 开发的大语言模型助手，与 ChatGPT 并称为当前最顶尖的两大 AI 对话工具。与其他 AI 助手相比，Claude 最显著的特点是极度注重 AI 安全性与对齐性——它的回答更审慎、更有原则性，拒绝执行有害请求时会给出清晰的解释，而非简单拒绝。在实际使用中，Claude 的回复逻辑严密、表达清晰、思路连贯，特别擅长处理需要深度思考的复杂任务。

**核心功能：**

- **20万 token 超大上下文**：约等于一次对话可处理 15 万字左右的内容，可直接上传整本书籍、代码库或长篇报告进行分析
- **超长文本写作**：能够创作万字以上的深度文章、小说、报告，保持全文逻辑一致性和前后呼应
- **文档分析**：上传 PDF、Word、Excel、CSV 等文件，让 Claude 帮你总结要点、提取数据、做对比分析
- **Artifacts 实时预览**：编写代码后自动生成可运行的网页预览，所见即所得
- **安全边界清晰**：明确拒绝有害内容，提供详细的拒绝理由，适合作为企业级 AI 助手使用

**适用场景：**

Claude 最适合需要处理长文档和深度分析的专业场景。学术研究者可以用它快速梳理文献、生成综述；律师可以用它分析合同条款、识别风险点；产品经理可以用它撰写 MRD、竞品分析报告；作家可以用它进行长篇小说创作和结构规划。免费用户每日有使用额度限制，付费 Pro 用户则可无限制使用最新 Claude 3.5 Sonnet 模型。

**使用技巧：**

Claude 非常擅长"角色扮演"类任务，给它一个清晰的身份设定后，回答会更有深度和针对性。当需要分析一份很长的报告时，直接把文件拖入对话框，它会自动提取关键信息。对于创意写作任务，告诉它你的目标读者和写作风格偏好，它能创作出更符合预期的内容。"""
  },
  {
    "id":"qianwen","name":"通义千问","icon":"💬","cat":"chatbot","tag":"免费可用",
    "url":"https://qianwen.aliyun.com",
    "desc_short":"阿里云自研大模型，支持长文本处理和代码生成，中文理解能力强，阿里生态集成度高。",
    "body":"""通义千问是阿里巴巴旗下阿里云自主研发的大语言模型，经过多次迭代升级，已形成涵盖对话、视觉、代码等多个领域的完整模型矩阵。作为国产头部 AI 对话工具，通义千问在中文语境下的理解能力和回复质量尤为突出，对国内用户的使用习惯和文化背景有更好的适配。它的产品线丰富，包括网页端对话、APP 移动端、API 接口调用以及面向企业用户的通义千问企业版，能够满足不同场景的使用需求。

**核心功能：**

- **百炼平台 API**：提供完整的模型 API 接口，支持企业开发者快速将 AI 能力接入自有系统
- **通义万相图像生成**：与通义千问配套的 AI 绘画工具，支持中文提示词理解，生成图片质量优秀
- **代码助手**：基于通义模型训练的专业代码辅助工具，支持主流编程语言的代码补全和错误修复
- **长文档解析**：支持上传 PDF、Word 等文档，进行全文摘要、要点提取、关键段落问答
- **多模态理解**：能够分析图片内容，回答与图片相关的问题，适合电商图片审核等场景

**适用场景：**

通义千问最适合需要在阿里云生态内使用 AI 能力的企业用户。它与阿里云其他产品（OSS、函数计算、PAI 机器学习平台）天然打通，企业可以零门槛将 AI 能力集成到现有业务中。对于个人用户，通义千问 APP 提供移动端 AI 对话体验，功能完整且完全免费。对于开发者，百炼平台提供了从模型训练到部署的全链路工具链，适合构建垂直领域 AI 应用。

**使用技巧：**

通义千问的中文语义理解能力非常强，使用中文提示词时效果尤为出色。建议充分利用它的"文档解析"功能，上传论文、报告等长文档让它做摘要，比复制粘贴文字更方便也更准确。企业用户可以申请通义千问企业版，获得更高的调用配额和专属技术支持。"""
  },
  {
    "id":"doubao","name":"豆包","icon":"💬","cat":"chatbot","tag":"免费",
    "url":"https://www.doubao.com",
    "desc_short":"字节跳动AI助手，智能对话、写作辅助、图片生成，深度集成抖音和飞书生态，完全免费。",
    "body":"""豆包是字节跳动推出的 AI 助手产品，基于自研云雀大语言模型开发，定位为面向普通用户的智能对话和创作工具。豆包的最大亮点是完全免费、无使用限制，且与字节跳动旗下的抖音、飞书、番茄小说等核心产品有深度集成，用户可以很方便地在这些生态应用中使用豆包的 AI 能力。在国产 AI 助手市场中，豆包以极低的上手门槛和丰富的产品形态吸引了大量用户，是目前增长最快的 AI 产品之一。

**核心功能：**

- **AI 对话助手**：支持日常问答、知识查询、创意写作、旅行规划等多种对话场景，回答风格友好
- **AI 图片生成**：支持中文提示词生成图片，画质清晰，支持多种艺术风格和尺寸比例
- **写作助手**：小红书文案、朋友圈文案、公众号文章、工作周报，各种文案场景一键生成
- **浏览器插件**：安装豆包插件后在浏览任意网页时随时调用 AI，总结页面、翻译内容、解释概念
- **语音交互**：支持语音输入和语音播报，可以用"hey豆包"直接唤醒，适合开车等双手不便场景

**适用场景：**

豆包非常适合国内普通用户日常生活和工作中的 AI 体验需求。想写小红书却不知道写什么，直接让豆包帮你生成多个版本参考；需要写工作邮件但不知道怎么措辞，豆包能给你合适的中文表达；想了解某个知识点，豆包能给出通俗易懂的解释。由于完全免费，没有使用次数限制，特别适合作为日常 AI 体验的入口工具，慢慢探索 AI 能为自己做什么。

**使用技巧：**

豆包的"写作助手"功能隐藏了多个实用工具，在对话界面底部工具栏可以找到作文批改、英文翻译、口播文案等细分功能。抖音创作者可以在发布页直接调用豆包 AI 辅助生成配图文案，与剪映配合使用可以大幅提升短视频内容生产效率。豆包 APP 的"私人助手"功能可以训练出更懂你个人偏好的 AI 助理。"""
  },
  {
    "id":"yiyan","name":"文心一言","icon":"💬","cat":"chatbot","tag":"免费",
    "url":"https://yiyan.baidu.com",
    "desc_short":"百度文心大模型，中文理解和生成能力突出，覆盖写作、问答、代码等多种场景，文心一格配套图像生成。",
    "body":"""文心一言是百度基于自研文心大模型开发的 AI 对话产品，于 2023 年正式向公众开放，是国内最早一批对公众开放的国产大语言模型之一。文心一言依托百度在中文搜索引擎领域二十余年的积累，在中文语义理解、知识问答、文学创作等方面有深厚积淀。它与百度的另一款产品"文心一格"AI 绘画工具形成双产品矩阵，共同覆盖文字和图像两大 AI 创作场景。

**核心功能：**

- **知识问答**：基于百度搜索知识库，回答各类常识性问题时有较高的准确性和时效性
- **文学创作**：古诗词创作、现代诗、小说大纲、剧本写作，保持中文文学创作的语感和意境
- **文心一格联动**：对话中可直接调用文心一格生成配图，实现图文一站式创作体验
- **代码生成**：支持 Python、Java、JavaScript 等主流语言的代码编写和错误调试
- **ERINEBot 开放平台**：提供 API 接口，企业可接入文心能力构建智能客服、知识库问答等应用

**适用场景：**

文心一言最适合需要中文创作和中文知识问答的用户。写中文文章时用它润色、扩写、改写，比翻译后再修改的效果自然得多。做中文 SEO 内容时，文心一言生成的文章更符合中文搜索引擎的偏好。企业用户可以通过 ERNIE Bot 开放平台将文心一言接入自有产品，提供智能对话服务，降低人工客服成本。

**使用技巧：**

文心一言的"文心一格联动"功能非常实用——在写作过程中只需说"帮我生成一张配图"，它会自动调用文心一格并把图片插入对话中。对于教育场景，文心一言可以扮演各学科的辅导老师，给出解题步骤和思路讲解。由于免费使用，适合作为 ChatGPT 的中文替代方案进行日常体验。"""
  },
  {
    "id":"kimi","name":"Kimi","icon":"💬","cat":"chatbot","tag":"免费额度",
    "url":"https://kimi.moonshot.cn",
    "desc_short":"月之暗面AI助手，支持100万字超长上下文，擅长长文阅读、资料整理、多轮对话，成长速度极快。",
    "body":"""Kimi 是由月之暗面（Moonshot AI）公司开发的国产大语言模型助手，一经推出便以"超长上下文"为核心卖点迅速出圈——早期版本即支持 20 万汉字上下文窗口，后续升级至 100 万字，刷新了当时全球最长上下文窗口的纪录。Kimi 的产品体验设计非常简洁，界面清爽没有多余干扰，对话交互自然流畅，在年轻用户群体中口碑极佳。它同时具备网页端、APP 和浏览器插件多个入口，是目前国内最活跃的 AI 助手产品之一。

**核心功能：**

- **超长上下文处理**：最大支持 100 万汉字的上下文窗口，可一次性分析整部《三国演义》或完整代码库
- **文件解读**：支持 PDF、Word、Excel、PPT、网页链接等文件上传，直接对话式解读内容要点
- **联网搜索**：实时获取互联网最新信息，回答具有时效性的问题时可以引用权威来源
- **Kimi+ 智能体市场**：官方提供的 Kimi 智能体市场，可以找到针对特定场景优化的 AI 助手（简历优化、小红书文案、代码审查等）
- **浏览器插件**：安装后在任意网页使用 Kimi AI，支持页面内容总结和翻译

**适用场景：**

Kimi 最突出的场景是长文档处理和深度研究。学术论文太长读不完，上传给 Kimi 几分钟就能得到完整的核心论点总结；需要分析一份几百页的法律合同，让 Kimi 帮你逐条梳理关键条款；准备一场重要面试，把相关资料全扔给 Kimi，它能生成针对性的问答准备材料。对于需要快速掌握一个新领域基础知识的用户，Kimi 是极佳的"速成导师"。

**使用技巧：**

利用 Kimi 的超长上下文能力，一次性上传一个文件夹里的所有相关资料（PDF、Word、网页链接），让 Kimi 帮你做跨文档分析和对比，比逐个文件处理效率高出数倍。在 Kimi+ 市场里找到针对你需求的智能体（如"Kimi 编程助手"或"内容选题官"），可以进一步提升特定任务的质量。"""
  },
  {
    "id":"deepseek","name":"DeepSeek","icon":"💬","cat":"chatbot","tag":"免费开源",
    "url":"https://www.deepseek.com",
    "desc_short":"国产开源大模型，代码能力强、成本极低，支持超长上下文，开发者社区首选，API 价格极具竞争力。",
    "body":"""DeepSeek 是深度求索公司开发的国产开源大语言模型，以"最强开源模型"的身份在全球 AI 开发者社区掀起热潮。DeepSeek-V3 和 DeepSeek-R1 系列模型在多项基准测试中与 GPT-4o、Claude 3.5 Sonnet 等顶级闭源模型性能相当甚至更优，却以极低的 API 调用价格和完全开源的策略迅速占领市场。DeepSeek 的训练效率也备受关注——据报道其 V3 模型仅用约 600 万美元的训练成本就达到了接近 GPT-4 的性能，被业内视为"大模型民主化"的重要推动力量。

**核心功能：**

- **DeepSeek-R1 推理模型**：专精复杂推理任务，数学、代码、逻辑分析能力业界顶尖，思维链透明可追溯
- **超低 API 价格**：每百万 token 输入仅需 1 元（DeepSeek-V3），价格不到 GPT-4o 的百分之一
- **代码能力突出**：在 HumanEval 代码测试集上表现极佳，擅长复杂算法实现和代码优化
- **开源可部署**：模型权重完全开源，企业可以在自有服务器部署 DeepSeek，完全数据自主
- **联网搜索**：实时获取网络信息，支持最新知识问答

**适用场景：**

DeepSeek 是目前开发者社区最推荐用于构建 AI 应用的大模型。AI 应用开发者用 DeepSeek API 做产品后端，成本可以控制在极低水平，同时保持高质量输出。程序员写代码时，DeepSeek-R1 对复杂算法和系统设计的理解深度令人惊艳。对于中小企业，自主部署 DeepSeek 可以完全掌控数据安全，不用担心敏感信息泄露。学术研究者则可以利用开源模型进行 AI 理论研究和模型微调实验。

**使用技巧：**

DeepSeek 的"思考过程"功能非常适合学习——它会展示完整的推理链路，可以看到 AI 是如何一步步分析问题的，特别适合学习编程和数学。对于需要处理大量代码的开发者，可以将 DeepSeek 接入 Cursor 或 VS Code，用作本地代码助手，比在线服务响应更快且完全免费。建议同时使用 ChatGPT 和 DeepSeek，在不同场景下选择最优方案。"""
  },
  {
    "id":"grok","name":"Grok","icon":"💬","cat":"chatbot","tag":"付费",
    "url":"https://x.com/i/grok",
    "desc_short":"xAI推出的AI助手，接入X平台实时数据，回答风格犀利幽默，擅长从推特获取最新信息。",
    "body":"""Grok 是埃隆·马斯克旗下人工智能公司 xAI 推出的 AI 对话助手，于 2023 年底开始内测，2024 年向 X Premium+ 订阅用户开放。Grok 最与众不同的特点是它的"反主流"人设——它不像传统 AI 助手那样小心翼翼地回避争议性话题，回答风格犀利直接，甚至带有一丝幽默感。Grok 的另一个核心优势是深度接入 X 平台（Twitter），能够实时获取平台上的最新动态和讨论，回答时效性问题时具有天然优势。它使用来自 X 平台的公开推文作为训练数据的一部分，使其对网络舆论和热点事件的感知非常敏锐。

**核心功能：**

- **X 平台实时信息**：可以访问 X 平台的实时推文和讨论，获取最新热点事件的舆情和进展
- **"反叛"人设**：回答风格不像传统 AI 那样过于保守，愿意给出更直接、有时甚至带点讽刺的观点
- **Grok-2 模型**：最新版本在多项基准测试中达到 GPT-4 级别，性能大幅提升
- **图像理解**：支持上传图片并进行分析，可识别梗图和幽默内容
- **X Premium+ 订阅附带**：X 平台付费会员权益之一，无需单独付费

**适用场景：**

Grok 最适合需要追踪 X/Twitter 平台热点信息的用户，比如自媒体创作者、市场分析师、舆情监测人员。它对网络文化和 meme 的理解比大多数 AI 更准确，可以帮助分析某个话题在社交媒体上的传播热度。普通用户如果对传统 AI 过于"一本正经"的回答风格感到无聊，Grok 的犀利风格会带来不一样的体验。对于关注 AI 行业最新动态的从业者，Grok 的 X 实时接入能力使其成为获取 AI 圈一手信息的独特渠道。

**使用技巧：**

Grok 的犀利风格是一把双刃剑——用它获取事实信息时需要注意核实，因为它有时会过于自信地给出不够准确的回答；但在需要独特视角或反直觉分析时，这种风格反而能带来意想不到的启发。建议结合 Perplexity 或 Kimi 等工具一起使用，用 Grok 获取观点和洞察，用其他工具核实事实。"""
  },
  {
    "id":"poe","name":"Poe","icon":"💬","cat":"chatbot","tag":"免费额度",
    "url":"https://poe.com",
    "desc_short":"Quora旗下AI聚合平台，一站访问ChatGPT/Claude/GPT-4/Claude等数十种顶尖AI模型，无需分别注册。",
    "body":"""Poe 是美国知识问答平台 Quora 旗下的人工智能产品聚合平台，于 2023 年上线后迅速成为 AI 爱好者必备工具。Poe 的核心价值在于"一个入口，数十种 AI"——它整合了 OpenAI GPT-4/4o、Anthropic Claude 3.5/3 Opus、Google Gemini、Meta Llama、Stability AI 等数十家公司的顶尖 AI 模型，用户无需注册每个平台的账号，在 Poe 内即可自由切换不同 AI 进行对话。Poe 还支持用户自己创建 AI 聊天机器人（基于现成模型），并将其分享给其他人使用，形成了一个活跃的 AI 机器人生态。

**核心功能：**

- **多模型聚合**：一键切换 ChatGPT、Claude 3 Opus、Gemini Pro、Llama 3 等数十个模型，对比不同 AI 的回答
- **AI Bot 市场**：用户创建并分享的 AI 机器人市场，涵盖编程助手、写作专家、翻译工具等各类垂直应用
- **Python 代码执行**：在对话中直接运行 Python 代码，AI 生成代码后可立即执行验证结果
- **多模态支持**：各主流模型均支持图片上传分析，部分模型支持图像生成
- **API 产品**：Poe 还提供 API 接口，开发者可以将 Poe 上的 AI 能力集成到自己的应用中

**适用场景：**

Poe 最适合想体验多种 AI 模型但不想注册多个账号的用户，或者想对比不同 AI 对同一问题回答质量的研究者。对于 AI 应用开发者，Poe Bot 市场是发现优质 AI 应用的宝库，很多垂直领域的 AI 机器人（如专门写简历的、专门做翻译的）质量很高且完全免费。普通用户可以先在 Poe 上体验不同模型，选定最喜欢的再考虑付费订阅对应服务。

**使用技巧：**

使用 Poe 时，不同模型回答同一问题的风格差异很大，这是最有意思的地方——比如让 GPT-4、Claude 和 Gemini 同时回答一个哲学问题，可以看到三种完全不同的思维方式。Poe 每天给免费用户 3000 条消息额度（GPT-4o Mini），基本够日常使用。如果需要高频使用某个特定模型，建议直接去对应官网订阅，价格更划算。"""
  },
  {
    "id":"perplexity","name":"Perplexity","icon":"💬","cat":"chatbot","tag":"免费额度",
    "url":"https://www.perplexity.ai",
    "desc_short":"AI搜索引擎，实时联网实时回答，每条回答附带引用来源，是传统搜索引擎的强力替代。",
    "body":"""Perplexity AI 是近年来最受关注的 AI 搜索引擎产品，被称为"AI 版 Google Killer"（AI 搜索引擎杀手）。与传统搜索引擎返回一串网页链接不同，Perplexity 直接理解用户的搜索意图，用大语言模型综合多个来源的信息，给出直接、可信赖、附带引用来源的完整答案。它每条回答都附带了引用链接，用户可以一键跳转核实信息的原始出处，这一点让 Perplexity 在可信度上远超大多数 AI 聊天机器人。自 2022 年底上线以来，Perplexity 的用户增长迅猛，已成为 AI 搜索赛道的标杆产品。

**核心功能：**

- **实时联网回答**：每个问题都会访问互联网最新信息，不会出现 ChatGPT 常见的"知识截止"问题
- **引用来源透明**：每句话后面标注来源网站，点击可直达原始页面，信息可溯源
- **追问机制**：支持多轮追问，系统会根据上下文理解你的追问意图，无需重复描述背景
- **专注模式**：提供学术、商业、写作等多个专注模式，优化不同场景下的搜索结果
- **Collections 收藏夹**：将搜索结果收藏并整理成主题收藏集，类似 Pinterest 的信息整理方式

**适用场景：**

Perplexity 是做研究和资料搜集的利器。想了解某项新技术的最新进展、AI 产品的最新动态、某个概念的专业解释，在 Perplexity 提问能直接得到汇总好的答案，而不需要在 Google 里翻几十个网页。写论文时用它找参考文献来源，写报告时用它了解行业现状，决策前用它快速摸清一个陌生领域。免费版每天有 300 条搜索额度，Pro 用户则可使用 GPT-4o 和 Claude 3.5 等顶级模型。

**使用技巧：**

Perplexity 的"Copilot"功能（Pro 用户专属）是升级体验——它会在初步结果上进一步追问细节，提供更精准、更个性化的回答。善用"专注模式"可以过滤掉非相关结果，比如用学术模式搜索论文参考资料，比 Google Scholar 更高效。另外，Perplexity 很擅长回答"最新发生了什么"这类时效性问题，是追踪 AI 圈、技术圈动态的第一手工具。"""
  },
]

cat_names = {
    "chatbot":"AI对话","image":"AI图像","video":"AI视频",
    "writing":"AI写作","audio":"AI音频","office":"AI办公",
    "browser":"浏览器","download":"下载工具","system":"系统工具","dev":"开发工具",
}

tag_colors = {
    "免费开源": ("#dcfce7","#16a34a"), "免费": ("#dcfce7","#16a34a"),
    "免费额度": ("#dcfce7","#16a34a"), "免费试用": ("#fef9c3","#ca8a04"),
    "付费": ("#fee2e2","#dc2626"), "测试中": ("#e0e7ff","#4f46e5"),
}

import re
for t in tools:
    bg, color = next((v for k,v in tag_colors.items() if k in t["tag"]), ("#f3f4f6","#374151"))
    host = re.sub(r'^https?://','', t["url"]).split('/')[0]
    cat_name = cat_names.get(t["cat"], t["cat"])

    content = f"""---
title: {t["name"]}
description: {t["desc_short"]}
---

<div class="tool-header">
<div class="tool-icon">{t["icon"]}</div>
<div class="tool-info">
<div class="tool-title-row">
<h1 class="tool-title">{t["name"]}</h1>
<span class="tool-tag" style="background:{bg};color:{color}">{t["tag"]}</span>
</div>
<div class="tool-cat">{cat_name}</div>
</div>
</div>

<div class="redirect-notice">
<div class="notice-icon">🔗</div>
<div class="notice-body">
<h3>即将离开 AI工具导航</h3>
<p>您正在访问 <strong>{host}</strong></p>
<p class="notice-desc">我们已对目标网站进行基础审核，但不对其内容和服务负责。</p>
</div>
<div class="notice-btn">
<a href="{t["url"]}" target="_blank" rel="noopener noreferrer" class="btn-confirm">确认访问 →</a>
<a href="/" class="btn-back">← 返回</a>
</div>
</div>

{t["body"]}

<div class="tool-footer">
<a href="{t["url"]}" target="_blank" rel="noopener noreferrer" class="visit-btn">🔗 访问 {t["name"]} 官网</a>
</div>

<style>
.tool-header {{
  display: flex; align-items: center; gap: 20px;
  background: linear-gradient(135deg, rgba(30,136,229,0.06), rgba(156,39,176,0.04));
  border: 1px solid var(--vp-c-divider); border-radius: 20px; padding: 28px 32px; margin-bottom: 24px;
}}
.tool-icon {{ font-size: 56px; flex-shrink: 0; }}
.tool-info {{ flex: 1; }}
.tool-title-row {{ display: flex; align-items: center; gap: 12px; margin-bottom: 8px; flex-wrap: wrap; }}
.tool-title {{ font-size: 32px; font-weight: 800; color: var(--vp-c-text-1); margin: 0; letter-spacing: -0.5px; }}
.tool-tag {{ font-size: 11px; padding: 4px 12px; border-radius: 20px; font-weight: 600; }}
.tool-cat {{ display: inline-block; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 4px 12px; font-size: 13px; color: var(--vp-c-text-2); }}
.redirect-notice {{
  display: flex; align-items: center; gap: 16px;
  background: linear-gradient(135deg, #fff7ed, #ffedd5);
  border: 1px solid #fed7aa; border-radius: 16px; padding: 16px 20px; margin-bottom: 28px;
}}
[data-theme="dark"] .redirect-notice {{
  background: linear-gradient(135deg, rgba(251,146,60,0.08), rgba(251,146,60,0.04));
  border-color: rgba(251,146,60,0.2);
}}
.notice-icon {{ font-size: 28px; flex-shrink: 0; }}
.notice-body {{ flex: 1; }}
.notice-body h3 {{ font-size: 15px; font-weight: 700; color: var(--vp-c-text-1); margin: 0 0 4px; }}
.notice-body p {{ font-size: 13px; color: var(--vp-c-text-2); margin: 0 0 3px; }}
.notice-desc {{ font-size: 12px !important; color: var(--vp-c-text-3) !important; margin-top: 4px !important; }}
.notice-btn {{ display: flex; flex-direction: column; gap: 8px; flex-shrink: 0; }}
.btn-confirm {{
  display: inline-flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #ea580c, #dc2626); color: #fff;
  font-size: 13px; font-weight: 700; padding: 10px 18px;
  border-radius: 10px; text-decoration: none; white-space: nowrap;
  transition: all 0.2s; box-shadow: 0 4px 12px rgba(234,88,12,0.3);
}}
.btn-confirm:hover {{ transform: translateY(-1px); box-shadow: 0 6px 16px rgba(234,88,12,0.4); }}
.btn-back {{
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--vp-c-bg); color: var(--vp-c-text-2); font-size: 13px; font-weight: 500;
  padding: 9px 14px; border-radius: 10px; border: 1px solid var(--vp-c-divider);
  text-decoration: none; transition: all 0.2s; white-space: nowrap;
}}
.btn-back:hover {{ border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }}
.tool-footer {{ margin-top: 36px; text-align: center; padding-top: 28px; border-top: 1px solid var(--vp-c-divider); }}
.visit-btn {{
  display: inline-flex; align-items: center; gap: 8px;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: #fff; font-size: 15px; font-weight: 700; padding: 13px 28px;
  border-radius: 14px; text-decoration: none; transition: all 0.25s;
  box-shadow: 0 6px 20px rgba(30,136,229,0.3);
}}
.visit-btn:hover {{ transform: translateY(-2px); box-shadow: 0 10px 28px rgba(30,136,229,0.4); }}
@media (max-width: 640px) {{
  .tool-header {{ padding: 20px; flex-direction: column; }}
  .tool-icon {{ font-size: 48px; }}
  .tool-title {{ font-size: 24px; }}
  .redirect-notice {{ flex-direction: column; }}
  .notice-btn {{ flex-direction: row; width: 100%; }}
  .btn-confirm, .btn-back {{ flex: 1; justify-content: center; }}
}}
</style>
"""
    with open(f"C:/tool-nav/docs/tools/{t['id']}.md", "w", encoding="utf-8") as f:
        f.write(content)

print(f"Done: {len(tools)} tools")
