const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
  const cardFields = document.getElementById('card-fields');

  function toggleCardFields() {
    // Pega o radio selecionado
    const selected = document.querySelector('input[name="paymentMethod"]:checked').id;
    if (selected === 'credit' || selected === 'debit') {
      cardFields.style.display = 'block'; // mostra campos do cartão
      // Marca os campos como obrigatórios
      cardFields.querySelectorAll('input').forEach(input => input.required = true);
    } else {
      cardFields.style.display = 'none'; // esconde campos do cartão
      // Remove obrigatoriedade dos campos do cartão
      cardFields.querySelectorAll('input').forEach(input => input.required = false);
    }
  }

  // Inicializa a exibição correta
  toggleCardFields();

  // Escuta as mudanças dos radios
  paymentRadios.forEach(radio => {
    radio.addEventListener('change', toggleCardFields);
  });

  function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function atualizarTotais() {
    let total = 0;
    document.querySelectorAll('.produto').forEach(produto => {
      const preco = parseFloat(produto.dataset.preco);
      const quantidade = parseInt(produto.querySelector('.quantidade').textContent);
      const subtotal = preco * quantidade;
      produto.querySelector('.subtotal').textContent = `Subtotal: ${formatarMoeda(subtotal)}`;
      total += subtotal;
    });
    document.getElementById('totalGeral').textContent = formatarMoeda(total);
  }

  document.getElementById('resumoPedido').addEventListener('click', function (e) {
    const botaoMais = e.target.closest('.btn-plus');
    const botaoMenos = e.target.closest('.btn-minus');
    const botaoExcluir = e.target.closest('.btn-delete');

    if (botaoMais) {
      const produto = botaoMais.closest('.produto');
      const qtdEl = produto.querySelector('.quantidade');
      qtdEl.textContent = parseInt(qtdEl.textContent) + 1;
      atualizarTotais();
    }

    if (botaoMenos) {
      const produto = botaoMenos.closest('.produto');
      const qtdEl = produto.querySelector('.quantidade');
      let novaQtd = parseInt(qtdEl.textContent) - 1;
      if (novaQtd < 1) novaQtd = 1;
      qtdEl.textContent = novaQtd;
      atualizarTotais();
    }

    if (botaoExcluir) {
      const produto = botaoExcluir.closest('.produto');
      produto.remove();
      atualizarTotais();
    }
  });

  // Atualiza os totais ao carregar
  atualizarTotais();
  
  