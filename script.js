const mobileMenu = document.querySelector('.mobile-menu')
const scrollBtn = document.querySelector('.scroll-top')
mobileMenu.addEventListener('click',()=>{
    document.querySelector('.menu').classList.toggle(.show)
})


//first function
window.addEventListener('scroll',function(){
    if(this.document.body.scrolltop >100 || document.documentElement.scrollTop >100){
        scrollBtn.style.display ="block"
    }
    else{
        scrollBtn.style.display ="none"
    }
})

//second function
scrollBtn.addEventListner('click',()=>{
    document.documentElement.scrollTop = 0;
})
