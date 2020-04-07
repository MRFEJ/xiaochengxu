// pages/study/study.js
import query from "../../utils/query"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studyList: null,
    bgc: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let res = await query({
      url: "study/progress"
    })
    if(res.data.status===0){
    res.data.message.forEach(item => {
      // console.log(item)
      if (item.study_progress <= 30) {
        item.bgc ="#ff0000"
      } else if (item.study_progress > 30 && item.study_progress <= 70) {
        item.bgc = "#orange"
      } else {
        item.bgc = "#b6d772"
      }
    })
    this.setData({
      studyList: res.data.message
    })

    }
  },
})