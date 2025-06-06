 const text = "Produtos mais vendidos!!";
  const element = document.getElementById("typed-text");
  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    let currentText = text.substring(0, index);
    element.innerHTML = currentText + '<span class="cursor">|</span>';

    if (!isDeleting) {
      if (index < text.length) {
        index++;
        setTimeout(typeEffect, 200); // velocidade ao escrever
      } else {
        isDeleting = true;
        setTimeout(typeEffect, 2000); // pausa antes de apagar
      }
    } else {
      if (index > 0) {
        index--;
        setTimeout(typeEffect, 100); // velocidade ao apagar
      } else {
        isDeleting = false;
        setTimeout(typeEffect, 500); // pausa antes de recomeçar
      }
    }
  }

  typeEffect();

  const preco = document.getElementById('preco');
  const valor = document.getElementById('valorPreco');

  function atualizarPreco() {
    valor.textContent = `R$ ${preco.value}`;
  }

  // Atualiza o valor ao carregar a página
  window.addEventListener('DOMContentLoaded', atualizarPreco);




// mensagem de confirmaçao do Newsletter (geral)
  
  document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("newsletter1");
    const confirmarBtn = document.getElementById("confirmarEmail");

    confirmarBtn.addEventListener("click", function () {
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email === "") {
        alert("Por favor, digite seu e-mail.");
      } else if (!emailRegex.test(email)) {
        alert("E-mail inválido. Tente novamente.");
      } else {
        alert("E-mail cadastrado com sucesso! 🌱✨");
        emailInput.value = "";
      }
    });
  });

