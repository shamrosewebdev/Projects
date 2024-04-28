const navel=document.querySelector('.navlinks');
const barel=document.querySelector('.bars');

barel.addEventListener("click",()=>{
    navel.classList.toggle("nav--open")
    barel.classList.toggle("bar--open")
})