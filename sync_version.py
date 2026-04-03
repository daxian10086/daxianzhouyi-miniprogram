#!/usr/bin/env python3
"""同步app.json版本号到app.js、index.js和query.js"""
import json
import re
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

with open('app.json', 'r', encoding='utf-8') as f:
    app_json = json.load(f)
    version = app_json.get('version', 'v2.4.1')
    version_date = app_json.get('versionDate', '')

print(f"源版本号: {version} ({version_date})")

def update_file(filepath, pattern, replacement):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = re.sub(pattern, replacement, content)
    if new_content == content:
        print(f"  ⚠️  {filepath}: 版本号已是最新")
        return False
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"  ✅ {filepath}: → {version}")
    return True

# app.js: version: 'v2.x.x' in globalData
update_file('app.js',
    r"(version:\s*')[^']+(')",
    rf"\g<1>{version}\g<2>")

# pages JS: version: '',
update_file('pages/index/index.js',
    r"(version:\s*')[^']*(')",
    rf"\g<1>{version}\g<2>")

update_file('pages/query/query.js',
    r"(version:\s*')[^']*(')",
    rf"\g<1>{version}\g<2>")

print("同步完成!")
