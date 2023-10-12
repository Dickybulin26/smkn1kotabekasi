const nav = document.querySelector('nav');

addEventListener('scroll',()=>{
    if(window.pageYOffset > 0 && !nav.classList.contains('muncul')){
        nav.classList.add('muncul')
    }
    else if (window.pageYOffset < 1 && nav.classList.contains('muncul')) {
        nav.classList.remove('muncul')
    }
})

const hamburgerBtn = document.querySelector('.hamburger-menu');

addEventListener('click', ({target})=>{
    if(target == hamburgerBtn || [...hamburgerBtn.childNodes].includes(target)){
        nav.classList.toggle('checked')
    }
})