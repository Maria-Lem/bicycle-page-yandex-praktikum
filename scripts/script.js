const slider = document.querySelector('.slider__slides');
// const track = document.querySelector('.slider__track');
const items = Array.from(document.querySelectorAll('.slide'));
const itemsCount = items.length;
const buttonPrev = document.querySelector('.slider__nav-button_type_prev');
const buttonNext = document.querySelector('.slider__nav-button_type_next');

const slideTitle = document.querySelectorAll('.slide__title');
const slideParagraph = document.querySelectorAll('.slide__paragraph');
const slideIcon = document.querySelectorAll('.slide__icon');

let currentSlide = 0;
let nextSlide = 0;
let counter = 0;
const size = items[1].clientWidth;
console.log(items[items.length - 1])
if (items.slice(-1)) {
  console.log('hi')
}
// items[currentSlide].classList.add('active')
// items[nextSlide + 1].classList.add('active')
// items[currentSlide + 1].classList.add('active')
// slider.style.transform = `translateX(${-size * counter}px)`;

function changeSlide(moveTo, shown) {
    if (moveTo >= items.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = items.length - 1;}

    if (shown >= items.length) {shown = 0;}
    if (shown < 1) {shown = items.length - 1;}
    // console.log(shown)
    // items[currentSlide].classList.remove("active");
    // items[moveTo].classList.toggle("active");
    // items[shown].classList.add("active");
    if (counter >= itemsCount) {
      counter = 0;
    } 
    slider.style.transform = `translateX(${-50 * counter}%)`;
    
    // currentSlide = moveTo;
    // nextSlide = shown;
}

buttonNext.addEventListener('click', () => {
  slider.style.transition = "transform .4s ease-in-out";
  counter++;
  changeSlide();
  // changeSlide((currentSlide + 1), (nextSlide + 1));
});
buttonPrev.addEventListener('click', () => {
  slider.style.transition = "transform .4s ease-in-out";
  counter--;
  changeSlide((currentSlide - 1), (nextSlide - 1));
});

// slider.addEventListener('transitionend', () => {
//   console.log(counter)
//   if (items[counter].id === 'lastClone') {
//       slider.style.transition = "none";
//       counter = slider.length - 1;
//       slider.style.transform = `translateX(${-size * counter}px)`;
//     }
// })

// function changeSlide(shown) {
//   if (shown >= items.length) {shown = 0;}
//   if (shown < 0) {shown = items.length - 1;}
//   console.log(shown + 1)
//   items[currentSlide].classList.remove("active");
//   items[shown].classList.toggle("active");
//   // items[shown + 1].classList.add("active");
  
//   currentSlide = shown;
// }

// let position = 0;
// const slidesToShow = 2;
// const slidesToScroll = 1;
// const itemsCount = items.length;
// const itemWidth = container.clientWidth / slidesToShow;
// const movePosition = slidesToScroll * itemWidth;

// console.log(itemsCount)
// items.forEach((item) => {
//   console.log(item.style.minWidth = `${itemWidth}px`)
//   // item.style.minWidth = `${itemWidth}px`;
// });

// buttonPrev.addEventListener('click', () => {
  
//   position += movePosition;
//   track.style.transform = `translateX(${position}px)`;


// });

// buttonNext.addEventListener('click', () => {
//   // const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
//   console.log(position)

//   position -= movePosition;
//   track.style.transform = `translateX(${position}px)`;

// });


// let counter = 1;

// const size = items[0].clientWidth;
// console.log(-size * counter - 40 * counter)
// // slider.style.transform = `translateX(${-size * counter}px)`;

// buttonNext.addEventListener('click', () => {
//   slider.style.transition = "transform .4s ease-in-out";
//   counter++;
//   slider.style.transform = `translateX(${-size * counter - 40 * counter}px)`;
// });

// buttonPrev.addEventListener('click', () => {
//   slider.style.transition = "transform .4s ease-in-out";
//   counter--;
//   slider.style.transform = `translateX(${-size * counter - 40 * counter}px)`;
// });



// let currentSlide = 0;
// console.log(slides.length)

// function changeSlide(moveTo) {
//   if (moveTo >= slides.length) {
//     // currentSlide = 0;
//     moveTo = 0;
//   }
//   if (moveTo < 0) {
//     // currentSlide = slides.length;
//     moveTo = slides.length - (slides.length - 1);
//   }

//   // for (let i = 0; i < slides.length; i++) {
//   //   slides[i].style.display = "none";
//   // }
//   // slides[currentSlide].style.display = "block";
//   // console.log(moveTo)
//   slides[currentSlide].classList.remove('active');
//   slides[moveTo].classList.add('active');
//   slides[moveTo + 1].classList.add('active');

//   currentSlide = moveTo;
// }

// buttonPrev.addEventListener('click', () => {
//   changeSlide(currentSlide - 1);
// });
// buttonNext.addEventListener('click', () => {
//   changeSlide(currentSlide + 1);
// })