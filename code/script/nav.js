const nav = document.querySelector('nav');

addEventListener('scroll',()=>{
    if(window.pageYOffset > 0 && !nav.classList.contains('muncul')){
        nav.classList.add('muncul')
    }
    else if (window.pageYOffset < 1 && nav.classList.contains('muncul')) {
        nav.classList.remove('muncul')
    }
})

const navlink = [...document.querySelectorAll('nav .nav .nav-link')]

navlink.forEach((link,i)=>{
    link.style.setProperty('--i', `${i * 0.1 + 0.5}s`) 
})

const hamburgerBtn = document.querySelector('.hamburger-menu');

addEventListener('click', ({target})=>{
    if(target == hamburgerBtn || [...hamburgerBtn.childNodes].includes(target)){
        nav.classList.toggle('checked')
    }
})