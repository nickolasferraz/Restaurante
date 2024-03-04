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
    imagem: "img_web/imagem mexicanas/tacos/tacos-camarao1.jpg",
    titulo: "Taco de Camarão",
    descricao: "A verdadeira perfeição: taco de camarão frito acompanhado por cream cheese, gorgonzola e abóbora. Uma explosão de sabores e texturas em cada mordida",
    preco: 14.95,
  },  
  {
    imagem: "img_web/imagem mexicanas/um-taco-que-tem-carne_873925-20284.avif",
    titulo: "Taco tradicional",
    descricao: "Os verdadeiros Tacos Mexicanos! Tortillas de milho frescas (não são as tortillas crocantes).",
    preco: 5.49,
  },
  
  {
    imagem: "img_web/imagem mexicanas/tacos/taco-frito.webp",
    titulo: "Taco Crocante",
    descricao: "Um taco frito com uma crocante camada de queijo acompanhado por carne bovina moida, catupiry e salada de alface e tomate picado.",
    preco: 14.95,
  },
  {
    imagem: "img_web/imagem mexicanas/tacos/taco-feijao1.jpg",
    titulo: "Taco de feijão loko",
    descricao: "Uma opção vegetariana, que acompanha feijão mexicano temperado com arroz cremoso e milho, abacate picado  cream cheese.",
    preco: 14.95,
  },
  {
    imagem: "img_web/imagem mexicanas/tacos/veegie2.jpg",
    titulo: "Taco vegetariano",
    descricao: "Otima opção de taco vegetariano. tortilha de milho frita receada de carne de jaca com alface fresco e tomate.",
    preco: 9.48,
  },
  {
    imagem: "img_web/imagem mexicanas/tacos/monte seu taco.jpg",
    titulo: "Monte seu Taco",
    descricao: "Para voce que gosta de um taco diferente, essa opção vai te agradar, pois nela voce pode montar seu Taco da sua maneira!",
    preco: 14.95,
  },
];

const produtosElemento = document.getElementById("produtos");


// o For percorre cada item em objetos, cria um card e adiciona em <div id="produtos"></div>
produtos.forEach((produto) => {
  const cardProdutoElemento = CardProduto(produto);
  produtosElemento.appendChild(cardProdutoElemento);
});

function CardProduto({ imagem, titulo, descricao, preco }) {
  const elemento = document.createElement('div');
  elemento.classList.add('card--produtos');

  const html = `
    <img src="${imagem}" alt="${titulo}" class="card--produtos--imagem">
    <h2>${titulo}</h2>
    <hr>
    <p class="card--produtos--descricao">${descricao}</p>
    <h3 class="card--produtos--preco">${preco}R$</h3>
    <button class="add--cart--button"><i class="fa-solid fa-cart-shopping"></i></button>
    <div class="quantidade">
      <button class="diminuir">-</button>
      <input type="number" value="1" class="input--personalizado">
      <button class="aumentar">+</button>
    </div>
  `;

  elemento.innerHTML = html;

  return elemento;
}
