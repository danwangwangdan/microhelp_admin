//获取应用实例
const app = getApp();
Page({
  data: {
    troubleType: ['电脑问题', '导航台软件使用问题', '打印机问题', '其他问题'],
    index: 0,
    isConfirmShow: true,
    isSolveShow: true,
    isCreateTask: 'process',
    isConfirmed: '',
    isSolved: '',
  },
  toConfirm: function() {
    this.setData({
      isConfirmShow: false,
      isCreateTask: '',
      isConfirmed: 'process'
    });

    this.onShow();
  },
  toSolve: function() {
    wx.navigateTo({
      url: '/pages/solve/solve'
    })
  },
  onLoad: function() {

  },
})