function initSlider({ slidesContainerId, prevBtnId, nextBtnId }) {
    const slidesContainer = document.getElementById(slidesContainerId);
    if (!slidesContainer) return;

    const slides = slidesContainer.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

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

    const prevButton = document.getElementById(prevBtnId);
    const nextButton = document.getElementById(nextBtnId);

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    }

    showSlide(0);
}

initSlider({ slidesContainerId: 'HomeSlides', prevBtnId: 'home-prev', nextBtnId: 'home-next' });
initSlider({ slidesContainerId: 'ProjSlides', prevBtnId: 'proj-prev', nextBtnId: 'proj-next' });
initSlider({ slidesContainerId: 'InternSlides', prevBtnId: 'intern-prev', nextBtnId: 'intern-next' });