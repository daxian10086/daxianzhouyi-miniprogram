// components/hexagram-display/index.js
Component({
  properties: {
    hexagram: { type: Object, value: null },
    fortuneAnalysis: { type: Object, value: null },
    mainFortune: { type: Object, value: null },
    hasShared: { type: Boolean, value: false },
    currentTab: { type: Number, value: 0 }
  },

  methods: {
    switchTab(e) {
      let index = e.currentTarget.dataset.index;
      if (typeof index === 'string') {
        index = parseInt(index, 10);
      }
      if (isNaN(index) || index < 0 || index > 2) {
        return;
      }
      this.setData({ currentTab: index });
      // 触发事件通知父组件
      this.triggerEvent('tabchange', { index });
    },

    handleWaitUnlock() {
      // 触发事件通知父组件处理广告
      this.triggerEvent('unlock');
    }
  }
});
