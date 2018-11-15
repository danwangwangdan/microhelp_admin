const app = getApp()

Page({
  data: {
    troubleType: [{
        id: 0,
        name: '电脑问题'
      },
      {
        id: 1,
        name: '导航台软件使用问题'
      },
      {
        id: 2,
        name: '打印机问题'
      },
      {
        id: 3,
        name: '其他问题'
      }
    ],
  },
  //事件处理函数
  toView: function() {
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  },
  toHome: function() {
    wx.reLaunch({
      url: '/pages/home/home'
    })
  },
  onLoad: function() {

  }

})