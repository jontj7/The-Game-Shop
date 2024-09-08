// JavaScript para el carrusel automático

// Selecciona los elementos del carrusel
const slideContainer = document.querySelector('.carousel-slide');
const slides = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Variables para el estado del carrusel
let currentIndex = 0;
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;

// Función para actualizar la posición del carrusel
function updateSlidePosition() {
    slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Función para mostrar el siguiente slide
function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

// Función para mostrar el slide anterior
function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

// Event listeners para los botones
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

// Cambia automáticamente el slide cada 3 segundos
setInterval(showNextSlide, 4500);

// Inicializa la posición del carrusel
updateSlidePosition();
