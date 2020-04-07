// pages/search/search.js
import query from "../../utils/query"
Page({
     /**
      * 页面的初始数据
      */
     data: {
          // 课程
          courses:[],
          // 输入框的值
          value: "",
          isok: false
     },
     // 回车事件
     async search(e) {
          // console.log(e)
          this.setData({
               value: e.detail
          })
          let res = await query({
               url: "course/search",
               data: {
                    name: this.data.value
               }
          })
          // console.log(res)
          this.setData({
               courses:res.data.message
          })
     },
     // 获取焦点事件
     focus() {
          this.setData({
               isok: true
          })
     },
     // 点击取消
     search_qx() {
          // console.log(111)
          this.setData({
               isok: false,
               value: ""
          })
     },
})