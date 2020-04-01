let baseURL = "http://192.168.1.82:3000/api/"

const query = ({
     url,
     method = "GET",
     tipName = "加载中...",
     data
}) => {
     wx.showLoading({
          title: tipName,
     })
     const header = {}
     if (wx.getStorageSync('my_token')) {
          header.Authorization = wx.getStorageSync('my_token')
     }
     return new Promise((resolve, reject) => {
          wx.request({
               url: `${baseURL}${url}`,
               method,
               data,
               header,
               success: res => {
                    resolve(res)
               },
               fail: res => {
                    reject(res)
               },
               complete: () => {
                    wx.hideLoading()
               }
          })
     })
}
export default query