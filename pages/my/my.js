// pages/my/my.js
import query from "../../utils/query"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let res=await query({url:"my/info"})
    // console.log(res)
    this.setData({
      userInfo:res.data.message
    })
  },
  contact(){
    wx.makePhoneCall({
      phoneNumber: '10086' //仅为示例，并非真实的电话号码
    })
  }
})