document.addEventListener('DOMContentLoaded', function() {
  // Seleciona todos os botões "Comprar"
  const buyButtons = document.querySelectorAll('.btn-comprar');
  // Seleciona o elemento do toast
  const toastElement = document.getElementById('liveToast');
  // Inicializa ou pega a instância do toast do Bootstrap
  const toastInstance = bootstrap.Toast.getOrCreateInstance(toastElement);
  // Seleciona o contador do carrinho
  const cartBadge = document.querySelector('.cart-badge');

  // Opcional: Se quiser manter o estado, use localStorage
  // let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
  // cartBadge.innerText = cartCount;

  buyButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
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
// Espera todo o conteúdo da página carregar antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

  // Seleciona TODOS os botões de "Adquirir" da página
  const botoesAdquirir = document.querySelectorAll('.js-add-to-cart');

  // Cria um carrinho de compras "virtual" (um array vazio)
  const carrinho = [];

  // Para cada botão encontrado, adiciona a funcionalidade de clique
  botoesAdquirir.forEach(botao => {
    botao.addEventListener('click', function(event) {
      
      // 1. Previne o comportamento padrão do link (que seria recarregar a página)
      event.preventDefault();

      // 2. Encontra o 'card' pai do botão que foi clicado
      const card = event.target.closest('.product-card');

      // 3. Pega os dados do produto que armazenamos nos atributos data-*
      const produto = {
        id: card.dataset.productId,
        nome: card.dataset.productName,
        preco: parseFloat(card.dataset.productPrice) // Converte o preço para número
      };
      
      // 4. Adiciona o produto ao nosso carrinho virtual
      carrinho.push(produto);

      // 5. Dá um feedback visual para o usuário
      console.log('Carrinho atual:', carrinho); // Mostra o carrinho no console do navegador
      alert(`"${produto.nome}" foi adicionado ao seu carrinho!`);

      // Aqui você poderia chamar outras funções, como atualizar o ícone do carrinho no menu
      // ex: atualizarContadorCarrinho(carrinho.length);
    });
  });

});

  // Seleciona o botão na página
        const botaoAnimado = document.querySelector('.btn-adquirir-animado');

        // Adiciona um "ouvinte" para o evento de clique
        botaoAnimado.addEventListener('click', function(event) {
            // Previne o comportamento padrão do link (de recarregar a página)
            event.preventDefault();

            // Se o botão já estiver animando, não faz nada para evitar cliques múltiplos
            if (this.classList.contains('clicado')) {
                return;
            }

            // 1. Adiciona a classe 'clicado' para iniciar a animação CSS
            this.classList.add('clicado');

            // 2. Após 800 milissegundos (a duração da animação), remove a classe
            // para que o botão possa ser animado novamente em um futuro clique.
            setTimeout(() => {
                this.classList.remove('clicado');
                
                // Aqui você pode adicionar a lógica real do seu site
                // Por exemplo, adicionar o item ao carrinho de verdade.
                console.log('Animação concluída. Item adicionado (simulado)!');
                
            }, 800);
        });