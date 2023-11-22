function showSlide(card,dpl) {
  card.items.forEach(item => {
    item.style.display = 'none';
  })

  card.items[card.index].style.display = dpl;
}

function nextSlide(card,dpl) {
  card.index = (card.index + 1) % card.items.length;
  showSlide(card,dpl);
}
function previousSlide(card,dpl) {
  card.index = (card.index - 1 + card.items.length) % card.items.length;
  showSlide(card,dpl);
}
function allslide(card,dpl){
  card.items.forEach(item => {
    item.style.display = dpl;
  })
}
const carousel = [
  {
    items: document.querySelectorAll('.carousel-item'),
    index: 0
  },
  {
    items: document.querySelectorAll('.carousel-item-auto'),
    index: 0
  }
]

document.querySelector('.nextBtn').addEventListener('click', ()=>{
  nextSlide(carousel[0],'block')
})
document.querySelector('.prevBtn').addEventListener('click', ()=>{
  previousSlide(carousel[0],'block')
});

showSlide(carousel[0],'block');

function asdf(){
  if (window.matchMedia('screen and (max-width: 768px)').matches) {
    nextSlide(carousel[1],'flex');
  }
  else {
    allslide(carousel[1],'flex');
  }

  setTimeout(asdf,2000)
}
asdf()