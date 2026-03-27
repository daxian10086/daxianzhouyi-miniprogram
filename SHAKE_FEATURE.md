# 摇一摇算卦功能说明

## 功能流程

1. **点击"算一卦"按钮**
   - 显示提示："📱 摇动手机开始算卦"
   - 开始监听手机加速度变化

2. **用户摇晃手机**
   - 系统检测到摇动动作（加速度变化超过阈值）
   - 停止监听加速度
   - 隐藏摇动提示，显示"算卦中..."动画
   - 动画持续 2 秒

3. **显示算卦结果**
   - 随机选择一卦（1-64卦）
   - 随机选择一爻（初爻到上爻）
   - 生成运势分析（运势、财运、家庭、健康）
   - 滚动到页面底部显示结果

## 技术实现

### 修改的文件

1. **pages/index/index.js**
   - 添加状态变量：`showShakeHint`（显示摇动提示）、`isListening`（是否正在监听）
   - 添加摇一摇检测变量：`lastShakeTime`、`shakeThreshold`、`shakeInterval`
   - 新增函数：
     - `handleAccelerometerChange()` - 监听加速度变化
     - `onShakeDetected()` - 检测到摇动后的处理
     - `startAccelerometer()` - 开始监听加速度
     - `stopAccelerometer()` - 停止监听加速度
     - `performCastHexagram()` - 执行算卦逻辑
   - 修改函数：
     - `castHexagram()` - 点击按钮后显示提示并开始监听
     - `onUnload()` - 页面卸载时停止监听
     - `onHide()` - 页面隐藏时停止监听

2. **pages/index/index.wxml**
   - 添加摇动提示区域：`<view class="shake-hint">`
   - 修改按钮禁用条件：`disabled="{{isAnimating || showShakeHint}}"`

3. **pages/index/index.wxss**
   - 添加摇动提示样式：`.shake-hint`、`.shake-hint-text`
   - 添加脉冲动画：`@keyframes pulse`

### API 使用

- `wx.startAccelerometer()` - 启动加速度监听
- `wx.onAccelerometerChange()` - 监听加速度变化
- `wx.stopAccelerometer()` - 停止加速度监听
- `wx.offAccelerometerChange()` - 取消监听加速度变化

### 摇动检测算法

```javascript
// 计算加速度的变化量
const speed = Math.abs(x) + Math.abs(y) + Math.abs(z);

// 如果速度超过阈值，且距离上次摇动超过间隔时间，则判定为摇动
if (speed > this.shakeThreshold && now - this.lastShakeTime > this.shakeInterval) {
  // 检测到摇动
}
```

- **摇动阈值（shakeThreshold）**: 30
- **摇动间隔（shakeInterval）**: 500 毫秒（防止连续误触发）

### 异常处理

- 如果摇一摇功能不可用（例如在模拟器或部分手机上），会自动跳过摇动步骤，直接开始算卦
- 显示提示："无法使用摇一摇功能"

### 资源优化

- 在页面卸载和隐藏时自动停止加速度监听，节省系统资源
- 使用 `will-change` 和 `transform: translateZ(0)` 优化动画性能
- 添加 `-webkit-tap-highlight-color: transparent` 优化点击性能

## 测试建议

1. **功能测试**
   - 点击按钮，确认提示显示
   - 摇晃手机，确认动画播放
   - 等待2秒，确认结果正确显示

2. **兼容性测试**
   - 在真机上测试摇一摇功能
   - 在模拟器上测试（会自动跳过摇动步骤）
   - 测试不同品牌手机的加速度传感器兼容性

3. **性能测试**
   - 测试长时间使用后的内存占用
   - 测试页面切换时的资源释放

## 注意事项

1. 摇一摇功能依赖于手机的加速度传感器，部分设备可能不支持
2. 模拟器中无法测试摇一摇功能，需要使用真机
3. 建议在真机上测试，确保用户体验良好
4. 如果用户取消摇动（页面切换等），监听会自动停止

## 版本信息

- **版本**: 2.0.1
- **修改日期**: 2026-03-19
- **功能**: 添加摇一摇算卦功能
