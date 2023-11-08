
// galery
const boxGalery =document.querySelector('.galery .modal-container')
const cardsGalery =document.querySelectorAll('.galery .content')

cardsGalery.forEach((card)=>{
    card.addEventListener('click',(e)=>{
        boxGalery.classList.add('active')
        e.preventDefault()
        document.body.style.overflow = 'hidden'
    })
})

addEventListener('click',(e)=>{
    if(e.target !== boxGalery){
        boxGalery.remove()
        document.body.style.overflow = 'initial'
    }
    console.log(e)
})
