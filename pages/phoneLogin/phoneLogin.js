// pages/phoneLogin/phoneLogin.js
import {
     query
} from "../../utils/query"
Page({

     /**
      * 页面的初始数据
      */
     data: {
          tipName: "获取验证码",
          phone: "17704051019",
          isCountdown: false,
          count: 5,
          vcode: ""
     },
     changeValue({
          target: {
               dataset: {
                    name
               }
          },
          detail: {
               value
          }
     }) {
          // console.log(name,value)
          this.setData({
               [name]: value
          })
     },

     // 点击发送验证码
     getVcode() {
          // console.log(this.data.phone)
          let iphone = /^1[3456789][0-9]{9}$/
          if (!iphone.test(this.data.phone)) {
               wx.showToast({
                    title: "手机号格式不正确!",
                    icon: "none"
               })
               return
          } else {
               if (!this.data.isCountdown) {
                    // console.log(11)
                    clearTimeout(set)
                    this.setData({
                         isCountdown: true
                    })
                    let set = setInterval(() => {
                         let num = this.data.count - 1;
                         this.setData({
                              count: num
                         })
                         if (this.data.count == 0) {
                              this.setData({
                                   isCountdown: false,
                                   count: 5
                              })
                              clearTimeout(set)
                         }

                    }, 1000)
                    // 请求验证码
                    query({
                         url: "user/vcode",
                         data: {
                              phone: this.data.phone
                         }
                    }).then(({
                         data: {
                              vcode
                         }
                    }) => {
                         // console.log(res)
                         wx.showToast({
                              title: "验证码为:" + vcode,
                              icon: "none"
                         })
                    })
               }
          }
     },

     // 点击验证
     phoneLogin() {
          if (this.data.phone.trim() == '' || this.data.vcode.trim() == '') {
               return wx.showToast({
                    title: '手机号或验证码不能为空!',
                    icon: "none"
               })
          }
          query({
               url: "user/login",
               method: "POST",
               data: {
                    phone: this.data.phone,
                    vcode: this.data.vcode
               }
          }).then(({
               data: {
                    message,
                    status,
                    token
               }
          }) => {
               if (status === 0) {
                    wx.showToast({
                         title: message,
                    })
                    wx.setStorageSync('my_token', token);
                    wx.reLaunch({
                         url: "/pages/home/home"
                    })
               } else {
                    wx.showToast({
                         title: message,
                         icon: "none"
                    })
               }
          })
     }
})