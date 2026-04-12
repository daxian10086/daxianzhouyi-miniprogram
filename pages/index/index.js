// pages/index/index.js
const hexagramsData = require('../../data/hexagrams.js')

Page({
  data: {
    version: 'v2.4.183',
    isAnimating: false,
    hexagram: null,
    currentTab: 0,
    fortuneAnalysis: null,
    mainFortune: null,
    showDisclaimerModal: false,
    shakingClass: '',
    showShakeHint: false,
    isListening: false,
    isShaking: false,
    isShakingOrListening: false,
    shakeStatusText: '摇动手机探索易经',
    hasShared: false
  },

  // 摇一摇检测变量
  lastX: null,
  lastY: null,
  lastZ: null,
  lastShakeTime: 0,
  shakeStartTime: null,
  shakeThreshold: 0.8,
  stopShakeDelay: 800,
  isVibrating: false,
  videoAd: null,

  // ---- 事件处理 ----

  onTabChange(e) {
    this.setData({ currentTab: e.detail.index })
  },

  navigateToQuery() {
    if (this.data.isShakingOrListening) return
    wx.navigateTo({ url: '/pages/query/query' })
  },

  // ---- 震动控制 ----

  startVibration() {
    if (this.isVibrating) return
    this.isVibrating = true
    wx.vibrateShort({ type: 'heavy' })
    this._vibrationTimer = setInterval(() => {
      if (this.isVibrating) wx.vibrateShort({ type: 'heavy' })
    }, 80)
  },

  stopVibration() {
    this.isVibrating = false
    if (this._vibrationTimer) {
      clearInterval(this._vibrationTimer)
      this._vibrationTimer = null
    }
  },

  // ---- 摇一摇检测 ----

  handleAccelerometerChange(res) {
    const { x, y, z } = res
    if (this.lastX === null) { this.lastX = x; this.lastY = y; this.lastZ = z; return }

    const delta = Math.sqrt(
      Math.pow(Math.abs(x - this.lastX), 2) +
      Math.pow(Math.abs(y - this.lastY), 2) +
      Math.pow(Math.abs(z - this.lastZ), 2)
    )
    this.lastX = x; this.lastY = y; this.lastZ = z

    if (delta > this.shakeThreshold) {
      this.lastShakeTime = Date.now()
      if (!this.data.isShaking) {
        this.shakeStartTime = Date.now()
        this.setData({ isShaking: true, shakeStatusText: '探索中...', shakingClass: 'active' })
        this.startVibration()
      }
      if (this._stopShakeTimer) clearTimeout(this._stopShakeTimer)
      this._stopShakeTimer = setTimeout(() => this.onShakeStopped(), this.stopShakeDelay)
    }
  },

  onShakeStopped() {
    if (this._stopShakeTimer) { clearTimeout(this._stopShakeTimer); this._stopShakeTimer = null }
    this.stopVibration()
    this.stopAccelerometer()
    this.setData({ isShaking: false, showShakeHint: false, isAnimating: true, shakeStatusText: '解析中...' })
    setTimeout(() => this.performCastHexagram(), 2000)
  },

  startAccelerometer() {
    if (!this._boundHandleAccelerometerChange) {
      this._boundHandleAccelerometerChange = this.handleAccelerometerChange.bind(this)
    }
    this.lastX = null; this.lastY = null; this.lastZ = null
    this.lastShakeTime = 0; this.shakeStartTime = null

    wx.startAccelerometer({
      interval: 'game',
      success: () => {
        wx.onAccelerometerChange(this._boundHandleAccelerometerChange)
        this.setData({ isListening: true, isShakingOrListening: true })
      },
      fail: () => this.onShakeStopped()
    })
  },

  stopAccelerometer() {
    if (this._boundHandleAccelerometerChange) wx.offAccelerometerChange(this._boundHandleAccelerometerChange)
    wx.stopAccelerometer({
      success: () => this.setData({ isListening: false, isShakingOrListening: false }),
      fail: () => this.setData({ isListening: false, isShakingOrListening: false })
    })
  },

  // ---- 算卦逻辑 ----

  castHexagram() {
    if (this.data.isAnimating || this.data.showShakeHint || this.data.isShaking) return
    this.setData({ showShakeHint: true, shakeStatusText: '摇动手机探索易经', isShaking: false })
    this.startAccelerometer()
    this._shakeTimeout = setTimeout(() => {
      if (this.data.showShakeHint && !this.data.isShaking && !this.data.isAnimating) {
        this.onShakeStopped()
      }
    }, 8000)
  },

  performCastHexagram() {
    try {
      const app = getApp()
      const randomIndex = Math.floor(Math.random() * hexagramsData.length)
      const hexagram = hexagramsData[randomIndex]
      if (!hexagram || !hexagram.lines || hexagram.lines.length < 6) throw new Error('卦象数据异常')

      const lineIndex = Math.floor(Math.random() * 6)
      const lineNames = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻']
      const selectedLine = hexagram.lines[lineIndex]

      const normalizedHexagram = app.normalizeHexagram(hexagram, lineNames[lineIndex], selectedLine)
      const fortuneAnalysis = app.getFortuneAnalysis(hexagram.number, lineIndex)
      const mainFortune = app.getMainFortune(hexagram.number)

      this.setData({
        isAnimating: false, shakingClass: '', hexagram: normalizedHexagram,
        currentTab: 0, fortuneAnalysis, mainFortune,
        shakeStatusText: '摇动手机探索易经', hasShared: false
      })

      wx.vibrateLong()
      wx.nextTick(() => wx.pageScrollTo({ scrollTop: 9999, duration: 300 }))
    } catch (error) {
      console.error('解析出错:', error)
      this.setData({ isAnimating: false, shakingClass: '', hexagram: null, fortuneAnalysis: null })
      wx.showToast({ title: '解析出错，请重试', icon: 'none' })
    }
  },

  // ---- 生命周期 ----

  onLoad() {
    const app = getApp()
    if (app.globalData.version) this.setData({ version: app.globalData.version })
    this.checkUpdate()

    if (!wx.getStorageSync('hasReadDisclaimer')) {
      this.setData({ showDisclaimerModal: true })
    }
    this.setData({ hasShared: false })
    this._initVideoAd()

    // 显示分享菜单
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },

  // 分享给好友
  onShareAppMessage() {
    return {
      title: '晋易小典 - 传统周易学习',
      path: '/pages/index/index'
    }
  },

  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: '晋易小典 - 传统周易学习'
    }
  },

  _initVideoAd() {
    if (!wx.createRewardedVideoAd) return
    this.videoAd = wx.createRewardedVideoAd({ adUnitId: 'adunit-b0c4ca80c737b35f' })
    this.videoAd.onLoad(() => {})
    this.videoAd.onError(err => console.error('广告加载失败', err))
    this.videoAd.onClose(res => {
      if (res && res.isEnded) {
        this.setData({ hasShared: true })
        wx.showToast({ title: '已解锁', icon: 'success' })
        setTimeout(() => wx.pageScrollTo({ scrollTop: 9999, duration: 300 }), 500)
      } else {
        wx.showToast({ title: '请看完广告', icon: 'none' })
      }
    })
  },

  checkUpdate() {
    if (!wx.getUpdateManager) return
    const mgr = wx.getUpdateManager()
    mgr.onCheckForUpdate(() => {})
    mgr.onUpdateReady(() => {
      wx.showModal({
        title: '版本更新',
        content: '新版本已准备好，是否立即更新？',
        confirmText: '立即更新',
        cancelText: '稍后再说',
        success: res => { if (res.confirm) mgr.applyUpdate() }
      })
    })
    mgr.onUpdateFailed(() => {
      wx.showModal({
        title: '更新失败', content: '请检查网络后重新进入小程序', showCancel: false,
        success: () => wx.reLaunch({ url: '/pages/index/index' })
      })
    })
  },

  _cleanupTimers() {
    if (this._shakeTimeout) { clearTimeout(this._shakeTimeout); this._shakeTimeout = null }
    if (this._stopShakeTimer) { clearTimeout(this._stopShakeTimer); this._stopShakeTimer = null }
    this.stopVibration()
    this.stopAccelerometer()
  },

  onUnload() {
    this._cleanupTimers()
    if (this.videoAd) { this.videoAd.offLoad(); this.videoAd.offError(); this.videoAd.offClose(); this.videoAd = null }
  },

  onHide() { this._cleanupTimers() },

  showDisclaimer() { this.setData({ showDisclaimerModal: true }) },

  hideDisclaimer() {
    this.setData({ showDisclaimerModal: false })
    wx.setStorageSync('hasReadDisclaimer', true)
  },

  handleWaitUnlock() {
    if (!this.videoAd) { wx.showToast({ title: '广告不可用', icon: 'none' }); return }
    this.videoAd.show().catch(() => {
      this.videoAd.load().then(() => this.videoAd.show()).catch(() => {
        wx.showToast({ title: '广告加载失败', icon: 'none' })
      })
    })
  }
})
