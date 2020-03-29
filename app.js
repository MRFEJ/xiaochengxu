//app.js
App({
  onLaunch: function () {
    var value = wx.getStorageSync('my_token')
    if (value) {
      // Do something with return value
      // console.log(value)
      wx.reLaunch({
        url: "/pages/home/home"
      })
    }
  }
})