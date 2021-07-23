
// Grab the elements form the page
const slides = document.getElementsByClassName('carousel-item')
const totalSlides = slides.length
document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide)
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide)
const carouselDotsContainer = document.getElementById('carousel-dots')

// Create the dot elements and add them to the page, based on the number of images
for (let i = 0; i < totalSlides; i++) {
    let dot = document.createElement('div')
    dot.className = "carousel-dot"
    dot.id = `slide-${i}`
    dot.dataset.index = i
    carouselDotsContainer.appendChild(dot)
}

// Assing the current slide and current dot classes to the first element of the image collection and the dot collection
const firstDot = carouselDotsContainer.firstChild.nextElementSibling
firstDot.classList.add('current-dot')
const dots = document.getElementsByClassName('carousel-dot')

// Set the slider position as the index of the first dot based on the dataset created on line 14
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
    currentDot.classList.toggle('current-dot')
    currentSlide.classList.toggle('carousel-item-visible')
}