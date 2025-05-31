const swiper = new Swiper('.swiper', {
  slidesPerView: 3,       // Quantos slides aparecem ao mesmo tempo
  spaceBetween: 20,       // Espaçamento entre os slides (em px)
  loop: true,             // Para o carrossel rodar infinitamente
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 2, spaceBetween: 15 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
  },
});

document.addEventListener('DOMContentLoaded', function() {
  const btnApplyFilters = document.querySelector('.offcanvas-body .btn-primary');

  btnApplyFilters.addEventListener('click', function(e) {
    e.preventDefault(); // Evita o comportamento padrão

    // Coleta os filtros de categorias
    let categoriasSelecionadas = [];
    const checkboxes = document.querySelectorAll('.offcanvas-body .form-check-input');
    checkboxes.forEach(function(checkbox) {
      // Pega apenas as categorias (você pode checar pelo id que inicia com "categoria")
      if (checkbox.checked && checkbox.id.includes("categoria")) {
        categoriasSelecionadas.push(checkbox.nextElementSibling.innerText);
      }
    });

    // Coleta os valores de preço mínimo e máximo
    let precoMinimo = document.getElementById('precoMin').value;
    let precoMaximo = document.getElementById('precoMax').value;

    // Coleta o valor do filtro de frete grátis
    let freteGratis = document.getElementById('freteGratis').checked;

    // Exibe os valores no console (ou implemente a lógica de filtragem necessária)
    console.log("Categorias selecionadas:", categoriasSelecionadas);
    console.log("Preço Mínimo:", precoMinimo);
    console.log("Preço Máximo:", precoMaximo);
    console.log("Frete Grátis:", freteGratis);

    // Exemplo com alerta para visualização rápida
    alert(
      "Filtros Aplicados:\n" +
      "Categorias: " + (categoriasSelecionadas.length > 0 ? categoriasSelecionadas.join(", ") : "Nenhuma") + "\n" +
      "Preço: R$ " + (precoMinimo || "0") + " - R$ " + (precoMaximo || "∞") + "\n" +
      "Frete Grátis: " + (freteGratis ? "Sim" : "Não")
    );

    // Opcional: Fecha o painel offcanvas após aplicar os filtros
    const offcanvasElement = document.getElementById('offcanvasFiltro');
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }
  });
});
