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
          url: 'http://localhost:3000/api/user/wxlogin',
          method: "POST",
          data: {
            code,
            nickname,
            avatar
          },
          success: res => {
            // console.log(res);
            const {
              data
            } = res
            // console.log(data)
            wx.showToast({
              title: data.message,
              icon: "none"
            })
            if (data.status === 0) {
              wx.setStorageSync('my_token', data.token);
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
  }
})