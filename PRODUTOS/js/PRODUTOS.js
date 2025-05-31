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
