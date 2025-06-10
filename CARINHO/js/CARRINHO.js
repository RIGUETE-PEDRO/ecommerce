// Gerencia o carrinho, atualizando quantidades, subtotais e total geral, com eventos para aumentar, diminuir e remover itens.
function atualizarTotais() {
    let total = 0;
    document.querySelectorAll('.produto').forEach(produto => {
        const preco = parseFloat(produto.getAttribute('data-preco'));
        const qtd = parseInt(produto.querySelector('.quantidade').textContent);
        const subtotal = preco * qtd;
        produto.querySelector('.subtotal').textContent = `Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        total += subtotal;
    });
    document.getElementById('totalGeral').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    // #totalGeral acho.
}

document.querySelectorAll('.btn-plus').forEach(btn => {
    btn.addEventListener('click', () => {
        const qtdEl = btn.parentElement.querySelector('.quantidade');
        qtdEl.textContent = parseInt(qtdEl.textContent) + 1;
        atualizarTotais();
    });
});

document.querySelectorAll('.btn-minus').forEach(btn => {
    btn.addEventListener('click', () => {
        const qtdEl = btn.parentElement.querySelector('.quantidade');
        let atual = parseInt(qtdEl.textContent);
        if (atual > 1) {
            qtdEl.textContent = atual - 1;
            atualizarTotais();
        }
    });
});

document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.produto').remove();
        atualizarTotais();
    });
});

// Atualiza totais ao carregar
document.addEventListener('DOMContentLoaded', atualizarTotais);





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