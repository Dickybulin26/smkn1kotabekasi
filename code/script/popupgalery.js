const boxGalery =document.querySelector('.galery .modal-container')
const cardsGalery =document.querySelectorAll('.galery .content')
const exitGalery =document.querySelector('.galery .modal-container .exit')

cardsGalery.forEach((card)=>{
    card.addEventListener('click',(e)=>{
        boxGalery.classList.add('active')
        e.preventDefault()
        document.body.style.overflow = 'hidden'
    })
})
exitGalery.addEventListener('click',(e)=>{
    boxGalery.classList.remove('active')
    e.preventDefault()
    document.body.style.overflow = 'initial'
})
