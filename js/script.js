document.addEventListener("DOMContentLoaded", function () {
    // =======================
    // Carrossel de Eventos
    // =======================
    const carousel = document.querySelector('.carousel-eventos');
    const prevBtn = document.querySelector('.event-prev');
    const nextBtn = document.querySelector('.event-next');
    const totalItems = document.querySelectorAll('.carousel-eventos img').length;
    const itemsPerView = 3;
    let currentIndex = 0;
  
    function updateCarousel() {
      const shift = currentIndex * (100 / itemsPerView);
      carousel.style.transform = `translateX(-${shift}%)`;
    }
  
    nextBtn.addEventListener('click', () => {
      const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
      }
    }); // <- Corrigido aqui!
  
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
    // =======================
    // Botão Ver Mais / Ver Menos
    // =======================
    const verMaisBtn = document.getElementById('verMaisBtn');
    const materiaisExtras = document.getElementById('materiaisExtras');
  
    verMaisBtn.addEventListener('click', () => {
      const estaVisivel = materiaisExtras.style.display === 'flex' || materiaisExtras.style.display === 'block';
  
      materiaisExtras.style.display = estaVisivel ? 'none' : 'flex';
      verMaisBtn.textContent = estaVisivel ? 'Ver Mais' : 'Ver Menos';
    });
  });

  function mudarSlide(direction, carrousel) {
    const slides = carrousel.querySelectorAll('.slide');
    let currentIndex = -1;
    
    // Encontra o slide ativo
    slides.forEach((slide, index) => {
        if (slide.classList.contains('ativo')) {
            currentIndex = index;
            slide.classList.remove('ativo');
        }
    });
    
    // Calcula o novo índice
    let newIndex = currentIndex + direction;
    
    // Verifica os limites
    if (newIndex >= slides.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = slides.length - 1;
    }
    
    // Mostra o novo slide
    slides[newIndex].classList.add('ativo');
}

// Configura os eventos de clique
document.querySelectorAll('.carrossel .prev').forEach(btn => {
    btn.addEventListener('click', function() {
        mudarSlide(-1, this.closest('.carrossel'));
    });
});

document.querySelectorAll('.carrossel .next').forEach(btn => {
    btn.addEventListener('click', function() {
        mudarSlide(1, this.closest('.carrossel'));
    });
});