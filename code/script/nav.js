const nav = document.querySelector('nav');

addEventListener('scroll',()=>{
    if(window.pageYOffset > 0 && !nav.classList.contains('muncul')){
        nav.classList.add('muncul')
    }
    else if (window.pageYOffset < 1 && nav.classList.contains('muncul')) {
        nav.classList.remove('muncul')
    }
})