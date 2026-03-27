# 自动上传测试指南

## 🧪 测试步骤

### 1. 测试 GitHub 连接

**检查 SSH 密钥**：
```bash
ssh -T git@github.com
```

**如果成功**：看到 "Hi daxian10086! You've successfully authenticated..."

**如果失败**：
- 检查密钥是否生成
- 检查公钥是否添加到 GitHub
- 检查 SSH 配置

---

### 2. 测试 Git 推送

```bash
cd /workspace/projects/workspace/daxianzhouyi-miniprogram-v2.3.25

# 测试提交
git add .
git commit -m "测试提交"

# 测试推送
git push origin main
```

**如果成功**：代码上传到 GitHub

**如果失败**：
- 检查远程仓库地址：`git remote -v`
- 检查 SSH 认证
- 检查网络连接

---

### 3. 测试微信小程序上传

**检查 miniprogram-ci**：
```bash
npx miniprogram-ci --version
```

**手动测试上传**：
```bash
npx miniprogram-ci upload \
    --project /workspace/projects/workspace/daxianzhouyi-miniprogram-v2.3.25/project.config.json \
    --version 2.3.25-test \
    --desc "测试上传" \
    --robot 1
```

**如果成功**：上传到微信小程序后台

**如果失败**：
- 检查 miniprogram-ci 是否安装
- 检查上传密钥是否配置
- 检查 project.config.json 路径
- 检查 IP 白名单

---

### 4. 测试完整脚本

```bash
# 执行完整脚本
/workspace/projects/scripts/miniprogram_upload.sh

# 查看日志
cat /tmp/miniprogram_upload.log
```

**预期输出**：
```
=== [2026-03-27 10:50:00] 开始上传和备份 ===
✅ 项目目录检查通过
📦 当前版本：2.3.25
📤 开始备份到 GitHub...
⏳ 推送到 GitHub...
✅ GitHub 备份成功
📱 开始上传到微信小程序平台...
✅ 微信小程序上传成功
=== [2026-03-27 10:50:10] 上传和备份完成 ===
```

---

## 🔍 故障排查

### 问题 1：SSH 连接失败

**症状**：
```
Permission denied (publickey)
```

**解决方案**：
```bash
# 1. 生成密钥
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# 2. 查看公钥
cat ~/.ssh/id_rsa.pub

# 3. 添加到 GitHub
# 访问 https://github.com/settings/keys

# 4. 测试连接
ssh -T git@github.com
```

---

### 问题 2：Git 推送失败

**症状**：
```
remote: Repository not found
```

**解决方案**：
```bash
# 1. 检查远程仓库地址
git remote -v

# 2. 如果错误，重新添加
git remote remove origin
git remote add origin git@github.com:daxian10086/daxianzhouyi-miniprogram.git

# 3. 推送
git push -u origin main
```

---

### 问题 3：微信上传失败

**症状**：
```
Error: CI configuration does not exist
```

**解决方案**：
```bash
# 1. 检查配置文件
ls -la /workspace/projects/workspace/daxianzhouyi-miniprogram-v2.3.25/

# 2. 检查 project.config.json
cat /workspace/projects/workspace/daxianzhouyi-miniprogram-v2.3.25/project.config.json

# 3. 检查 appid
grep '"appid"' /workspace/projects/workspace/daxianzhouyi-miniprogram-v2.3.25/project.config.json
```

---

### 问题 4：IP 白名单问题

**症状**：
```
Error: IP address not in whitelist
```

**解决方案**：

1. 登录微信小程序后台
2. 进入「开发」→「开发管理」→「开发设置」
3. 找到「小程序代码上传密钥」
4. 点击「IP 白名单」
5. 添加以下 IP：
   - `101.126.130.124`
   - `115.190.36.195`
   - 或使用 CIDR：`101.126.0.0/16`

---

## 📊 测试检查清单

完成以下测试后，配置才算成功：

- [ ] SSH 密钥已生成并添加到 GitHub
- [ ] Git 推送成功
- [ ] GitHub 仓库已创建
- [ ] 代码已推送到 GitHub
- [ ] miniprogram-ci 已安装
- [ ] 微信小程序上传密钥已配置
- [ ] IP 白名单已配置
- [ ] 手动上传到微信小程序成功
- [ ] 完整脚本执行成功
- [ ] 日志记录正常

---

## 🎯 配置成功标准

**以下条件全部满足**：

1. ✅ 运行脚本无错误
2. ✅ GitHub 仓库有最新代码
3. ✅ 微信小程序后台显示最新版本
4. ✅ 日志文件记录完整
5. ✅ 可以手动执行脚本

---

## 📞 获取帮助

如果遇到问题：

1. 查看日志文件：
   ```bash
   tail -f /tmp/miniprogram_upload.log
   ```

2. 检查脚本配置：
   ```bash
   cat /workspace/projects/scripts/miniprogram_upload.sh
   ```

3. 查看配置指南：
   ```bash
   cat /workspace/projects/workspace/daxianzhouyi-miniprogram-v2.3.25/README_AUTO_UPLOAD.md
   ```

---

**最后更新**：2026-03-27
