function revealOnScroll() {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


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


  // falta replicar nos outros. so estou deixando aqui por enquanto pois tem que ver se tu acha que ta certo
