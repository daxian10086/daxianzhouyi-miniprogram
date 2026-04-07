// app.js
App({
  onLaunch() {
    // 日志
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
    try {
      const appConfig = require('./app.json')
      if (appConfig.version) this.globalData.version = appConfig.version
      if (appConfig.versionDate) this.globalData.versionDate = appConfig.versionDate
    } catch (e) {
      console.log('读取app.json版本失败', e)
    }
  },

  /**
   * 获取运势分析（统一方法，避免页面重复代码）
   * @param {number} hexagramNumber 卦序
   * @param {number} lineIndex 爻位索引(0-5)
   * @returns {{ yunshi, caiyun, jiating, jiankang }}
   */
  getFortuneAnalysis(hexagramNumber, lineIndex) {
    if (!this._hexagramFortunes) {
      this._hexagramFortunes = require('./data/hexagramFortunes.js')
    }
    const data = this._hexagramFortunes[String(hexagramNumber)] || this._hexagramFortunes[hexagramNumber]
    const line = data ? data.lines[lineIndex] : null
    return {
      yunshi: (line && line.运势) || '暂无数据',
      caiyun: (line && line.财运) || '暂无数据',
      jiating: (line && line.家庭) || '暂无数据',
      jiankang: (line && line.健康) || '暂无数据'
    }
  },

  /**
   * 获取主卦运势（统一方法）
   * @param {number} hexagramNumber 卦序
   * @returns {{ yunshi, caiyun, jiating, jiankang }}
   */
  getMainFortune(hexagramNumber) {
    if (!this._hexagramMainFortunes) {
      this._hexagramMainFortunes = require('./data/hexagramMainFortunes.js')
    }
    const data = this._hexagramMainFortunes[String(hexagramNumber)] || this._hexagramMainFortunes[hexagramNumber]
    return data || { yunshi: '暂无数据', caiyun: '暂无数据', jiating: '暂无数据', jiankang: '暂无数据' }
  },

  /**
   * 标准化卦象数据（统一字段映射）
   * @param {object} hexagram 原始卦象数据
   * @param {string} lineName 爻位名称
   * @param {object} line 爻数据
   * @returns {object} 标准化后的卦象对象
   */
  normalizeHexagram(hexagram, lineName, line) {
    return {
      ...hexagram,
      selectedLineName: lineName,
      selectedLineText: line ? line.text : '',
      selectedLineDesc: line ? line.desc : '',
      guaCi: hexagram.卦辞 || '',
      tuanZhuan: hexagram.彖传 || '',
      xiangZhuan: hexagram.象传 || '',
      xuGua: hexagram.序卦 || '',
      zaGua: hexagram.杂卦 || '',
      symbol: String.fromCharCode(0x4DC0 + hexagram.number - 1)
    }
  },

  globalData: {
    userInfo: null,
    version: 'v2.4.184',
    versionDate: '2026-04-04'
  }
})
