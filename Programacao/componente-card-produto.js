const produtos = [
  {
    imagem: "img_web/imagem mexicanas/tacos/taco americano.PNG",
    titulo: "Taco Shell",
    descricao: "Taco Shell, uma tortilha de milho frita recheada com a proteína da sua escolha e finalizada com a frescura de uma saladinha de alface e tomate.",
    preco: 10.95,
  },
  {
    imagem: "img_web/imagem mexicanas/tacos/taco custela.jpg",
    titulo: "Taco de costela",
    descricao: "Um delicioso taco com costela desfiada com um tempero de tirar o folego, acompanha cebola, nachos e maionese da casa.",
    preco: 12.75,
  },
  {
    imagem: "img_web/imagem mexicanas/tacos/veegie2.jpg",
    titulo: "Taco vegetariano",
    descricao: "Otima opção de taco vegetariano. tortilha de milho frita receada de carne de jaca com alface fresco e tomate.",
    preco: 9.48,
  },  
  {
    imagem: "img_web/imagem mexicanas/um-taco-que-tem-carne_873925-20284.avif",
    titulo: "Taco tradicional",
    descricao: "Os verdadeiros Tacos Mexicanos! Tortillas de milho frescas (não são as tortillas crocantes).",
    preco: 5.49,
  },
  {
    imagem: "img_web/imagem mexicanas/tacos/monte seu taco.jpg",
    titulo: "Monte seu Taco",
    descricao: "Para voce que gosta de um taco diferente, essa opção vai te agradar, pois nela voce pode montar seu Taco da sua maneira!",
    preco: 14.95,
  },
];

const rowElemento = document.querySelector(".row");
const produtosElemento = document.getElementById("produtos");

produtos.forEach((produto) => {
  const cardProdutoElemento = CardProduto(produto);
  produtosElemento.appendChild(cardProdutoElemento);
});

function CardProduto({ imagem, titulo, descricao, preco }) {
  
  const elemento = document.createElement('div');
  elemento.classList.add('card--produtos');

  const imagemElemento = document.createElement('img');
  imagemElemento.classList.add('card--produtos--imagem');
  imagemElemento.src = imagem;
  imagemElemento.alt = titulo;

  const tituloElemento = document.createElement('h2');
  tituloElemento.textContent = titulo;

  const hr = document.createElement('hr');

  const descricaoElemento = document.createElement('p');
  descricaoElemento.textContent = descricao;
  descricaoElemento.classList.add('card--produtos--descricao');

  const precoElemento = document.createElement('h3');
  precoElemento.classList.add('card--produtos--preco');
  precoElemento.textContent = `${preco}R$`;

  const botao = document.createElement('button');
  botao.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
  botao.classList.add('add--cart--button');

  const quantidadeElemento = document.createElement('div');
  quantidadeElemento.classList.add('quantidade');

  const diminuirBotao = document.createElement('button');
  diminuirBotao.classList.add('diminuir');
  diminuirBotao.textContent = '-';

  const quantidadeInput = document.createElement('input');
  quantidadeInput.type = 'number';
  quantidadeInput.value = 1;
  quantidadeInput.classList.add('input--personalizado');

  const aumentarBotao = document.createElement('button');
  aumentarBotao.classList.add('aumentar');
  aumentarBotao.textContent = '+';

  quantidadeElemento.appendChild(diminuirBotao);
  quantidadeElemento.appendChild(quantidadeInput);
  quantidadeElemento.appendChild(aumentarBotao);

  elemento.appendChild(imagemElemento);
  elemento.appendChild(tituloElemento);
  elemento.appendChild(hr);
  elemento.appendChild(descricaoElemento);
  elemento.appendChild(precoElemento);
  elemento.appendChild(botao);
  elemento.appendChild(quantidadeElemento);

  quantidadeInput.addEventListener('change', () => {
    const quantidade = parseInt(quantidadeInput.value);
    if (quantidade < 1) {
      quantidadeInput.value = 1;
    }
  });

  diminuirBotao.addEventListener('click', () => {
    const quantidade = parseInt(quantidadeInput.value);
    if (quantidade > 1) {
      quantidadeInput.value = quantidade - 1;
    }
  });

  aumentarBotao.addEventListener('click', () => {
    const quantidade = parseInt(quantidadeInput.value);
    quantidadeInput.value = quantidade + 1;
  });

  botao.addEventListener('click', () => {
    confirmarCompra(titulo);
  });
  
  return elemento;
}

function confirmarCompra(titulo) {
  const modal = document.createElement('dialog');
  modal.innerHTML = `
    <div class="modal-container">
      <h2>Confirmação de compra</h2>
      <p>Você adicionou ${titulo} ao carrinho!</p>
      <button id="confirmar-compra">Confirmar</button>
    </div>
  `;

  document.body.appendChild(modal);

  modal.showModal();

  setTimeout(() => {
    modal.close();
  }, 2500); 


  modal.addEventListener('click', (event) => {
    const target = event.target;

    if (target.id === 'confirmar-compra') {

      modal.close();
    }
  });
}
