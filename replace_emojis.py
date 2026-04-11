# -*- coding: utf-8 -*-
import os, re

tools_data = {
    'chatgpt': ('chat.openai.com', 'AI\u5bf9\u8bdd', '\u514d\u8d39\u53ef\u7528'),
    'claude': ('claude.ai', 'AI\u5bf9\u8bdd', '\u514d\u8d39\u989d\u5ea6'),
    'qianwen': ('qianwen.aliyun.com', 'AI\u5bf9\u8bdd', '\u514d\u8d39\u53ef\u7528'),
    'doubao': ('www.doubao.com', 'AI\u5bf9\u8bdd', '\u514d\u8d39'),
    'yiyan': ('yiyan.baidu.com', 'AI\u5bf9\u8bdd', '\u514d\u8d39'),
    'kimi': ('kimi.moonshot.cn', 'AI\u5bf9\u8bdd', '\u514d\u8d39\u989d\u5ea6'),
    'deepseek': ('www.deepseek.com', 'AI\u5bf9\u8bdd', '\u514d\u8d39\u5f00\u6e90'),
    'grok': ('x.com', 'AI\u5bf9\u8bdd', '\u4ed8\u8d39'),
    'poe': ('poe.com', 'AI\u5bf9\u8bdd', '\u514d\u8d39\u989d\u5ea6'),
    'perplexity': ('www.perplexity.ai', 'AI\u5bf9\u8bdd', '\u514d\u8d39\u989d\u5ea6'),
    'midjourney': ('www.midjourney.com', 'AI\u56fe\u50cf', '\u4ed8\u8d39'),
    'stable-diffusion': ('stability.ai', 'AI\u56fe\u50cf', '\u514d\u8d39\u5f00\u6e90'),
    'dalle': ('openai.com', 'AI\u56fe\u50cf', '\u4ed8\u8d39'),
    'wanx': ('wanx.alibaba.com', 'AI\u56fe\u50cf', '\u514d\u8d39\u989d\u5ea6'),
    'yige': ('yige.baidu.com', 'AI\u56fe\u50cf', '\u514d\u8d39'),
    'comfyui': ('github.com', 'AI\u56fe\u50cf', '\u514d\u8d39\u5f00\u6e90'),
    'leonardo': ('leonardo.ai', 'AI\u56fe\u50cf', '\u514d\u8d39\u989d\u5ea6'),
    'adobe-firefly': ('firefly.adobe.com', 'AI\u56fe\u50cf', '\u514d\u8d39\u989d\u5ea6'),
    'remove-bg': ('www.remove.bg', 'AI\u56fe\u50cf', '\u514d\u8d39\u989d\u5ea6'),
    'sora': ('openai.com', 'AI\u89c6\u9891', '\u6d4b\u8bd5\u4e2d'),
    'runway': ('runwayml.com', 'AI\u89c6\u9891', '\u4ed8\u8d39'),
    'pika': ('pika.art', 'AI\u89c6\u9891', '\u514d\u8d39\u8bd5\u7528'),
    'zenvideo': ('zenvideo.qq.com', 'AI\u89c6\u9891', '\u514d\u8d39'),
    'kling': ('klingai.com', 'AI\u89c6\u9891', '\u514d\u8d39\u989d\u5ea6'),
    'haiper': ('haiper.ai', 'AI\u89c6\u9891', '\u514d\u8d39\u8bd5\u7528'),
    'notion-ai': ('notion.so', 'AI\u5199\u4f5c', '\u4ed8\u8d39'),
    'copy-ai': ('www.copy.ai', 'AI\u5199\u4f5c', '\u514d\u8d39\u8bd5\u7528'),
    'xiezuocat': ('xiezuocat.com', 'AI\u5199\u4f5c', '\u514d\u8d39'),
    'xfwriting': ('xf.xunfei.cn', 'AI\u5199\u4f5c', '\u514d\u8d39'),
    'jasper': ('www.jasper.ai', 'AI\u5199\u4f5c', '\u4ed8\u8d39'),
    'wps-ai': ('ai.wps.cn', 'AI\u5199\u4f5c', '\u514d\u8d39'),
    'elevenlabs': ('elevenlabs.io', 'AI\u97f3\u9891', '\u514d\u8d39\u8bd5\u7528'),
    'jianying': ('www.capcut.cn', 'AI\u97f3\u9891', '\u514d\u8d39'),
    'iflyrec': ('www.iflyrec.com', 'AI\u97f3\u9891', '\u514d\u8d39\u989d\u5ea6'),
    'murf': ('murf.ai', 'AI\u97f3\u9891', '\u4ed8\u8d39'),
    'gamma': ('gamma.app', 'AI\u529e\u516c', '\u514d\u8d39\u8bd5\u7528'),
    'beautiful-ai': ('www.beautiful.ai', 'AI\u529e\u516c', '\u4ed8\u8d39'),
    'tome': ('tome.app', 'AI\u529e\u516c', '\u514d\u8d39\u8bd5\u7528'),
    'mindshow': ('mindshow.fun', 'AI\u529e\u516c', '\u514d\u8d39'),
    'slidesgo': ('slidesgo.com', 'AI\u529e\u516c', '\u514d\u8d39\u989d\u5ea6'),
    'chartai': ('chartgpt.io', 'AI\u529e\u516c', '\u514d\u8d39'),
    'chrome': ('www.google.com', '\u6d4f\u89c8\u5668', '\u514d\u8d39'),
    'edge': ('www.microsoft.com', '\u6d4f\u89c8\u5668', '\u514d\u8d39'),
    'firefox': ('www.mozilla.org', '\u6d4f\u89c8\u5668', '\u514d\u8d39'),
    'arc': ('arc.net', '\u6d4f\u89c8\u5668', '\u514d\u8d39'),
    'idm': ('www.internetdownloadmanager.com', '\u4e0b\u8f7d\u5de5\u5177', '\u4ed8\u8d39'),
    'motrix': ('motrix.app', '\u4e0b\u8f7d\u5de5\u5177', '\u514d\u8d39\u5f00\u6e90'),
    'adm': ('play.google.com', '\u4e0b\u8f7d\u5de5\u5177', '\u514d\u8d39'),
    'xdown': ('www.xdown.tv', '\u4e0b\u8f7d\u5de5\u5177', '\u514d\u8d39\u5f00\u6e90'),
    'potplayer': ('potplayer.daum.net', '\u7cfb\u7edf\u5de5\u5177', '\u514d\u8d39'),
    '7zip': ('www.7-zip.org', '\u7cfb\u7edf\u5de5\u5177', '\u514d\u8d39\u5f00\u6e90'),
    'everything': ('www.voidtools.com', '\u7cfb\u7edf\u5de5\u5177', '\u514d\u8d39'),
    'snipaste': ('www.snipaste.com', '\u7cfb\u7edf\u5de5\u5177', '\u514d\u8d39'),
    'listary': ('www.listary.com', '\u7cfb\u7edf\u5de5\u5177', '\u514d\u8d39'),
    'bandizip': ('www.bandisoft.com', '\u7cfb\u7edf\u5de5\u5177', '\u514d\u8d39'),
    'vscode': ('code.visualstudio.com', '\u5f00\u53d1\u5de5\u5177', '\u514d\u8d39\u5f00\u6e90'),
    'git': ('git-scm.com', '\u5f00\u53d1\u5de5\u5177', '\u514d\u8d39\u5f00\u6e90'),
    'docker': ('www.docker.com', '\u5f00\u53d1\u5de5\u5177', '\u514d\u8d39'),
    'github': ('github.com', '\u5f00\u53d1\u5de5\u5177', '\u514d\u8d39'),
    'cursor': ('cursor.sh', '\u5f00\u53d1\u5de5\u5177', '\u514d\u8d39'),
    'copilot': ('github.com', '\u5f00\u53d1\u5de5\u5177', '\u4ed8\u8d39'),
    'postman': ('www.postman.com', '\u5f00\u53d1\u5de5\u5177', '\u514d\u8d39'),
}

