// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 从app.json读取版本号
    const appConfig = require('./app.json')
    this.globalData.version = appConfig.version || 'v2.3.58'
    this.globalData.versionDate = appConfig.versionDate || '2026-03-30'
  },

  globalData: {
    userInfo: null,
    version: 'v2.3.58',
    versionDate: '2026-03-30'
  }
})
