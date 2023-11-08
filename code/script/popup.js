const box =document.querySelector('.blud .modal-container')
const cards =document.querySelectorAll('.blud .content')
const exit =document.querySelector('.blud .modal-box .exit')

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
