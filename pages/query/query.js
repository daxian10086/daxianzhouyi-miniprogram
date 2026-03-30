// pages/query/query.js
const hexagramsData1 = require('../../data/hexagrams.js');
const hexagramsData2 = require('../../data/hexagrams31-64.js');
const hexagramsData = [...hexagramsData1, ...hexagramsData2];
const hexagramFortunes = require('../../data/hexagramFortunes.js');
const hexagramMainFortunes = require('../../data/hexagramMainFortunes.js');

Page({
  data: {
    guaNumber: '',
    yaoPosition: 0, // 0=主卦, 1-6=初爻-上爻
    yaoOptions: [
      { value: 0, label: '主卦' },
      { value: 1, label: '初爻' },
      { value: 2, label: '二爻' },
      { value: 3, label: '三爻' },
      { value: 4, label: '四爻' },
      { value: 5, label: '五爻' },
      { value: 6, label: '上爻' }
    ],
    showResult: false,
    hexagram: null,
    mainFortune: null,
    fortune: null,
    currentTab: 0
  },

  // 切换选项卡
  switchTab(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.index
    });
  },

  // 卦序输入
  onGuaNumberInput(e) {
    this.setData({
      guaNumber: e.detail.value
    });
  },

  // 爻位选择
  onYaoPositionChange(e) {
    this.setData({
      yaoPosition: parseInt(e.detail.value)
    });
  },

  // 查询
  onQuery() {
    const guaNumber = parseInt(this.data.guaNumber);

    // 验证输入
    if (!guaNumber || guaNumber < 1 || guaNumber > 64) {
      wx.showToast({
        title: '请输入1-64之间的卦序',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    // 查找卦象数据
    const hexagram = hexagramsData[guaNumber - 1];
    if (!hexagram) {
      wx.showToast({
        title: '未找到该卦',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    // 获取主卦运势
    const mainFortune = hexagramMainFortunes[guaNumber] || null;

    // 获取指定爻位的运势
    let fortune = null;
    if (this.data.yaoPosition === 0) {
      // 主卦运势
      fortune = {
        运势: hexagram.运势,
        财运: hexagram.财运,
        家庭: hexagram.家庭,
        健康: hexagram.健康
      };
    } else {
      // 爻位运势
      const yaoFortunes = hexagramFortunes[guaNumber];
      if (yaoFortunes) {
        const yaoKey = `yao${this.data.yaoPosition}`;
        fortune = yaoFortunes[yaoKey];
      }
    }

    this.setData({
      showResult: true,
      hexagram: hexagram,
      mainFortune: mainFortune,
      fortune: fortune,
      currentTab: 0
    });
  },

  // 快速查询（主卦）
  queryMain() {
    const guaNumber = parseInt(this.data.guaNumber);
    if (!guaNumber || guaNumber < 1 || guaNumber > 64) {
      wx.showToast({
        title: '请输入1-64之间的卦序',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    this.setData({
      yaoPosition: 0
    }, () => {
      this.onQuery();
    });
  }
});
