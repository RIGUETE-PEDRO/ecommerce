// Valida o formulário de newsletter ao clicar no botão, verificando o formato do e-mail e exibindo mensagens de feedback ao usuário.
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
