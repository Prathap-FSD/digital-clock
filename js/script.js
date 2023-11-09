let hourDiv = document.querySelector('.hour')
let minuteDiv = document.querySelector('.minute')
let seconDiv = document.querySelector('.second')

let amDiv = document.querySelector('.am')
let pmDiv = document.querySelector('.pm')

setInterval(()=>{
const time = new Date()
const hours = time.getHours()
const min = time.getMinutes()
const sec = time.getSeconds()
if(hours > 11 ){
    pmDiv.className = "pm active"
    amDiv.className = "am"
    if(hours>12){
        hourDiv.innerText= (hours-12).toString().padStart(2,0)
    }else{
        hourDiv.innerText= hours.toString().padStart(2,0)
    }
}else{
    amDiv.className = "am active"
    pmDiv.className = "pm"
    if(hours ==0){
        hourDiv.innerText = 12
    }else{
        hourDiv.innerText= hours.toString().padStart(2,0)
    }
}
minuteDiv.innerText = min.toString().padStart(2,0)
seconDiv.innerText = sec.toString().padStart(2,0)

},1000)
