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

    // 读取app.json配置
    try {
      const appConfig = require('./app.json')
      if (appConfig && appConfig.version) {
        this.globalData.version = appConfig.version
      }
      if (appConfig && appConfig.versionDate) {
        this.globalData.versionDate = appConfig.versionDate
      }
    } catch (e) {
      console.log('读取app.json失败，使用默认版本号', e)
    }
  },

  globalData: {
    userInfo: null,
    version: 'v2.4.141',
    versionDate: '2026-04-01'
  }
})
