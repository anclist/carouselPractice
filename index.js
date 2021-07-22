/*
    Hiding non-active slides
    
    1) In our 'styles.css', add a new class 'carousel-item-hidden' that is set to display none
    2) Create a new function called 'hideAllSlides'
    3) Inside 'hideAllSlides' use a 'for of loop' to iterate through the slides (each iteration will give you direct access to 'carousel-item')
    4) When inside the 'for of loop', remove the class 'carousel-item-visible' and add the class 'carousel-item-hidden' - all our slides will now be hidden, and inside 'moveToNextSlide' at the end, we add back the slide we want visible!
    5) Call 'hideAllSlides' right away within the function 'moveToNextSlide' - make sure it's before any other code!
*/

const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0
const totalSlides = slides.length

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide)
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide)
const carouselDots = document.getElementById('carousel-dots')

let carouselDot = `<div class="carousel-dot current-dot"></div>`


for (let i = 0; i < totalSlides - 1; i++) {
    carouselDot += ` <div class="carousel-dot"></div>`
}

carouselDots.innerHTML = carouselDot
const dots = document.getElementsByClassName('carousel-dot')



function moveToNextSlide() {
    dots[slidePosition].classList.toggle("current-dot")
    slides[slidePosition].classList.toggle("carousel-item-visible")
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }
    dots[slidePosition].classList.toggle("current-dot")
    slides[slidePosition].classList.toggle("carousel-item-visible")
}

function moveToPrevSlide() {
    dots[slidePosition].classList.toggle("current-dot")
    slides[slidePosition].classList.toggle("carousel-item-visible")
    if ( slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }
    dots[slidePosition].classList.toggle("current-dot")
    slides[slidePosition].classList.toggle("carousel-item-visible")
}