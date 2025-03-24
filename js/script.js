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
    // =======================
    // Validação do Formulário
    // =======================
    const form = document.getElementById("formContato");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const assunto = document.getElementById("assunto").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();
  
      if (!validarFormulario(nome, email, assunto, mensagem)) {
        return;
      }
  
      alert("Mensagem enviada com sucesso!");
      form.reset();
    });
  
    function validarFormulario(nome, email, assunto, mensagem) {
      if (nome === "" || email === "" || assunto === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return false;
      }
  
      if (!validarEmail(email)) {
        alert("Por favor, insira um e-mail válido!");
        return false;
      }
  
      return true;
    }
  
    function validarEmail(email) {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regexEmail.test(email);
    }
  
    
   
  