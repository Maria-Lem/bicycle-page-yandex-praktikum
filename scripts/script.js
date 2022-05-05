const slider = document.querySelector('.slider__slides');
const items = Array.from(document.querySelectorAll('.slide'));
const itemsCount = items.length;
const buttonPrev = document.querySelector('.slider__nav-button_type_prev');
const buttonNext = document.querySelector('.slider__nav-button_type_next');

const slideTitle = document.querySelectorAll('.slide__title');
const slideParagraph = document.querySelectorAll('.slide__paragraph');
const slideIcon = document.querySelectorAll('.slide__icon');

let currentSlide = 0;
let counter = 0;

function addActive(slideElement) {
  slideElement.classList.add("active");
}

function removeActive(slideElement) {
  slideElement.classList.remove("active");
}

addActive(slideTitle[currentSlide]);
addActive(slideParagraph[currentSlide]);
addActive(slideIcon[currentSlide]);

// slideTitle[currentSlide].classList.add("active");
// slideParagraph[currentSlide].classList.add("active");
// slideIcon[currentSlide].classList.add("active");

function changeSlide(moveTo) {
  if (moveTo >= items.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = items.length - 1;
  }

  removeActive(slideTitle[currentSlide]);
  removeActive(slideParagraph[currentSlide]);
  removeActive(slideIcon[currentSlide]);

  addActive(slideTitle[moveTo]);
  addActive(slideParagraph[moveTo]);
  addActive(slideIcon[moveTo]);

  if (counter >= itemsCount) {
    counter = 0
    // slider.style.transition = "none";
    // counter = slider.length - counter;
    // slider.style.transform = `translateX(${-50 * counter}%)`;
  }

  if (counter < 0) {
    counter = items.length - 1;
  }

  slider.style.transform = `translateX(${-50 * counter}%)`;

  currentSlide = moveTo;
}

buttonNext.addEventListener('click', () => {
  slider.style.transition = "transform .4s ease-in-out";
  counter++;
  changeSlide((currentSlide + 1));
  // if (counter >= itemsCount) {
  //   console.log('hi')
  //   counter = 0;
  //   changeSlide(currentSlide[counter])
  //     // slider.style.transition = "none";
  //     // counter = slider.length - counter;
  //     // slider.style.transform = `translateX(${-50 * counter}%)`;
  //   } 

});
buttonPrev.addEventListener('click', () => {
  slider.style.transition = "transform .4s ease-in-out";
  counter--;
  changeSlide((currentSlide - 1));
});