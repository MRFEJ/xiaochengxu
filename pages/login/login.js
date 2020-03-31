// pages/login/login.js
Page({
  wxLogin: function (e) {
    // console.log(e)
    const {
      errMsg
    } = e.detail
    if (errMsg === "getUserInfo:fail auth deny") return
    const {
      avatarUrl: avatar,
      nickName: nickname
    } = e.detail.userInfo
    wx.login({
      async success({code}) {
        // 发起网络请求
        // console.log(code)
        wx.request({
          url: 'http://192.168.1.82:3000/api/user/wxlogin',
          method: "POST",
          data: {
            code,
            nickname,
            avatar
          },
          success: res => {
            // console.log(res);
            const {
              message,status,token
            } = res .data
            // console.log(data)
            wx.showToast({
              title: message,
              icon: "none"
            })
            if (status === 0) {
              wx.setStorageSync('my_token', token);
              wx.reLaunch({
                url: "/pages/home/home"
              })
            }
          },
        })
      },
      fail: err => {
        console.log("...code...调用失败")
      }
    })
  },
  phoneLogin(){
    wx.navigateTo({
      url:"../phoneLogin/phoneLogin"
    })
  }
})