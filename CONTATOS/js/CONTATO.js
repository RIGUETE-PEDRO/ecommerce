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

    // Opcional: Limpa o formulário após o envio
    form.reset();
  });
});

