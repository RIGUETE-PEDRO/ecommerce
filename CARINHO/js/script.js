// Seleciona elementos do DOM
function toggleCamposCartao(value) {
  const cartaoContainer = document.getElementById('cartao-container');
  if (value === 'cartao' || value === 'debito') {
    cartaoContainer.style.display = 'block';
  } else {
    cartaoContainer.style.display = 'none';
  }
}

const cardBox = document.querySelector('.card-content'); // container que será rotacionado
const btnSubmit = document.querySelector('#input-submit');

const inputNumber = document.querySelector('#input-number');
const inputName = document.querySelector('#input-name');
const inputValidate = document.querySelector('#input-validate');
const inputCvv = document.querySelector('#input-cvv');

const cardViewNumber = document.querySelector('#card-user-number');
const cardViewName = document.querySelector('#card-user-name');
const cardViewDate = document.querySelector('#card-user-date');
const cardViewCvv = document.querySelector('.card-back .cvv'); // Verso do cartão

// Formata número do cartão com espaços
function formatCardNumber(value) {
  return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
}

function handleNumber(e) {
  let value = e.target.value;
  value = formatCardNumber(value);
  e.target.value = value;
  cardViewNumber.textContent = value || '•••• •••• •••• ••••';
}

function handleName(e) {
  let value = e.target.value.toUpperCase();
  cardViewName.textContent = value || '(Seu nome)';
}

function handleValidate(e) {
  let value = e.target.value;
  value = value.replace(/[^\d\/]/g, '');
  if (value.length === 2 && !value.includes('/')) {
    value += '/';
  }
  e.target.value = value;
  cardViewDate.textContent = value || '••/••';
}

function handleCvv(e) {
  let value = e.target.value.replace(/\D/g, '').slice(0, 3);
  e.target.value = value;
  cardViewCvv.textContent = value || '•••';
}

// Rotaciona cartão ao focar/desfocar no CVV
inputCvv.addEventListener('focus', () => {
  cardBox.classList.add('rotate');
});

inputCvv.addEventListener('blur', () => {
  cardBox.classList.remove('rotate');
});

// Validação simples para habilitar botão
function canSubmit() {
  const isValidNumber = inputNumber.value.replace(/\s/g, '').length === 16;
  const isValidName = inputName.value.trim().length > 0;
  const isValidDate = /^(\d{2})\/(\d{2,4})$/.test(inputValidate.value);
  const isValidCvv = inputCvv.value.length === 3;

  btnSubmit.disabled = !(isValidNumber && isValidName && isValidDate && isValidCvv);
}

// Atualiza visual e valida botão ao digitar
inputNumber.addEventListener('input', e => {
  handleNumber(e);
  canSubmit();
});
inputName.addEventListener('input', e => {
  handleName(e);
  canSubmit();
});
inputValidate.addEventListener('input', e => {
  handleValidate(e);
  canSubmit();
});
inputCvv.addEventListener('input', e => {
  handleCvv(e);
  canSubmit();
});

// Inicializa botão
canSubmit();


    const produtos = [
        { id: 1, nome: 'Creme Facial Rosa Mosqueta', preco: 149.90, qtd: 1, imagem: '../../img/imgProd/especial1.png' },
        { id: 2, nome: 'Sérum Iluminador Raízes', preco: 89.90, qtd: 2, imagem: '../../img/imgProd/especial2.png' }
    ];

    function renderCarrinho() {
        const carrinho = document.getElementById('carrinho');
        const totalGeral = document.getElementById('total-geral');
        carrinho.innerHTML = '';
        let total = 0;

        produtos.forEach((p, index) => {
            const subtotal = p.qtd * p.preco;
            total += subtotal;

            carrinho.innerHTML += `
                <div class="item-carrinho">
                    <img src="${p.imagem}" alt="${p.nome}">
                    <div class="info-produto">
                        <div class="nome-produto">${p.nome}</div>
                        <div class="controles">
                            <button onclick="alterarQtd(${index}, -1)">−</button>
                            <span>${p.qtd}</span>
                            <button onclick="alterarQtd(${index}, 1)">+</button>
                        </div>
                    </div>
                    <div class="preco">R$ ${subtotal.toFixed(2)}</div>
                    <button class="remover" onclick="removerProduto(${index})">X</button>
                </div>
            `;
        });

        totalGeral.innerText = total.toFixed(2);
    }

    function alterarQtd(index, delta) {
        produtos[index].qtd += delta;
        if (produtos[index].qtd < 1) produtos[index].qtd = 1;
        renderCarrinho();
    }

    function removerProduto(index) {
        produtos.splice(index, 1);
        renderCarrinho();
    }

    window.onload = renderCarrinho;

