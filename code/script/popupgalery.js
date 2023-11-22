const box =document.querySelector('.galery .modal-container')
const cards =document.querySelectorAll('.galery .content')
const exit =document.querySelector('.galery .modal-container .exit')

cards.forEach((card)=>{
    card.addEventListener('click',(e)=>{
        box.classList.add('active')
        e.preventDefault()
        document.body.style.overflow = 'hidden'
    })
})
exit.addEventListener('click',(e)=>{
    box.classList.remove('active')
    e.preventDefault()
    document.body.style.overflow = 'initial'
})
