function showSlide(card,display) {
  card.items.forEach(item => {
    item.style.display = 'none';
  })

  card.items[card.index].style.display = display;
}

function nextSlide(card,display) {
  card.index = (card.index + 1) % card.items.length;
  showSlide(card,display);
}
function previousSlide(card,display) {
  card.index = (card.index - 1 + card.items.length) % card.items.length;
  showSlide(card,display);
}
function allslide(card,display){
  card.items.forEach(item => {
    item.style.display = display;
  })
}
const component = {
  // sliderHeroVer1 : {
  //   items: document.querySelectorAll('.carousel-item'),
  //   index: 0
  // },
  sliderHeroVer2 : {
    items: document.querySelectorAll('.carousel-item'),
    index: 0
  },
  sliderPrestasi : {
    items: document.querySelectorAll('.carousel-item-auto'),
    index: 0
  }
}

// document.querySelector('.nextBtn').addEventListener('click', ()=>{
//   nextSlide(component.sliderHeroVer1,'block')
// })
// document.querySelector('.prevBtn').addEventListener('click', ()=>{
//   previousSlide(component.sliderHeroVer1,'block')
// });
// showSlide(component.sliderHeroVer1,'block');


function asdf(){
  if (window.matchMedia('screen and (max-width: 768px)').matches) {
    nextSlide(component.sliderPrestasi,'flex');
  }
  else {
    allslide(component.sliderPrestasi,'flex');
  }

  setTimeout(asdf,2000)
}
asdf()


function showSlideVer2(card,cardHide) {
  card.items.forEach(item => {
    item.classList.remove('lebar')
    item.classList.remove('hide')
  })
  card.items[card.index].classList.add('lebar')
  card.items[cardHide].classList.add('hide')
}

function nextSlideVer2(card) {
  card.index = (card.index + 1) % card.items.length;
  cardHide = (card.index + 2) % card.items.length;
  showSlideVer2(card,cardHide)

  slideGaris(card.index)
}
function previousSlideVer2(card) {
  card.index = (card.index - 1 + card.items.length) % card.items.length;
  cardHide = (card.index - 2 + card.items.length) % card.items.length;
  showSlideVer2(card,cardHide)

  slideGaris(card.index)
}

const btnnextver2 = document.querySelector('.nextBtn')
const btnpreviousver2 = document.querySelector('.prevBtn')
const garis = document.querySelector('.garis-carousel')

function delay(btn) {
  btn.disabled = true;
  setTimeout(() => {
    btn.disabled = false;
  }, 1000);
}

function slideGaris(index){
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


btnnextver2.addEventListener('click', ()=>{
  delay(btnnextver2)
  nextSlideVer2(component.sliderHeroVer2)
})
btnpreviousver2.addEventListener('click', ()=>{
  delay(btnpreviousver2)
  previousSlideVer2(component.sliderHeroVer2)
});