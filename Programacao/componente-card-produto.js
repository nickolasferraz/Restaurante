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
  
    elemento.appendChild(imagemElemento);
    elemento.appendChild(tituloElemento);
    elemento.appendChild(hr);
    elemento.appendChild(descricaoElemento);
    elemento.appendChild(precoElemento);
    elemento.appendChild(botao);
  
    return elemento;
  }
  
  
  const cardProduto = CardProduto({
    imagem: "img_web/imagem mexicanas/tacos/taco americano.PNG",
    titulo: "Taco Shell",
    descricao: "Taco Shell, uma tortilha de milho frita recheada com a proteína da sua escolha e finalizada com a frescura de uma saladinha de alface e tomate.",
    preco: '12,90',
  });
  
  const produtosElemento = document.getElementById('produtos');
  
  produtosElemento.appendChild(cardProduto);