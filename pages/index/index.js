// pages/index/index.js
const app = getApp();
Page({
  data: {
    version: 'v2.4.187',
    hint: '点击下方按钮开始摇卦',
    result: null,
    history: []
  },
  onLoad() {
    if (app.globalData.version) this.setData({ version: app.globalData.version });
    this.setData({ history: app.globalData.history || [] });
  }
});
