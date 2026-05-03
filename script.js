// filepath: script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesContainer = document.getElementById('HomeSlides');

function showSlide(index) {
    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.getElementById('prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

document.getElementById('next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Initialize
showSlide(0);