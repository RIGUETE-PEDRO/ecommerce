console.log('Script carregado com sucesso!');

    const produtos = [
        { id: 1, nome: 'Creme Facial Rosa Mosqueta', preco: 59.99, qtd: 1, imagem: '../../img/imgProd/especial1.png' },
        { id: 2, nome: 'Sérum Iluminador Raízes', preco: 30.00, qtd: 2, imagem: '../../img/imgProd/especial2.png' }
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
                    <img src="${p.imagem}" alt="${p.nome}" class="imagem-direita">
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

    document.addEventListener("DOMContentLoaded", renderCarrinho);



 function toggleCamposCartao(valor) {
  const containerCartao = document.getElementById('cartao-container');
  const botaoBoleto = document.getElementById('botao-boleto');
  const containerPix = document.getElementById('pix-container'); // container para QR PIX

  if (valor === 'cartao' || valor === 'debito') {
    containerCartao.style.display = 'block';
    botaoBoleto.style.display = 'none';
    containerPix.style.display = 'none';
  } else {
    containerCartao.style.display = 'none';
  }

  if (valor === 'boleto') {
    botaoBoleto.style.display = 'block';
    containerPix.style.display = 'none';
  } else {
    botaoBoleto.style.display = 'none';
  }

  if (valor === 'pix') {
    containerPix.style.display = 'block';
    gerarPixQRCode();  // chama função para gerar QR PIX
    botaoBoleto.style.display = 'none';
    containerCartao.style.display = 'none';
  } else if (valor !== 'cartao' && valor !== 'debito' && valor !== 'boleto') {
    // Se não for nenhuma opção acima, esconde containerPix só para garantir
    containerPix.style.display = 'none';
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

// Script para gerenciar o carrinho de compras


    
    document.addEventListener("DOMContentLoaded", renderCarrinho);


document.getElementById('gerar-boleto').addEventListener('click', function() {
  // Link para o arquivo PDF
  const boletoUrl = 'exemplos/boleto-exemplo.pdf';

  // Cria um link temporário para download
  const link = document.createElement('a');
  link.href = boletoUrl;
  link.download = 'boleto-exemplo.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
async function gerarBoletoPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const nome = document.getElementById("nome").value;
  const total = document.getElementById("total-geral").innerText.trim().replace("R$", "").trim();
  const cpf = document.getElementById("cpf").value;

  const dataEmissao = new Date();
  const dataVencimento = new Date();
  dataVencimento.setDate(dataEmissao.getDate() + 10);

  // Simulando linha digitável (você pode gerar uma real se quiser)
  const linhaDigitavel = "12345.67890 12345.67890 12345.67890 12345678901234567890";

  // Gerar código de barras no canvas oculto
  JsBarcode("#barcodeCanvas", linhaDigitavel, {
    format: "CODE128",
    width: 2,
    height: 50,
    displayValue: false,
    margin: 0,
  });

  const canvas = document.getElementById("barcodeCanvas");
  const barcodeImage = canvas.toDataURL("image/png");

  // Gerar PDF
  doc.setFontSize(16);
  doc.text("Boleto Bancário - EcoBelle", 20, 20);

  doc.setFontSize(12);
  doc.text(`Nome do Cliente: ${nome}`, 20, 40);
  doc.text(`CPF: ${cpf}`, 20, 50);
  doc.text(`Valor a Pagar: R$ ${total}`, 20, 60);
  doc.text("Vencimento: " + dataVencimento.toLocaleDateString(), 20, 70);

  doc.text("Banco: EcoBelle Bank", 20, 90);
  doc.text("Agência: 1234", 20, 100);
  doc.text("Conta: 56789-0", 20, 110);


  // Inserir código de barras no PDF
 

  doc.text("Data de Emissão: " + dataEmissao.toLocaleDateString(), 20, 150);
  doc.text("Instruções: Pagar até a data de vencimento", 20, 160);

  doc.text("Beneficiário: EcoBelle Produtos Naturais", 20, 180);
  doc.text("CNPJ: 12.345.678/0001-90", 20, 190);
  doc.text("Endereço: Rua das Flores, 123 - Jardim Botânico", 20, 200);
  doc.text("Cidade: SÃO PAULO - SP", 20, 210);
  doc.text("CEP: 12345-678", 20, 220);

  doc.text("Linha Digitável:", 20, 230);
  doc.text(linhaDigitavel, 20, 240);
  doc.addImage(barcodeImage, "PNG", 20, 250, 170, 30); // (x, y, width, height)

  doc.save("boleto-ecobelle.pdf");
}

 
 function gerarPixQRCode() {
  const pixData = "00020126360014BR.GOV.BCB.PIX0136your-pix-key-here52040000530398654051005005802BR5909Nome do Benef6009Cidade XYZ62070503***6304"; // substitua pelo seu payload PIX real

  const qrcodeContainer = document.getElementById('pix-container');
  qrcodeContainer.innerHTML = ""; // limpa QR anterior

  new QRCode(qrcodeContainer, {
    text: pixData,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}
