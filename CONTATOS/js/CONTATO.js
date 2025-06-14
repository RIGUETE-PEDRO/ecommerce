// Valida o formulário de contato, coletando dados dos campos, exibindo feedback e resetando o formulário após envio.
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita a ação padrão do formulário

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibe os dados no console para debugging
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Assunto:", assunto);
    console.log("Mensagem:", mensagem);

    // Feedback simples para o usuário
    alert("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.");

    
    form.reset();
  });
});




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