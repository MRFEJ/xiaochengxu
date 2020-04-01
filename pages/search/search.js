// pages/search/search.js
Page({

     /**
      * 页面的初始数据
      */
     data: {
          // 输入框的值
          value: "",
          isok:false
     },
     // change事件
     search(e) {
          console.log(e)
          this.setData({
               value :e.detail
          })
     },
     // 获取焦点事件
     focus(){
          this.setData({
               isok:true
          })
     },
     // 点击取消
     search_qx(){
          this.setData({
               isok:false,
               value:""
          })
     },
})