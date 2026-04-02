// miniprogram/pages/index/index.js
const hexagramsData = require('../../data/hexagrams.js');
const hexagramFortunes = require('../../data/hexagramFortunes.js');
const hexagramMainFortunes = require('../../data/hexagramMainFortunes.js');

Page({
  data: {
    version: 'v2.4.145',
    isAnimating: false,
    hexagram: null,
    currentTab: 0,
    fortuneAnalysis: null,
    mainFortune: null,
    showDisclaimerModal: false,
    shakingClass: '',
    showShakeHint: false,
    isListening: false,
    isShaking: false, // 是否正在摇动
    isShakingOrListening: false, // 是否正在摇动或监听（禁用手动查询按钮）
    shakeStatusText: '摇动手机开始算卦', // 摇动状态提示文字
    showShakeModal: false, // 是否显示摇动提示弹窗
    hasShared: false // 是否已解锁
  },

  // 摇一摇检测变量
  lastX: null,
  lastY: null,
  lastZ: null,
  lastShakeTime: 0,
  shakeStartTime: null, // 摇动开始时间
  shakeThreshold: 0.8, // 加速度变化阈值（m/s²）
  stopShakeDelay: 800, // 停止摇动的检测延迟（毫秒）- 800ms内没有摇动视为停止
  isVibrating: false, // 是否正在震动

  // 激励视频广告实例
  videoAd: null,

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

  // 跳转到查询页面
  navigateToQuery() {
    if (this.data.isShakingOrListening) {
      return; // 摇动或监听时禁用
    }
    wx.navigateTo({
      url: '/pages/query/query'
    });
  },

  // 开始持续震动
  startVibration() {
    if (this.isVibrating) return;
    this.isVibrating = true;

    // 立即震动一次（强震动）
    wx.vibrateShort({ type: 'heavy' });

    // 每80ms震动一次，使用强震动，实现更明显的持续震动效果
    this._vibrationTimer = setInterval(() => {
      if (this.isVibrating) {
        wx.vibrateShort({ type: 'heavy' });
      }
    }, 80);
  },

  // 停止震动
  stopVibration() {
    this.isVibrating = false;
    if (this._vibrationTimer) {
      clearInterval(this._vibrationTimer);
      this._vibrationTimer = null;
    }
  },

  // 单次震动（用于显示结果）
  singleVibrate() {
    wx.vibrateLong();
  },

  // 监听加速度变化（摇一摇检测）
  handleAccelerometerChange(res) {
    const { x, y, z } = res;

    // 首次初始化
    if (this.lastX === null) {
      this.lastX = x;
      this.lastY = y;
      this.lastZ = z;
      return;
    }

    // 计算加速度变化量
    const deltaX = Math.abs(x - this.lastX);
    const deltaY = Math.abs(y - this.lastY);
    const deltaZ = Math.abs(z - this.lastZ);

    // 保存当前值
    this.lastX = x;
    this.lastY = y;
    this.lastZ = z;

    // 计算总加速度变化
    const acceleration = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);

    const now = Date.now();

    // 检测是否正在摇动
    if (acceleration > this.shakeThreshold) {
      // 检测到摇动
      this.lastShakeTime = now;

      // 如果是第一次摇动，记录开始时间并更新状态
      if (!this.data.isShaking) {
        console.log('✅ 开始摇动');
        this.shakeStartTime = now;
        this.setData({
          isShaking: true,
          shakeStatusText: '正在摇卦...',
          shakingClass: 'active'
        });
        // 开始持续震动
        this.startVibration();
      }

      // 清除停止检测定时器
      if (this._stopShakeTimer) {
        clearTimeout(this._stopShakeTimer);
        this._stopShakeTimer = null;
      }

      // 设置新的停止检测定时器
      this._stopShakeTimer = setTimeout(() => {
        this.onShakeStopped();
      }, this.stopShakeDelay);
    }
  },

  // 摇动停止后的处理
  onShakeStopped() {
    console.log('✅ 停止摇动，开始算卦');

    // 清除定时器
    if (this._stopShakeTimer) {
      clearTimeout(this._stopShakeTimer);
      this._stopShakeTimer = null;
    }

    // 停止震动
    this.stopVibration();

    // 停止监听加速度
    this.stopAccelerometer();

    // 更新状态：显示"算卦中..."
    this.setData({
      isShaking: false,
      showShakeHint: false,
      isAnimating: true,
      shakeStatusText: '算卦中...'
    });

    // 2秒后显示算卦结果
    setTimeout(() => {
      this.performCastHexagram();
    }, 2000);
  },

  // 开始监听加速度
  startAccelerometer() {
    // 保存绑定后的函数引用
    if (!this._boundHandleAccelerometerChange) {
      this._boundHandleAccelerometerChange = this.handleAccelerometerChange.bind(this);
    }

    // 重置变量
    this.lastX = null;
    this.lastY = null;
    this.lastZ = null;
    this.lastShakeTime = 0;
    this.shakeStartTime = null;

    wx.startAccelerometer({
      interval: 'game',
      success: () => {
        console.log('✅ 加速度监听已启动');
        wx.onAccelerometerChange(this._boundHandleAccelerometerChange);
        this.setData({
          isListening: true,
          isShakingOrListening: true // 禁用手动查询按钮
        });
      },
      fail: (err) => {
        console.error('❌ 启动加速度监听失败:', err);
        // 如果摇一摇不可用，直接开始算卦
        this.onShakeStopped();
      }
    });
  },

  // 停止监听加速度
  stopAccelerometer() {
    if (this._boundHandleAccelerometerChange) {
      wx.offAccelerometerChange(this._boundHandleAccelerometerChange);
    }
    wx.stopAccelerometer({
      success: () => {
        console.log('加速度监听已停止');
        this.setData({
          isListening: false,
          isShakingOrListening: false // 恢复手动查询按钮
        });
      },
      fail: () => {
        this.setData({
          isListening: false,
          isShakingOrListening: false // 恢复手动查询按钮
        });
      }
    });
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

  // 算卦 - 点击按钮触发
  castHexagram() {
    if (this.data.isAnimating || this.data.showShakeHint || this.data.isShaking) return;

    // 直接在主界面显示摇动提示
    this.setData({
      showShakeHint: true,
      shakeStatusText: '摇动手机开始算卦',
      isShaking: false
    });

    // 开始监听摇动
    this.startAccelerometer();

    // 8秒后如果还没摇动，自动开始
    this._shakeTimeout = setTimeout(() => {
      if (this.data.showShakeHint && !this.data.isShaking && !this.data.isAnimating) {
        console.log('8秒内未检测到摇动，自动开始算卦');
        this.onShakeStopped();
      }
    }, 8000);
  },

  // 执行算卦逻辑
  performCastHexagram() {
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

      const fortuneAnalysis = this.generateFortuneAnalysis(hexagram.number, lineIndex);
      const mainFortune = hexagramMainFortunes[String(hexagram.number)] || hexagramMainFortunes[hexagram.number] || {
        yunshi: '暂无数据',
        caiyun: '暂无数据',
        jiating: '暂无数据',
        jiankang: '暂无数据'
      };

      this.setData({
        isAnimating: false,
        shakingClass: '',
        hexagram: {
          ...hexagram,
          selectedLineName,
          selectedLineText: selectedLine.text,
          selectedLineDesc: selectedLine.desc,
          // 添加英文字段名映射
          guaCi: hexagram.卦辞 || '',
          tuanZhuan: hexagram.彖传 || '',
          xiangZhuan: hexagram.象传 || '',
          xuGua: hexagram.序卦 || '',
          zaGua: hexagram.杂卦 || ''
        },
        currentTab: 0,
        fortuneAnalysis: fortuneAnalysis,
        mainFortune: mainFortune,
        shakeStatusText: '摇动手机开始算卦',
        hasShared: false // 每次算卦都重置为未分享状态
      });

      // 显示结果时震动一次
      this.singleVibrate();

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
        fortuneAnalysis: null,
        shakeStatusText: '摇动手机开始算卦'
      });
      wx.showToast({
        title: '算卦出错，请重试',
        icon: 'none'
      });
    }
  },

  // 页面加载
  onLoad() {
    // 从app.js获取版本号（会自动同步app.json）
    const app = getApp()
    if (app && app.globalData && app.globalData.version) {
      this.setData({ version: app.globalData.version })
    }

    // 检查小程序更新
    this.checkUpdate();

    const hasReadDisclaimer = wx.getStorageSync('hasReadDisclaimer');
    if (!hasReadDisclaimer) {
      this.setData({ showDisclaimerModal: true });
    }

    // 每次打开都重置解锁状态，需要重新看广告
    this.setData({ hasShared: false });

    // 初始化激励视频广告
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
          // 用户看完广告，解锁内容（仅本次有效）
          this.setData({ hasShared: true });
          wx.showToast({
            title: '已解锁',
            icon: 'success'
          });

          // 延迟 500ms 后滚动到页面底部
          setTimeout(() => {
            wx.pageScrollTo({
              scrollTop: 9999,
              duration: 300
            });
          }, 500);
        } else {
          // 用户未看完广告
          wx.showToast({
            title: '请看完广告',
            icon: 'none'
          });
        }
      });
    }
  },

  // 检查小程序更新
  checkUpdate() {
    if (!wx.getUpdateManager) {
      console.log('当前微信版本不支持自动更新');
      return;
    }

    const updateManager = wx.getUpdateManager();

    // 监听向微信后台请求检查更新结果事件
    updateManager.onCheckForUpdate((res) => {
      console.log('检查更新结果:', res.hasUpdate);
    });

    // 监听小程序有版本更新事件
    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: '版本更新',
        content: '新版本已准备好，是否立即更新？\n\n更新后将删除缓存并重新进入小程序',
        confirmText: '立即更新',
        cancelText: '稍后再说',
        success: (res) => {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate();
          } else {
            // 用户选择稍后更新，下次启动时会再次提示
            console.log('用户选择稍后更新');
          }
        }
      });
    });

    // 监听小程序更新失败事件
    updateManager.onUpdateFailed(() => {
      wx.showModal({
        title: '更新失败',
        content: '新版本下载失败，请检查网络后重新进入小程序',
        showCancel: false,
        success: () => {
          // 可以选择重新进入小程序
          wx.reLaunch({
            url: '/pages/index/index'
          });
        }
      });
    });
  },

  // 页面卸载时停止监听加速度
  onUnload() {
    if (this._shakeTimeout) {
      clearTimeout(this._shakeTimeout);
      this._shakeTimeout = null;
    }
    if (this._stopShakeTimer) {
      clearTimeout(this._stopShakeTimer);
      this._stopShakeTimer = null;
    }
    this.stopVibration();
    this.stopAccelerometer();

    // 清理广告资源
    if (this.videoAd) {
      this.videoAd.offLoad();
      this.videoAd.offError();
      this.videoAd.offClose();
      this.videoAd = null;
    }
  },

  // 页面隐藏时停止监听加速度
  onHide() {
    if (this._shakeTimeout) {
      clearTimeout(this._shakeTimeout);
      this._shakeTimeout = null;
    }
    if (this._stopShakeTimer) {
      clearTimeout(this._stopShakeTimer);
      this._stopShakeTimer = null;
    }
    this.stopVibration();
    this.stopAccelerometer();
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

  // 看广告解锁 - 显示激励视频广告
  handleWaitUnlock() {
    // 显示激励视频广告
    if (this.videoAd) {
      this.videoAd.show().catch(() => {
        // 失败重试
        this.videoAd.load()
          .then(() => this.videoAd.show())
          .catch(err => {
            console.error('激励视频广告显示失败', err);
            wx.showToast({
              title: '广告加载失败',
              icon: 'none'
            });
          });
      });
    } else {
      wx.showToast({
        title: '广告不可用',
        icon: 'none'
      });
    }
  }
});
