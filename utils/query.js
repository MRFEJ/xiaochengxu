let baseURL="http://192.168.1.82:3000/api/"

export const query=({url,method,data,isok=true})=>{
     return new Promise((resolve,reject)=>{
          const header={}
          if(isok){
               header.Authorization=wx.getStorageSync('my_token')
          }
          wx.request({
            url: `${baseURL}${url}`,
            method,
            data,
            header,
            success:res=>{
               resolve(res)
            },
            fail:res=>{
               reject(res)
            }
          })
     })
}