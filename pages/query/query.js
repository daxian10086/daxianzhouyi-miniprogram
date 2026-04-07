// pages/query/query.js
const hexagramsData = require('../../data/hexagrams.js')

Page({
  data: {
    version: 'v2.4.184',
    hexagram: null,
    currentTab: 0,
    fortuneAnalysis: null,
    mainFortune: null,
    showDisclaimerModal: false,
    hasShared: false,
    guaIndex: 0,
    yaoIndex: 0,
    guaOptions: [],
    yaoOptions: [
      { label: '初爻', value: 0 },
      { label: '二爻', value: 1 },
      { label: '三爻', value: 2 },
      { label: '四爻', value: 3 },
      { label: '五爻', value: 4 },
      { label: '上爻', value: 5 }
    ]
  },

  onTabChange(e) {
    this.setData({ currentTab: e.detail.index })
  },

  onGuaChange(e) {
    this.setData({ guaIndex: parseInt(e.detail.value) })
  },

  onYaoChange(e) {
    this.setData({ yaoIndex: parseInt(e.detail.value) })
  },

  onQuery() {
    this.loadHexagram(this.data.guaIndex, this.data.yaoIndex)
  },

  loadHexagram(guaIndex, yaoIndex) {
    try {
      const app = getApp()
      const hexagram = hexagramsData[guaIndex]
      if (!hexagram || !hexagram.lines || hexagram.lines.length < 6) throw new Error('卦象数据异常')

      const lineNames = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻']
      const selectedLine = hexagram.lines[yaoIndex]

      const normalizedHexagram = app.normalizeHexagram(hexagram, lineNames[yaoIndex], selectedLine)
      const fortuneAnalysis = app.getFortuneAnalysis(hexagram.number, yaoIndex)
      const mainFortune = app.getMainFortune(hexagram.number)

      this.setData({
        hexagram: normalizedHexagram, currentTab: 0,
        fortuneAnalysis, mainFortune, hasShared: false
      })

      wx.nextTick(() => wx.pageScrollTo({ scrollTop: 9999, duration: 300 }))
    } catch (error) {
      console.error('查询出错:', error)
      this.setData({ hexagram: null, fortuneAnalysis: null })
      wx.showToast({ title: '查询出错，请重试', icon: 'none' })
    }
  },

  onLoad() {
    const app = getApp()
    if (app.globalData.version) this.setData({ version: app.globalData.version })

    const guaOptions = hexagramsData.map((g, i) => ({
      label: `第${g.number}卦 ${g.name} ${String.fromCharCode(0x4DC0 + g.number - 1)}`, value: i
    }))
    this.setData({ guaOptions, hasShared: false })
    this._initVideoAd()
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
      } else {
        wx.showToast({ title: '请完整观看广告', icon: 'none' })
      }
    })
  },

  showDisclaimer() { this.setData({ showDisclaimerModal: true }) },

  hideDisclaimer() {
    this.setData({ showDisclaimerModal: false })
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
