# EcoBelle 🛍️

### Uma loja de e-commerce moderna e responsiva, focada em produtos de beleza e moda, com uma experiência de usuário interativa.


###  Funcionalidades Principais

Este projeto foi desenvolvido com diversas funcionalidades modernas para criar uma experiência de compra agradável:

-   **Design Responsivo:** O layout se adapta perfeitamente a telas de desktops, tablets e celulares (com o grid do Bootstrap e Media Queries).
-   **Cards de Produto Interativos:** Efeitos de *hover* que elevam o card e dão zoom na imagem do produto.
-   **Botões de Ação Personalizados:** Botões com gradientes, animações e ícones para uma chamada de ação (CTA) mais eficaz.
-   **Animação de "Adicionar ao Carrinho":** Feedback visual instantâneo com um carrinho que "corre" sobre o botão ao ser clicado.
-   **Layout Flexível:** O número de produtos por linha se ajusta automaticamente dependendo do tamanho da tela.
-   **Carrinho:** No carrinho temos diversas formas de pagamento e todas foram personalizadas pensado em trazer a melhor experiencia para os clientes

---

### 🛠️ Tecnologias Utilizadas

As seguintes ferramentas e tecnologias foram usadas na construção deste projeto:

-   **HTML5:** Para a estrutura semântica do conteúdo.
-   **CSS3:** Para estilização, animações e design responsivo.
-   **Bootstrap 5:** Framework CSS para a criação rápida de layouts responsivos e componentes.
-   **JavaScript (Vanilla JS):** Para a interatividade do cliente, como a ativação das animações de clique e a lógica do carrinho.
-   **Font Awesome:** Para a utilização de ícones vetoriais em toda a aplicação.
-   **Google Fonts:** Para fontes personalizadas e uma melhor tipografia.
-   **Codepen:**       um site com alguns css prontos para adaptar ao cod.
-    **Chatgpt:**           trabalhou na geração de imagens de alta qualidade, direcionado para nossa marca.

### 📁 Como Rodar o Projeto Localmente

Como este é um projeto front-end, não é necessário um processo de build complexo.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/RIGUETE-PEDRO/ecommerce.git
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd ecommerce
    ```
3.  **Abra o arquivo `index.html`** (ou o seu arquivo HTML principal) diretamente no seu navegador de preferência.

E pronto! O site estará funcionando localmente.

---

### 📜 Scripts de Lint, Build e Testes
Este projeto é puramente front-end estático e não utiliza scripts automáticos de lint, build ou testes. Porém, sugestões para um ambiente mais robusto:

Lint: Pode-se adicionar ESLint para análise de JS.

Build: Ferramentas como Vite ou Webpack podem otimizar performance.

Testes: Pode-se utilizar Jest com Testing Library para testes unitários.

---
### 🏛️ Estrutura de Pastas

A estrutura de pastas do projeto está organizada da seguinte forma para facilitar a manutenção:
```
📦 ecommerce/
├── 📂CARINHO/
│   ├── assets/
│   ├── boleto/
│   ├── css/
│   └── js/
├── 📂CONTATOS/
│   ├── css/
│   └── js/
├── css/
├── img/
│   └── imgProd/
├── js/
├── 📂PRODUTOS/
│   ├── css/
│   ├── detalhe/
│   │   ├── css/
│   │   └── js/
│   └── js/
|── 📂SOBRE/
│   ├── css/
│   ├── politica_privacidade/
│   │   ├── css/
│   │   └── js/
│   └── js/
|
└── 📜 README.md
```
---
### 💡 Decisões de Design e Estrutura
**Divisão por Página:**
O projeto foi estruturado com uma pasta para cada página principal do site (CARRINHO, CONTATOS, PRODUTOS, SOBRE). Essa organização facilita a manutenção, permite reutilização de componentes e torna o código mais escalável. Há também uma subpasta para a política de privacidade dentro de SOBRE/, destacando a atenção às boas práticas legais (LGPD).

**Separação de CSS e JS por Página:**
Dentro de cada página, os arquivos CSS e JS estão separados em subpastas. Isso evita conflitos, melhora a modularidade e permite que diferentes membros da equipe atuem de forma independente.

**Pasta img/imgProd/:**
Na pasta imagems deixamos todos as imagens utilizadas no trabalho, alem de criar a pasta imgProd responsável por armazenar exclusivamente as imagens dos produtos, mantendo a organização e facilitando atualizações futuras.

**Uso de Bootstrap com CSS Customizado:**
Utilizamos o grid e os utilitários do Bootstrap para responsividade rápida, junto com CSS personalizado para criar um visual único com cores, animações e interações exclusivas.

**Escolha de Cores e Identidade Visual:**
A paleta principal é composta por preto (elegância, sofisticação) e amarelo (energia, atenção). Essas cores foram aplicadas de forma estratégica nos botões, títulos e destaques.

**Imagens de Alta Qualidade:**
Selecionamos imagens com boa resolução para valorizar os produtos e aumentar a confiança do usuário na loja virtual.

**Design Focado na Experiência do Usuário:**
Todas as decisões foram baseadas em responsividade (mobile-first), fluidez de navegação, legibilidade e interatividade.

---
### 🌟 Inspiração para o Projeto
A inspiração para o EcoBelle veio tanto da nossa criatividade quanto da observação de grandes marcas do setor de beleza, como Natura, Avon e Jequiti. Exploramos também diversas páginas na internet com elementos visuais e interações que nos chamaram a atenção. Adaptamos essas referências ao nosso estilo, buscando sempre inovar. A escolha das cores — preto e amarelo — foi pensada para transmitir elegância, sofisticação e um sentimento de exclusividade. Queríamos que o usuário se sentisse especial ao navegar pela loja.

---
### 👤 Autores

Feito por **[PEDRO HENRIQUE RIGUETE DE OLIVEIRA MARTINS, RIQUI GABRIEL SALOMÃO LIRIO]**.

Entre em contato ou veja outros projetos:


[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RIGUETE-PEDRO)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gabriel-silva-ravi)
---

### 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
