#!/usr/bin/env python3
"""同步app.json版本号到app.js和index.js"""
import json
import re
import sys

# 读取app.json获取版本号
with open('app.json', 'r') as f:
    app_json = json.load(f)
    version = app_json.get('version', 'v2.4.1')

print(f"读取到版本号: {version}")

# 更新app.js
with open('app.js', 'r') as f:
    content = f.read()

# 使用正则替换globalData中的version
pattern = r"(globalData:\s*\{[^}]+version:\s*')[^']+(')"
replacement = rf"\g<1>{version}\g<2>"
new_content = re.sub(pattern, replacement, content)

if new_content == content:
    print("警告: app.js中未找到版本号模式")
else:
    print(f"已更新app.js: {version}")

with open('app.js', 'w') as f:
    f.write(new_content)

# 更新index.js
with open('pages/index/index.js', 'r') as f:
    content = f.read()

pattern = r"(data:\s*\{[^}]+version:\s*)'[^']+'(,)"
replacement = rf"\g<1>'{version}'\g<2>"
new_content = re.sub(pattern, replacement, content)

if new_content == content:
    print("警告: index.js中未找到版本号模式")
else:
    print(f"已更新index.js: {version}")

with open('pages/index/index.js', 'w') as f:
    f.write(new_content)

print("同步完成!")
