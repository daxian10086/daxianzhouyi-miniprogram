# 大仙周易小程序 - 自动上传和备份配置指南

## 📋 功能说明

此配置提供以下功能：
1. ✅ 自动上传到微信小程序平台
2. ✅ 自动备份到 GitHub
3. ✅ 定时执行（可选）

---

## 🚀 快速开始

### 1. 配置 GitHub 仓库

#### 方式 A：使用 SSH（推荐）

**生成 SSH 密钥**：
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

**查看公钥**：
```bash
cat ~/.ssh/id_rsa.pub
```

**添加到 GitHub**：
1. 访问 https://github.com/settings/keys
2. 点击 "New SSH key"
3. 粘贴公钥内容
4. 保存

**测试连接**：
```bash
ssh -T git@github.com
```

**修改上传脚本**：
```bash
# 编辑 /workspace/projects/scripts/miniprogram_upload.sh
# 将 GitHub 仓库地址改为 SSH 格式
GITHUB_REPO="git@github.com:daxian10086/daxianzhouyi-miniprogram.git"
```

#### 方式 B：使用 Personal Access Token

1. 访问 https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 选择权限：`repo`
4. 生成 token（保存好，只显示一次）

**修改上传脚本**：
```bash
# 编辑 /workspace/projects/scripts/miniprogram_upload.sh
# 在推送前添加认证
git config credential.helper store
echo "https://YOUR_TOKEN@github.com" > ~/.git-credentials
```

---

### 2. 创建 GitHub 仓库

**手动创建**：
1. 访问 https://github.com/new
2. 仓库名：`daxianzhouyi-miniprogram`
3. 可见性：Private（推荐）或 Public
4. 初始化：不要勾选任何选项
5. 创建仓库

**或者使用 CLI 创建**（需要 GitHub CLI）：
```bash
gh repo create daxian10086/daxianzhouyi-miniprogram --private --source=. --remote=origin
```

---

### 3. 推送代码到 GitHub

```bash
cd /workspace/projects/workspace/daxianzhouyi-miniprogram-v2.3.25

# 添加远程仓库（SSH 方式）
git remote add origin git@github.com:daxian10086/daxianzhouyi-miniprogram.git

# 推送代码
git push -u origin main
```

---

### 4. 配置微信小程序上传

**检查 miniprogram-ci**：
```bash
npx miniprogram-ci --version
```

如果未安装，请安装：
```bash
npm install -g miniprogram-ci
```

**配置上传密钥**：
1. 登录微信小程序后台
2. 进入「开发」→「开发管理」→「开发设置」
3. 生成「小程序代码上传密钥」
4. 下载密钥文件（private.key）
5. 放到项目目录或指定位置

**修改上传脚本**：
```bash
# 编辑 /workspace/projects/scripts/miniprogram_upload.sh
# 确保 project.config.json 路径正确
PROJECT_DIR="/workspace/projects/workspace/daxianzhouyi-miniprogram-v2.3.25"
```

---

### 5. 配置定时任务（可选）

**手动执行测试**：
```bash
/workspace/projects/scripts/miniprogram_upload.sh
```

**添加到 crontab**（每天 22:00 执行）：
```bash
crontab -e
```

添加以下行：
```cron
0 22 * * * /workspace/projects/scripts/miniprogram_upload.sh >> /tmp/miniprogram_upload.log 2>&1
```

**查看日志**：
```bash
tail -f /tmp/miniprogram_upload.log
```

---

## 📝 上传脚本说明

**脚本位置**：`/workspace/projects/scripts/miniprogram_upload.sh`

**执行流程**：
1. ✅ 检查项目目录
2. ✅ 获取当前版本号
3. ✅ 备份到 GitHub（自动提交和推送）
4. ✅ 上传到微信小程序平台
5. ✅ 记录日志

**日志文件**：`/tmp/miniprogram_upload.log`

---

## 🔧 故障排除

### 问题 1：GitHub 认证失败

**解决方案**：
- 使用 SSH 方式（推荐）
- 或使用 Personal Access Token

### 问题 2：微信上传失败

**解决方案**：
- 检查 miniprogram-ci 是否安装
- 检查上传密钥是否正确
- 检查项目配置文件路径
- 检查 IP 白名单是否配置

### 问题 3：Git 提交失败

**解决方案**：
```bash
cd /workspace/projects/workspace/daxianzhouyi-miniprogram-v2.3.25

# 检查状态
git status

# 如果有冲突
git pull --rebase

# 强制推送（谨慎使用）
git push -u origin main --force
```

---

## 📞 联系支持

如有问题，请联系：
- GitHub: https://github.com/daxian10086
- 文档: https://github.com/daxian10086/daxianzhouyi-miniprogram/wiki

---

**最后更新**：2026-03-27
**版本**：v1.0
