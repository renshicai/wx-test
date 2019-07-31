// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user : [
      {
        username:"ren",
        age:28,
        sex:"nan"
      },
      {
        username: "re",
        age: 27,
        sex: "na"
      },
      {
        username: "r",
        age: 26,
        sex: "n"
      }
    ]
  },

  test:function(){
      return "事件生效";
  },
  test1: function (e) {
    console.log(e);
    return "foucs焦点";
  },
  test2: function (e) {
    console.log(e);
    return "bulor光标";
  },
  test3: function (e) {
    console.log(e);
    return "完成事件";
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})