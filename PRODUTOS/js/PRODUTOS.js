// Configura os botões 'Adquirir' para exibir o toast de notificação e atualizar o contador do carrinho.
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os botões "Comprar"
  const buyButtons = document.querySelectorAll(".btn-comprar");
  // Seleciona o elemento do toast
  const toastElement = document.getElementById("liveToast");
  // Inicializa ou pega a instância do toast do Bootstrap
  const toastInstance = bootstrap.Toast.getOrCreateInstance(toastElement);
  // Seleciona o contador do carrinho
  const cartBadge = document.querySelector(".cart-badge");

  buyButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Previne a ação padrão do link

      // Exibe a notificação (toast)
      toastInstance.show();

      // Atualiza o contador do carrinho
      let currentCount = parseInt(cartBadge.innerText) || 0;
      currentCount += 1;
      cartBadge.innerText = currentCount;

      // Opcional: Salva o novo valor no localStorage para persistir em recarregamentos
      // localStorage.setItem('cartCount', currentCount);
    });
  });
});

// Valida o formulário de newsletter, verificando o formato do e-mail e exibindo mensagens de feedback ao usuário.
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
