document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let index = 0;
    const totalImages = images.length;

    function updateCarousel() {
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % totalImages;
        updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    // Auto-slide a cada 3 segundos
    setInterval(() => {
        index = (index + 1) % totalImages;
        updateCarousel();
    }, 3000);
});
