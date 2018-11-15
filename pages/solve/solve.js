//获取应用实例
Page({
  data: {
    type: '默认解决方案',
    types: ['默认解决方案', '更换耗材', '第三方解决'],
    typeIndex: "0",
    noteMaxLen: 200, //备注最多字数
    content: "",
    noteNowLen: 0, //备注当前字数
  },
  toSolve: function(){
    wx.navigateTo({
      url: '/pages/solve_suc/solve_suc'
    })
  },
  onLoad: function() {

  }
})