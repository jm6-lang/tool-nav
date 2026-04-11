# -*- coding: utf-8 -*-
import os, re

url_map = {
    'chatgpt': 'https://chat.openai.com',
    'claude': 'https://claude.ai',
    'qianwen': 'https://qianwen.aliyun.com',
    'doubao': 'https://www.doubao.com',
    'yiyan': 'https://yiyan.baidu.com',
    'kimi': 'https://kimi.moonshot.cn',
    'deepseek': 'https://www.deepseek.com',
    'grok': 'https://x.com/i/grok',
    'poe': 'https://poe.com',
    'perplexity': 'https://www.perplexity.ai',
    'midjourney': 'https://www.midjourney.com',
    'stable-diffusion': 'https://stability.ai',
    'dalle': 'https://openai.com/dall-e-3',
    'wanx': 'https://wanx.alibaba.com',
    'yige': 'https://yige.baidu.com',
    'comfyui': 'https://github.com/comfyanonymous/ComfyUI',
    'leonardo': 'https://leonardo.ai',
    'adobe-firefly': 'https://firefly.adobe.com',
    'remove-bg': 'https://www.remove.bg',
    'sora': 'https://openai.com/sora',
    'runway': 'https://runwayml.com',
    'pika': 'https://pika.art',
    'zenvideo': 'https://zenvideo.qq.com',
    'kling': 'https://klingai.com',
    'haiper': 'https://haiper.ai',
    'notion-ai': 'https://notion.so',
    'copy-ai': 'https://www.copy.ai',
    'xiezuocat': 'https://xiezuocat.com',
    'xfwriting': 'https://xf.xunfei.cn',
    'jasper': 'https://www.jasper.ai',
    'wps-ai': 'https://ai.wps.cn',
    'elevenlabs': 'https://elevenlabs.io',
    'jianying': 'https://www.capcut.cn',
    'iflyrec': 'https://www.iflyrec.com',
    'murf': 'https://murf.ai',
    'gamma': 'https://gamma.app',
    'beautiful-ai': 'https://www.beautiful.ai',
    'tome': 'https://tome.app',
    'mindshow': 'https://mindshow.fun',
    'slidesgo': 'https://slidesgo.com',
    'chartai': 'https://chartgpt.io',
    'chrome': 'https://www.google.com/chrome',
    'edge': 'https://www.microsoft.com/edge',
    'firefox': 'https://www.mozilla.org/firefox',
    'arc': 'https://arc.net',
    'idm': 'https://www.internetdownloadmanager.com',
    'motrix': 'https://motrix.app',
    'adm': 'https://play.google.com/store/apps/details?id=com.dv.adm',
    'xdown': 'https://www.xdown.tv',
    'potplayer': 'https://potplayer.daum.net',
    '7zip': 'https://www.7-zip.org',
    'everything': 'https://www.voidtools.com',
    'snipaste': 'https://www.snipaste.com',
    'listary': 'https://www.listary.com',
    'bandizip': 'https://www.bandisoft.com/bandizip',
    'vscode': 'https://code.visualstudio.com',
    'git': 'https://git-scm.com',
    'docker': 'https://www.docker.com',
    'github': 'https://github.com',
    'cursor': 'https://cursor.sh',
    'copilot': 'https://github.com/features/copilot',
    'postman': 'https://www.postman.com',
}

tools_dir = 'C:/tool-nav/docs/tools'
count = 0

for fname in os.listdir(tools_dir):
    if not fname.endswith('.md'):
        continue
    tid = fname[:-3]
    if tid not in url_map:
        continue

    url = url_map[tid]
    path = os.path.join(tools_dir, fname)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace icon: 'emoji' with url: 'url' in frontmatter
    content = re.sub(r"^icon: '[^']*'$", "url: '{}'".format(url), content, flags=re.MULTILINE)
    # Also handle double quotes
    content = re.sub(r'^icon: "[^"]*"$', "url: '{}'".format(url), content, flags=re.MULTILINE)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

    count += 1

print('Fixed {} tool frontmatter files'.format(count))
