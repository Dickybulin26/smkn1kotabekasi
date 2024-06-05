const heroCarouselItems = document.querySelectorAll('.carousel-item') 
const garis = document.querySelector('.garis-carousel')
let heroCurrentIndex = 0

function showSlideHero(cardHide) {
  setLineSlider(heroCurrentIndex)

  heroCarouselItems.forEach(item => {
    item.classList.remove('lebar')
    item.classList.remove('hide')
  })

  heroCarouselItems[heroCurrentIndex].classList.add('lebar')
  if (heroCurrentIndex != heroCarouselItems.length - 1) {
      heroCarouselItems[cardHide].classList.add('hide')
  }
  else {
    heroCarouselItems[0].classList.add('hide')
  }
}

function nextSlideHero() {
  heroCurrentIndex = (heroCurrentIndex + 1) % heroCarouselItems.length;
  showSlideHero((heroCurrentIndex + 2) % heroCarouselItems.length)
}

function previousSlideHero() {
  heroCurrentIndex = (heroCurrentIndex - 1 + heroCarouselItems.length) % heroCarouselItems.length;
  showSlideHero((heroCurrentIndex - 2 + heroCarouselItems.length) % heroCarouselItems.length)
}

function setLineSlider(index){
  if (index == 1) {
    garis.classList.add('tengah')
    garis.classList.remove('akhir')
  }
  else if (index == 2) {
    garis.classList.add('akhir')
    garis.classList.remove('tengah')
  }
  else {
    garis.classList.remove('tengah')
    garis.classList.remove('akhir')
  }
}

function delay(btn) {
    btn.disabled = true;
    setTimeout(() => {
        btn.disabled = false;
    }, 1000);
}

const buttons = document.querySelectorAll('.btn button')

buttons.forEach((button,i)=>{
    button.addEventListener('click', ()=>{
      (i == 1) ? nextSlideHero() : previousSlideHero()
      delay(button)
    })
})