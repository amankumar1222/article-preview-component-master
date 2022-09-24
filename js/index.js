console.log('aasan hai');


let pershare = document.querySelector('.per-share')
let share = document.querySelector('.share img')
let hide_share = document.querySelector('.hide-share')

share.addEventListener("click", (e)=>{
    pershare.style.display = 'flex'
})  
hide_share.addEventListener("click", ()=>{
    pershare.style.display = 'none'
})  

share.addEventListener("dblclick", ()=>{
    pershare.style.display = 'none'
})  