tag_colors = {
    '\u514d\u8d39\u53ef\u7528': ('#dcfce7', '#16a34a'),
    '\u514d\u8d39\u989d\u5ea6': ('#dcfce7', '#16a34a'),
    '\u514d\u8d39\u5f00\u6e90': ('#dcfce7', '#16a34a'),
    '\u514d\u8d39': ('#dcfce7', '#16a34a'),
    '\u514d\u8d39\u8bd5\u7528': ('#fef9c3', '#ca8a04'),
    '\u4ed8\u8d39': ('#fee2e2', '#dc2626'),
    '\u6d4b\u8bd5\u4e2d': ('#e0e7ff', '#4f46e5'),
}

tools_dir = 'C:/tool-nav/docs/tools'
count = 0

for fname in os.listdir(tools_dir):
    if not fname.endswith('.md'):
        continue
    tid = fname[:-3]
    if tid not in tools_data:
        continue

    domain, cat_label, tag = tools_data[tid]
    favicon_url = 'https://www.google.com/s2/favicons?domain={}&sz=128'.format(domain)
    tag_bg, tag_fg = tag_colors.get(tag, ('#dcfce7', '#16a34a'))

    path = os.path.join(tools_dir, fname)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace tool icon emoji with favicon
    content = re.sub(
        r'<div class="tool-icon">\s*<span>[^<]*</span>\s*</div>',
        '<div class="tool-icon"><img src="{}" alt="" class="tool-favicon-img" loading="lazy" /></div>'.format(favicon_url),
        content
    )
    # Fallback: just replace the div
    content = re.sub(
        r'<div class="tool-icon">[^<]*</div>',
        '<div class="tool-icon"><img src="{}" alt="" class="tool-favicon-img" loading="lazy" /></div>'.format(favicon_url),
        content
    )

    # Replace notice icon emoji with favicon
    content = re.sub(
        r'<div class="notice-icon">[^<]*</div>',
        '<div class="notice-icon"><img src="{}" alt="" class="notice-favicon" /></div>'.format(favicon_url),
        content
    )

    # Update tool-tag color
    content = re.sub(
        r'(<span class="tool-tag")[^>]*>',
        '<span class="tool-tag" style="background:{};color:{}">'.format(tag_bg, tag_fg),
        content
    )

    # Update tool-cat text
    content = re.sub(
        r'<div class="tool-cat">[^<]*</div>',
        '<div class="tool-cat">{}</div>'.format(cat_label),
        content
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

    count += 1

print('Updated {} tool detail pages'.format(count))
