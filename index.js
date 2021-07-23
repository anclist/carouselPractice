/*
    Hiding non-active slides
    
    1) In our 'styles.css', add a new class 'carousel-item-hidden' that is set to display none
    2) Create a new function called 'hideAllSlides'
    3) Inside 'hideAllSlides' use a 'for of loop' to iterate through the slides (each iteration will give you direct access to 'carousel-item')
    4) When inside the 'for of loop', remove the class 'carousel-item-visible' and add the class 'carousel-item-hidden' - all our slides will now be hidden, and inside 'moveToNextSlide' at the end, we add back the slide we want visible!
    5) Call 'hideAllSlides' right away within the function 'moveToNextSlide' - make sure it's before any other code!
*/

const slides = document.getElementsByClassName('carousel-item')
const totalSlides = slides.length

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide)
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide)
const carouselDotsContainer = document.getElementById('carousel-dots')


for (let i = 0; i < totalSlides; i++) {
    let dot = document.createElement('div')
    dot.className = "carousel-dot"
    dot.id = `slide-${i}`
    dot.dataset.index = i
    carouselDotsContainer.appendChild(dot)
}

const firstDot = carouselDotsContainer.firstChild.nextElementSibling
firstDot.classList.add('current-dot')

const dots = document.getElementsByClassName('carousel-dot')

let slidePosition = document.querySelector('.current-dot').dataset.index

function moveToNextSlide() {
    removeClass()
    if (slidePosition == totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }
    console.log(slidePosition)
    dots[slidePosition].classList.toggle("current-dot")
    slides[slidePosition].classList.toggle("carousel-item-visible")
}

function moveToPrevSlide() {
    removeClass()
    if ( slidePosition == 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }
    console.log(slidePosition)
    dots[slidePosition].classList.toggle("current-dot")
    slides[slidePosition].classList.toggle("carousel-item-visible")
}


let carouselDots = document.querySelectorAll('.carousel-dot')

carouselDots.forEach(item => {
    item.addEventListener('click', event => {
      moveSlide(item)
    })
})

function moveSlide(item) {
    removeClass()
    let index = item.dataset.index
    slidePosition = index
    dots[index].classList.toggle("current-dot")
    slides[index].classList.toggle("carousel-item-visible")
    console.log(slidePosition)
}

function removeClass() {
    let currentDot = document.querySelector('.current-dot')
    let currentSlide = document.querySelector('.carousel-item-visible')
    currentDot.classList.toggle(    'current-dot')
    currentSlide.classList.toggle('carousel-item-visible')
}