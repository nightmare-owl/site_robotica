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
    
})

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContato");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Captura os valores dos campos
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const assunto = document.getElementById("assunto").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validação dos campos
        if (!validarFormulario(nome, email, assunto, mensagem)) {
            return;
        }

        // Simula o envio do formulário (Aqui você pode integrar com um backend)
        alert("Mensagem enviada com sucesso!");

        // Reset do formulário após o envio
        form.reset();
    });

    // Função para validar o formulário
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

    // Função para validar o e-mail com regex
    function validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    const verMaisBtn = document.getElementById('verMaisBtn');
  const materiaisExtras = document.getElementById('materiaisExtras');

  verMaisBtn.addEventListener('click', () => {
    const estaVisivel = materiaisExtras.style.display === 'flex' || materiaisExtras.style.display === 'block';

    materiaisExtras.style.display = estaVisivel ? 'none' : 'flex';
    verMaisBtn.textContent = estaVisivel ? 'Ver Mais' : 'Ver Menos';
  });

});

  