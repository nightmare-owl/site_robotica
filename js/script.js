document.addEventListener("DOMContentLoaded", function() {
  // =======================
  // Menu Mobile
  // =======================
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function() {
          navLinks.classList.toggle('active');
          this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
      });
  }

  // Fechar menu ao clicar em um link
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              menuToggle.textContent = '☰';
          }
      });
  });

  // =======================
  // Carrossel de Eventos (Responsivo)
  // =======================
  const carouselEventos = document.querySelector('.carousel-eventos');
  const prevBtnEventos = document.querySelector('.event-prev');
  const nextBtnEventos = document.querySelector('.event-next');
  const eventosItems = document.querySelectorAll('.carousel-eventos img');
  
  let itemsPerView = 3; // Padrão para desktop
  let currentIndexEventos = 0;
  
  function updateItemsPerView() {
      if (window.innerWidth <= 768) {
          itemsPerView = 2; // Tablet
      } 
      if (window.innerWidth <= 576) {
          itemsPerView = 1; // Celular
      }
  }
  
  function updateCarouselEventos() {
      const shift = currentIndexEventos * (100 / itemsPerView);
      carouselEventos.style.transform = `translateX(-${shift}%)`;
  }
  
  if (nextBtnEventos) {
      nextBtnEventos.addEventListener('click', () => {
          updateItemsPerView();
          const maxIndex = Math.ceil(eventosItems.length / itemsPerView) - 1;
          if (currentIndexEventos < maxIndex) {
              currentIndexEventos++;
              updateCarouselEventos();
          }
      });
  }
  
  if (prevBtnEventos) {
      prevBtnEventos.addEventListener('click', () => {
          if (currentIndexEventos > 0) {
              currentIndexEventos--;
              updateCarouselEventos();
          }
      });
  }
  
  // Atualiza na mudança de tamanho da tela
  window.addEventListener('resize', function() {
      updateItemsPerView();
      updateCarouselEventos();
  });
  
  // Inicializa
  updateItemsPerView();
  updateCarouselEventos();
  
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

  // CARROSSEL PROJETOS

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