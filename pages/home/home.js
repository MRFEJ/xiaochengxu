import query from "../../utils/query"
Page({
  data: {
    // 轮播图
    swiperList: [],
    // 推荐图
    tjList:[],
    hotVideo:[]
  },
    // 获取轮播图
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
    },
    // 获取推荐图
    async tuijian(){
      let res=await query({url:"home/course"})
      // console.log(res)
      this.setData({
        tjList:res.data.message
      })
    },
// 获取热门视频
async hotVideo(){
  let res=await query({
    url:"home/video"
  })
  // console.log(res)
  if(res.data.status==0){
    // console.log(11)
this.setData({
  hotVideo:res.data.message
})
  }
},
  onShow() {
    this.lunbo();
    this.tuijian()
    this.hotVideo()
  },
})