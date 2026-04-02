#!/bin/bash
# sync_version.sh - 自动同步app.json版本号到app.js和index.js

cd /workspace/projects/workspace/daxianzhouyi-miniprogram-v2.3.25

# 读取app.json的版本号
VERSION=$(grep "\"version\"" app.json | sed 's/.*"version": "\(.*\)".*/\1/')

echo "当前app.json版本: $VERSION"

# 更新app.js中的globalData.version
sed -i "s/globalData: {/globalData: {\n    userInfo: null,\n    version: '$VERSION',/" app.js

# 移除旧的版本号行（如果有）
sed -i "/userInfo: null,/d" app.js
sed -i "/versionDate:/d" app.js

# 重新添加正确的版本号
python3 << EOF
with open('app.js', 'r') as f:
    content = f.read()

# 找到globalData块并更新version
import re
pattern = r"(globalData: \{[^}]*)version: '[^']*',"
replacement = r"\1version: '$VERSION',"
content = re.sub(pattern, replacement, content)

with open('app.js', 'w') as f:
    f.write(content)
EOF

# 更新index.js中的data.version
sed -i "s/version: 'v2.4.[0-9]*'/version: '$VERSION'/" pages/index/index.js

echo "同步完成!"
echo "app.json: $VERSION"
echo "app.js: $(grep "version:" app.js | head -1)"
echo "index.js: $(grep "version:" pages/index/index.js | head -1)"
