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