var canvas = /** @type {HTMLCanvasElement} */ (document.querySelector('#hangman'))
const ctx=canvas.getContext("2d")


 function drawrope(){
    ctx.lineWidth="8"
    ctx.beginPath()
    ctx.moveTo(20,400)
    ctx.lineTo(0,400)
    ctx.lineTo(40,400)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(20,400)
    ctx.lineTo(20,0)
    ctx.lineTo(200,0)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth="5"
    ctx.moveTo(200,0)
    ctx.lineTo(200,45)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth="1"
    ctx.moveTo(200,45)
    ctx.lineTo(200,65)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth="5"
    ctx.moveTo(20,50)
    ctx.lineTo(50,0)
    ctx.stroke()

}
 function drawhead(){
    
    ctx.beginPath()
    ctx.lineWidth="1"
    ctx.arc(200,95,30,0,360)
    ctx.stroke()
}
 function drawbody(){
    ctx.beginPath()
    ctx.lineWidth="5"
    ctx.moveTo(200,125)
    ctx.lineTo(200,250)
    ctx.stroke()
}
 function drawrightarm(){
    ctx.beginPath()
    ctx.lineWidth="5"
    ctx.moveTo(200,150)
    ctx.lineTo(240,190)
    ctx.stroke()

  
}
function  drawrleftarm(){
    ctx.beginPath()
    ctx.lineWidth="5"
    ctx.moveTo(200,150)
    ctx.lineTo(160,190)
    ctx.stroke()
}
function drawrightleg(){
    ctx.beginPath()
    ctx.lineWidth="5"
    ctx.moveTo(200,250)
    ctx.lineTo(250,300)
    ctx.stroke()

 
}
 function drawleftleg(){
    ctx.beginPath()
    ctx.lineWidth="5"
    ctx.moveTo(200,250)
    ctx.lineTo(150,300)
    ctx.stroke()
}
words=["PƏLƏNG","ŞİR","AYI","PİŞİK","FİL","İNƏK","İT","TUTUQUŞU","BALIQ","ÖRDƏK","KƏPƏNƏK","QAZ","AT","PANDA","KEÇİ","BALİNA","DOVŞAN","SİÇAN","QOYUN","EŞŞƏK","İLAN","YARASA","KÖPƏKBALIĞI","ARI"]

