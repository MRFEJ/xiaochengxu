import {
  query
} from "../../utils/query"
Page({
  data: {
    swiperList: []
  },
  onShow() {
    this.lunbo()
  },
  lunbo() {
    query({
      url: "home/swipers"
    }).then(({
      data: {
        message
      }
    }) => {
      // console.log(message)
      this.setData({
        swiperList: message
      })
    })
  }
})