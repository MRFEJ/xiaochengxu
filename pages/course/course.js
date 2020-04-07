// pages/course/course.js
import query from "../../utils/query"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    courses:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function () {
    let res=await query({url:"course/list"})
    // console.log(res)
    this.setData({
      courses:res.data.message
    })
  },
})