document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length;
    let index = 0;

    function updateCarousel() {
        const offset = index * -35; // Move os slides para a esquerda
        carousel.style.transform = `translateX(${offset}%)`;

        // Aplica efeito de desfoque e tamanho nas imagens
        images.forEach((img, i) => {
            if (i === index + 1) {
                img.style.filter = "none";
                img.style.transform = "scale(1)";
            } else {
                img.style.filter = "blur(3px)";
                img.style.transform = "scale(0.9)";
            }
        });
    }

    document.querySelector(".prev-btn").addEventListener("click", function () {
        index = (index > 0) ? index - 1 : totalImages - 3;
        updateCarousel();
    });

    document.querySelector(".next-btn").addEventListener("click", function () {
        index = (index < totalImages - 3) ? index + 1 : 0;
        updateCarousel();
    });

    updateCarousel();
    
    document.getElementById("formContato").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
        document.getElementById("formContato").reset();
    });
</script>
});
