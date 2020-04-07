// components/canvas/canvas.js
Component({
     /**
      * 组件的属性列表
      */
     properties: {
          // 子组件传过来的占比
          study_progress: {
               value: 100,
               type: Number
          },
          // 传过来的颜色
          color: String,
          canvas_id: Number,
          lineWidth: {
               value: 5,
               type: Number
          },
          width: {
               value: 100,
               type: Number
          },
          height: {
               value: 100,
               type: Number
          },
          bgc: {
               type: String,
               value: "#f8f8f8"
          },
     },
     lifetimes: {
          ready() {
               // console.log(this.properties)
               this.changeCanva()
          }
     },
     methods: {
          changeCanva() {
               const {
                    study_progress,
                    color,
                    canvas_id,
                    lineWidth,
                    width,
                    height,
                    bgc
               } = this.properties
               // console.log(study_progress,
               //      color,
               //      canvas_id,
               //      lineWidth,
               //      width,
               //      height,
               //      bgc)

               const ctx = wx.createCanvasContext(canvas_id, this)
               console.log(ctx)
               // 第一笔
               ctx.beginPath() // 开启路径
               ctx.strokeStyle = bgc
               ctx.lineWidth = lineWidth
               ctx.arc(width / 2, height / 2, (width - lineWidth) / 2, 0, 2 * Math.PI)
               ctx.stroke() // 非填充式画

               // 第二笔画进度
               ctx.beginPath() // 开启路径
               ctx.strokeStyle = color
               ctx.lineCap = 'round'
               const endAngle = (study_progress / 100) * 2 * Math.PI - 0.5 * Math.PI
               ctx.arc(width / 2, height / 2, (width - lineWidth*2) / 2, -0.5 * Math.PI, endAngle)
               ctx.stroke()

               // 第三笔画文字
               ctx.beginPath() // 开启路径
               ctx.fillStyle = color
               const font_size = 12
               ctx.font = font_size + 'px Helvetica'
               if (study_progress > 99) {
                    ctx.fillText(parseInt(study_progress) + '%', width / 2 - 13, height / 2 + 5)
               } else {
                    ctx.fillText(parseInt(study_progress) + '%', width / 2 - 10, height / 2 + 5)
               }

               ctx.draw()
          }
     }
})