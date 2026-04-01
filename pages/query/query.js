// pages/query/query.js
const hexagramsData = require('../../data/hexagrams.js');
const hexagramFortunes = require('../../data/hexagramFortunes.js');
const hexagramMainFortunes = require('../../data/hexagramMainFortunes.js');

Page({
  data: {
    version: 'v2.4.40',
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
      { label: '初爻', value: 1 },
      { label: '二爻', value: 2 },
      { label: '三爻', value: 3 },
      { label: '四爻', value: 4 },
      { label: '五爻', value: 5 },
      { label: '上爻', value: 6 }
    ]
  },

  // 切换选项卡
  // 组件标签切换事件
  onTabChange(e) {
    this.setData({ currentTab: e.detail.index });
  },

  switchTab(e) {
    let index = e.currentTarget.dataset.index;
    if (typeof index === 'string') {
      index = parseInt(index, 10);
    }
    if (isNaN(index) || index < 0 || index > 2) {
      return;
    }
    this.setData({ currentTab: index });
  },

  onGuaChange(e) {
    this.setData({ guaIndex: parseInt(e.detail.value) });
  },

  onYaoChange(e) {
    this.setData({ yaoIndex: parseInt(e.detail.value) });
  },

  // 查询按钮
  onQuery() {
    const guaIndex = this.data.guaIndex;
    const yaoIndex = this.data.yaoIndex;
    this.loadHexagram(guaIndex, yaoIndex);
  },

  // 加载卦象数据
  loadHexagram(guaIndex, yaoIndex) {
    try {
      if (!hexagramsData || hexagramsData.length === 0) {
        throw new Error('卦象数据未加载');
      }

      const hexagram = hexagramsData[guaIndex];

      if (!hexagram || !hexagram.lines || hexagram.lines.length < 6) {
        throw new Error('卦象数据异常');
      }

      const lineIndex = yaoIndex;
      const selectedLineName = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'][lineIndex];
      const selectedLine = hexagram.lines[lineIndex];

      if (!selectedLine) {
        throw new Error('选择的爻位不存在');
      }

      const fortuneAnalysis = this.generateFortuneAnalysis(hexagram.number, lineIndex);
      const mainFortune = hexagramMainFortunes[String(hexagram.number)] || hexagramMainFortunes[hexagram.number] || {
        yunshi: '暂无数据',
        caiyun: '暂无数据',
        jiating: '暂无数据',
        jiankang: '暂无数据'
      };

      this.setData({
        hexagram: {
          ...hexagram,
          selectedLineName,
          selectedLineText: selectedLine.text,
          selectedLineDesc: selectedLine.desc,
          guaCi: hexagram.卦辞 || '',
          tuanZhuan: hexagram.彖传 || '',
          xiangZhuan: hexagram.象传 || '',
          xuGua: hexagram.序卦 || '',
          zaGua: hexagram.杂卦 || ''
        },
        currentTab: 0,
        fortuneAnalysis: fortuneAnalysis,
        mainFortune: mainFortune,
        hasShared: false
      });

      wx.nextTick(() => {
        wx.pageScrollTo({
          scrollTop: 9999,
          duration: 300
        });
      });

    } catch (error) {
      console.error('查询出错:', error);
      this.setData({
        hexagram: null,
        fortuneAnalysis: null
      });
      wx.showToast({
        title: '查询出错，请重试',
        icon: 'none'
      });
    }
  },

  // 生成运势分析
  generateFortuneAnalysis(hexagramNumber, lineIndex) {
    const hexFortuneData = hexagramFortunes[String(hexagramNumber)] || hexagramFortunes[hexagramNumber];
    const lineFortune = hexFortuneData ? hexFortuneData.lines[lineIndex] : null;

    if (lineFortune) {
      return {
        yunshi: lineFortune.运势 || '暂无数据',
        caiyun: lineFortune.财运 || '暂无数据',
        jiating: lineFortune.家庭 || '暂无数据',
        jiankang: lineFortune.健康 || '暂无数据'
      };
    }

    return {
      yunshi: '暂无数据',
      caiyun: '暂无数据',
      jiating: '暂无数据',
      jiankang: '暂无数据'
    };
  },

  // 显示免责声明
  showDisclaimer() {
    this.setData({ showDisclaimerModal: true });
  },

  // 隐藏免责声明
  hideDisclaimer() {
    this.setData({ showDisclaimerModal: false });
  },

  // 解锁内容
  handleWaitUnlock() {
    if (this.videoAd) {
      this.videoAd.show().catch(() => {
        this.videoAd.load().then(() => {
          return this.videoAd.show();
        }).catch(err => {
          console.error('广告显示失败:', err);
          wx.showToast({ title: '广告加载失败', icon: 'none' });
        });
      });
    }
  },

  // 页面加载
  onLoad() {
    // 初始化卦象选项
    const guaOptions = hexagramsData.map((g, i) => ({
      label: `第${g.number}卦 ${g.name}`,
      value: i
    }));
    this.setData({ guaOptions });

    const app = getApp();
    if (app && app.globalData && app.globalData.version) {
      this.setData({
        version: app.globalData.version
      });
    }

    this.setData({ hasShared: false });

    if (wx.createRewardedVideoAd) {
      this.videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-b0c4ca80c737b35f'
      });

      this.videoAd.onLoad(() => {
        console.log('激励视频广告加载成功');
      });

      this.videoAd.onError((err) => {
        console.error('激励视频广告加载失败', err);
      });

      this.videoAd.onClose((res) => {
        if (res && res.isEnded) {
          this.setData({ hasShared: true });
        } else {
          wx.showToast({ title: '请完整观看广告', icon: 'none' });
        }
      });
    }
  }
});
