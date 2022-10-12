const trocaTema = document.querySelector("#trocaTema");
const body = document.querySelector("body")

trocaTema.addEventListener("click",()=>{
    body.classList.toggle("light-mode")
    body.classList.toggle("dark-mode")
})