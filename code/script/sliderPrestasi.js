const prestasiCarouselItems = document.querySelectorAll('.carousel-item-auto')
let prestasiCurrentIndex = 0

function showSlidePrestasi() {
  prestasiCarouselItems.forEach(item => {
    item.style.display = 'none';
  })

  prestasiCarouselItems[prestasiCurrentIndex].style.display = 'flex';
}

function nextSlidePrestasi() {
  prestasiCurrentIndex = (prestasiCurrentIndex + 1) % prestasiCarouselItems.length;
  showSlidePrestasi();
}
function previousSlide() {
  prestasiCurrentIndex = (prestasiCurrentIndex - 1 + prestasiCarouselItems.length) % prestasiCarouselItems.length;
  showSlidePrestasi();
}

function setDisplayAllItemsPrestasi(){
  prestasiCarouselItems.forEach(item => {
    item.style.display = 'flex';
  })
}

function setSlideAuto(){
  if (window.matchMedia('screen and (max-width: 768px)').matches) {
    nextSlidePrestasi();
  }
  else {
    setDisplayAllItemsPrestasi();
  }
  setTimeout(setSlideAuto,2000)
}
setSlideAuto()
