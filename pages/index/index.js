// miniprogram/pages/index/index.js
const hexagramsData1 = require('../../data/hexagrams.js');
const hexagramsData2 = require('../../data/hexagrams31-64.js');
const hexagramsData = [...hexagramsData1, ...hexagramsData2];
const hexagramsV62 = require('../../data/hexagrams_v62.js'); // v62完整数据
const hexagramFortunes = require('../../data/hexagramFortunes.js');

Page({
  data: {
    isAnimating: false,
    hexagram: null,
    currentTab: 0,
    fortuneAnalysis: null,
    showDisclaimerModal: false,
    shakingClass: '',
    shakeThrottle: false,
    lastShakeTime: 0,
    shakeThreshold: 3000
  },

  // 切换选项卡
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

  // 生成运势分析
  generateFortuneAnalysis(hexagramNumber, lineIndex) {
    // 获取特定卦的运势数据
    const hexFortuneData = hexagramFortunes[hexagramNumber];
    const lineFortune = hexFortuneData ? hexFortuneData.lines[lineIndex] : null;
    
    // 返回四个字段的数据（使用英文属性名，避免 WXML 中文属性问题）
    if (lineFortune) {
      return {
        yunshi: lineFortune.运势 || '暂无数据',
        caiyun: lineFortune.财运 || '暂无数据',
        jiating: lineFortune.家庭 || '暂无数据',
        jiankang: lineFortune.健康 || '暂无数据'
      };
    }
    
    // 如果没有找到对应数据，返回默认值
    return {
      yunshi: '暂无数据',
      caiyun: '暂无数据',
      jiating: '暂无数据',
      jiankang: '暂无数据'
    };
  },

  // 算卦
  castHexagram() {
    if (this.data.isAnimating) return;
    
    this.setData({ 
      isAnimating: true,
      shakingClass: 'shaking'
    });

    setTimeout(() => {
      try {
        if (!hexagramsData || hexagramsData.length === 0) {
          throw new Error('卦象数据未加载');
        }
        
        const randomIndex = Math.floor(Math.random() * hexagramsData.length);
        const hexagram = hexagramsData[randomIndex];
        
        if (!hexagram || !hexagram.lines || hexagram.lines.length < 6) {
          throw new Error('卦象数据异常');
        }
        
        const lineIndex = Math.floor(Math.random() * 6);
        const selectedLineName = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'][lineIndex];
        const selectedLine = hexagram.lines[lineIndex];

        if (!selectedLine) {
          throw new Error('选择的爻位不存在');
        }

        // 生成运势分析数据
        const fortuneAnalysis = this.generateFortuneAnalysis(hexagram.number, lineIndex);

        this.setData({
          isAnimating: false,
          shakingClass: '',
          hexagram: {
            ...hexagram,
            selectedLineName,
            selectedLineText: selectedLine.text,
            selectedLineDesc: selectedLine.desc
          },
          currentTab: 0,
          fortuneAnalysis: fortuneAnalysis
        });

        // 滚动到页面底部
        wx.nextTick(() => {
          wx.pageScrollTo({
            scrollTop: 9999,
            duration: 300
          });
        });

        

      } catch (error) {
        console.error('算卦出错:', error);
        this.setData({ 
          isAnimating: false,
          shakingClass: '',
          hexagram: null,
          fortuneAnalysis: null
        });
        wx.showToast({
          title: '算卦出错，请重试',
          icon: 'none'
        });
      }
    }, 2000);
  },

  // 页面加载
  onLoad() {
    const hasReadDisclaimer = wx.getStorageSync('hasReadDisclaimer');
    if (!hasReadDisclaimer) {
      this.setData({ showDisclaimerModal: true });
    }

    // 开启摇一摇监听
    this.startShakeListen();
  },

  // 页面卸载
  onUnload() {
    // 关闭摇一摇监听
    this.stopShakeListen();
  },

  // 页面隐藏
  onHide() {
    // 关闭摇一摇监听（节省电量）
    this.stopShakeListen();
  },

  // 页面显示
  onShow() {
    // 开启摇一摇监听
    this.startShakeListen();
  },

  // 开始监听摇一摇
  startShakeListen() {
    if (wx.onAccelerometerChange) {
      wx.onAccelerometerChange(this.onAccelerometerChange);
      console.log('摇一摇监听已开启');
    } else {
      console.warn('当前设备不支持摇一摇');
    }
  },

  // 停止监听摇一摇
  stopShakeListen() {
    if (wx.offAccelerometerChange) {
      wx.offAccelerometerChange(this.onAccelerometerChange);
      console.log('摇一摇监听已关闭');
    }
  },

  // 监听加速度变化（检测摇一摇）
  onAccelerometerChange(e) {
    const { x, y, z } = e;

    // 计算三个轴的加速度变化
    const acceleration = Math.sqrt(x * x + y * y + z * z);

    // 设置摇一摇阈值（降低到10，更容易触发）
    const SHAKE_THRESHOLD = 10;

    // 检查是否达到摇一摇阈值
    if (acceleration > SHAKE_THRESHOLD && !this.data.shakeThrottle) {
      console.log('检测到摇一摇！加速度:', acceleration);
      
      this.setData({ shakeThrottle: true });
      this.setData({ lastShakeTime: Date.now() });
      
      // 显示摇一摇反馈
      wx.showToast({
        title: '📱 检测到摇动，正在算卦...',
        icon: 'loading',
        duration: 1500
      });
      
      // 触发算卦
      this.castHexagram();
      
      // 3秒后解除防抖限制
      setTimeout(() => {
      }, this.data.shakeThreshold);
    }
  },

  // 显示免责声明
  showDisclaimer() {
    this.setData({ showDisclaimerModal: true });
  },

  // 隐藏免责声明
  hideDisclaimer() {
    this.setData({ showDisclaimerModal: false });
    wx.setStorageSync('hasReadDisclaimer', true);
  },
});
