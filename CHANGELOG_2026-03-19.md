# 修改总结

## 修改时间
2026-03-19 14:15

## 修改项目
daxianzhouyi-miniprogram-v2.0.1

## 功能说明
添加摇一摇算卦功能，实现以下流程：
1. 点击"算一卦"按钮 → 显示"摇动手机开始算卦"提示
2. 用户摇晃手机 → 检测到摇动动作
3. 显示"算卦中..."动画（2秒）
4. 显示算卦结果

## 修改的文件

### 1. pages/index/index.js
**新增内容：**
- 状态变量：`showShakeHint`（显示摇动提示）、`isListening`（是否正在监听）
- 摇一摇检测变量：`lastShakeTime`、`shakeThreshold`（30）、`shakeInterval`（500ms）
- 函数：
  - `handleAccelerometerChange()` - 监听加速度变化
  - `onShakeDetected()` - 检测到摇动后的处理
  - `startAccelerometer()` - 开始监听加速度
  - `stopAccelerometer()` - 停止监听加速度
  - `performCastHexagram()` - 执行算卦逻辑
- 生命周期函数：
  - `onUnload()` - 页面卸载时停止监听
  - `onHide()` - 页面隐藏时停止监听

**修改内容：**
- `castHexagram()` - 点击按钮后显示提示并开始监听，不再直接开始算卦

### 2. pages/index/index.wxml
**新增内容：**
- 摇动提示区域：
```xml
<view class="shake-hint" wx:if="{{showShakeHint && !isAnimating}}">
  <text class="shake-hint-text">📱 摇动手机开始算卦</text>
</view>
```

**修改内容：**
- 按钮禁用条件：`disabled="{{isAnimating || showShakeHint}}"`

### 3. pages/index/index.wxss
**新增内容：**
- 摇动提示样式：
```css
.shake-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200rpx;
  margin-top: 48rpx;
  animation: pulse 1.5s ease-in-out infinite;
}

.shake-hint-text {
  font-size: 48rpx;
  color: #8B4513;
  font-weight: bold;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}
```

### 4. VERSION.md
**新增内容：**
- 版本 v2.0.1 更新内容中添加摇一摇功能说明

### 5. SHAKE_FEATURE.md（新建）
**内容：**
- 功能流程详细说明
- 技术实现细节
- API 使用说明
- 摇动检测算法
- 异常处理方案
- 资源优化措施
- 测试建议
- 注意事项

## 技术细节

### 摇一摇检测算法
```javascript
// 计算加速度的变化量
const speed = Math.abs(x) + Math.abs(y) + Math.abs(z);

// 如果速度超过阈值，且距离上次摇动超过间隔时间，则判定为摇动
if (speed > this.shakeThreshold && now - this.lastShakeTime > this.shakeInterval) {
  // 检测到摇动
}
```

### 使用的微信小程序 API
- `wx.startAccelerometer()` - 启动加速度监听
- `wx.onAccelerometerChange()` - 监听加速度变化
- `wx.stopAccelerometer()` - 停止加速度监听
- `wx.offAccelerometerChange()` - 取消监听加速度变化

### 异常处理
- 如果摇一摇功能不可用（例如在模拟器或部分手机上），会自动跳过摇动步骤，直接开始算卦
- 显示提示："无法使用摇一摇功能"

## 测试建议

1. **功能测试**
   - 点击按钮，确认提示显示
   - 摇晃手机，确认动画播放
   - 等待2秒，确认结果正确显示

2. **兼容性测试**
   - 在真机上测试摇一摇功能
   - 在模拟器上测试（会自动跳过摇动步骤）
   - 测试不同品牌手机的加速度传感器兼容性

## 注意事项

1. 摇一摇功能依赖于手机的加速度传感器，部分设备可能不支持
2. 模拟器中无法测试摇一摇功能，需要使用真机
3. 建议在真机上测试，确保用户体验良好
4. 如果用户取消摇动（页面切换等），监听会自动停止

## 项目路径
/workspace/projects/workspace/daxianzhouyi-miniprogram-v2.0.1/daxianzhouyi-miniprogram
