const head = document.querySelector("#inner")
head.addEventListener("click",(e)=>{
    console.log("outer")
})

document.getElementById("outer").addEventListener("click",(e)=>{
    console.log("inner clicked")
    e.stopPropagation()
})
// document.querySelector("div").style.backgroundColor="green"

const btn = document.getElementById("button")
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    // alert("hello")
})