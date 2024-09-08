let currentIndex = 0;
const slides = document.querySelector('.carousel-slide');
const totalItems = document.querySelectorAll('.carousel-item').length;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}
