const letters=document.querySelector(".letters")
const write=document.querySelector(".writing")
const gameover=document.querySelector(".gameover")
const winlose=document.querySelector(".winlose")
const endword=document.querySelector(".word")
const restart=document.querySelector(".reset")

alp="abcçdeəfgğhxıİjkqlmnoöprsştuüvyz"
word=words[Math.floor(Math.random()*words.length)]
for (var i = 0; i < alp.length; i++){
let ld=document.createElement("div")
ld.classList.add("letter")
ld.textContent=alp[i].toUpperCase()
letters.appendChild(ld)
}
restart.addEventListener("click",()=>{
    location.reload() 
})
for (var m = 0; m < word.length; m++){
let ed=document.createElement("div")
ed.classList.add("empty")
write.appendChild(ed)
}
hgsay=0
document.addEventListener("keydown",e=>{
    Array.from(letters.children).forEach(let=>{
      if(String.fromCharCode(e.keyCode)==let.textContent){
         gamestart(let)
      }
    })
})
Array.from(letters.children).forEach(let=>{
   let.addEventListener("click",e=>{
       gamestart(e.target)
   })
})
function gamestart(let){
    turn=true
    let.classList.add("letterd")
    win=0
    for (let index = 0; index < word.length; index++) {
        if(word[index]==let.textContent){
            turn=false
           Array.from(write.children)[index].textContent=word[index]
        }
        if(write.children[index].textContent){
            win++
            if(win==word.length){
             gameover.style.display="flex"
             endword.textContent=`Word: ${word}` 
            }
        }
    }
    if(turn){
        if(hgsay==0) drawrope()
        if(hgsay==1) drawhead()
        if(hgsay==2) drawbody()
        if(hgsay==3) drawrightarm()
        if(hgsay==4) drawrleftarm()
        if(hgsay==5) drawrightleg()
        if(hgsay==6) drawleftleg()
       hgsay++
    }
    setTimeout(()=>{
     if(hgsay==7){
         endword.textContent=`Word: ${word}`
         winlose.textContent="Lose"
         gameover.style.display="flex"
        }
    },10)
}



