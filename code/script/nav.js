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

const navLink = [...document.querySelectorAll('.nav-link')]
const dropLink = [...document.querySelectorAll('.dropdown-link')];

navLink.forEach((link,i)=>{
    link.style.setProperty('--i', `${i * 0.1 + 0.5}s`) 
})

addEventListener('click', ({target})=>{
    
    navLink.forEach((link,i)=>{
        if(target == link.childNodes[1]){
            link.classList.toggle('clicked')
        }
    })
    dropLink.forEach((link,i)=>{
        if(target == link.childNodes[1]){
            link.classList.toggle('clicked')
        }
    })
    
})

