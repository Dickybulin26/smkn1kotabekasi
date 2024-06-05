const boxBlud =document.querySelector('.blud .modal-container')
const cardsBlud =document.querySelectorAll('.blud .content')
const exitBlud =document.querySelector('.blud .modal-box .exit')

cardsBlud.forEach((card)=>{
    card.addEventListener('click',(e)=>{
        boxBlud.classList.add('active')
        e.preventDefault()
        document.body.style.overflow = 'hidden'
    })
})
exitBlud.addEventListener('click',(e)=>{
    boxBlud.classList.remove('active')
    e.preventDefault()
    document.body.style.overflow = 'initial'
})
