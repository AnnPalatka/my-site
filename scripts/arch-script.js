const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slideIndex = 0;

function showSlides() {
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function nextSlide() {
    if (slideIndex < slides.children.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlides();
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = slides.children.length - 1;
    }
    showSlides();
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Автоматическая прокрутка
setInterval(nextSlide, 5000); // Прокрутка каждые 5 секунд