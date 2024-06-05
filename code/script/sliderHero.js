const heroCarouselItems = document.querySelectorAll('.carousel-item')
const garis = document.querySelector('.garis-carousel')
let currentIndexHero = 0

function showSlideHero() {
  setLineSlider(currentIndexHero)

  heroCarouselItems.forEach(item => {
    item.classList.remove('lebar')
    item.classList.remove('hide')
  })

  heroCarouselItems[currentIndexHero].classList.add('lebar')

}

function nextSlideHero() {
  currentIndexHero = (currentIndexHero + 1) % heroCarouselItems.length;
  showSlideHero()

  if (currentIndexHero != heroCarouselItems.length - 1) {
    heroCarouselItems[(currentIndexHero + 2) % heroCarouselItems.length].classList.add('hide')
  }
  else {
    heroCarouselItems[0].classList.add('hide')
  }
}

function previousSlideHero() {
  currentIndexHero = (currentIndexHero - 1 + heroCarouselItems.length) % heroCarouselItems.length;
  showSlideHero()

  if (currentIndexHero != 0) {
    heroCarouselItems[((currentIndexHero - 2 + heroCarouselItems.length) % heroCarouselItems.length) % heroCarouselItems.length].classList.add('hide')
  }
  else {
    heroCarouselItems[heroCarouselItems.length - 1].classList.add('hide')
  }
}

function setLineSlider(index) {
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

buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    (i == 1) ? nextSlideHero() : previousSlideHero()
    delay(button)
  })
})