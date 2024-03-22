let listaProdutos = [];
let nextProductId = 0; // Esta variável será usada para atribuir um id único a cada produto

function atualizaTotal() {
  let sectionResumo = document.getElementsByClassName("resumo")[0]
  let sum = 0;
  for(let i = 0; i < listaProdutos.length; i++) {
    sum += parseFloat(listaProdutos[i].price);
  }
  
  let total = document.querySelector(".total-valor");
  if (!total) {
    total = document.createElement("span");
    total.classList.add("total-valor");
    sectionResumo.appendChild(total);
  }
  total.innerText = `Total: R$ ${sum.toFixed(2)}`;
}

// Esta função adiciona um produto ao carrinho e atualiza a exibição
function adicionaProdutoAoCarrinho(productPronto) {
  // Adiciona um id ao produto
  productPronto.id = nextProductId++;
  
  // Adiciona o produto à lista
  listaProdutos.push(productPronto);
  
  // Atualiza a exibição do carrinho
  atualizaCarrinho();
  
  // Atualiza o nextProductId no sessionStorage
  sessionStorage.setItem("nextProductId", nextProductId);
}

function removeProdutoDoCarrinho(event) {
  // Identifica o id do produto a ser removido
  let productId = parseInt(event.target.parentElement.parentElement.parentElement.id.replace('produto-', ''));
  
  // Remove o produto do DOM
  event.target.parentElement.remove();
  
  // Encontra o índice do produto na lista
  const productIndex = listaProdutos.findIndex(produto => produto.id === productId);
  
  listaProdutos.splice(productIndex, 1)
  
  // Atualiza a lista de produtos no sessionStorage
  sessionStorage.setItem("productList", JSON.stringify(listaProdutos));

  atualizaCarrinho();
}


// Esta função renderiza todos os produtos no carrinho
function atualizaCarrinho() {
  // Limpa o carrinho atual
  let rowCarrinho = document.querySelector(".row--carrinho");
  rowCarrinho.innerHTML = '';
  
  // Adiciona cada produto ao carrinho
  listaProdutos.forEach((produto, index) => {
    let newCartProduct = document.createElement("div");
    newCartProduct.classList.add("card--produtos--carrinho");
    newCartProduct.id = 'produto-' + produto.id; // Usa o id do produto para o id do elemento DOM
    
    newCartProduct.innerHTML = `<img src="${produto.img}" alt="${produto.name}"
    class="card--produtos--carrinho--imagem">
    <div class="card_titulo">
    <h3>${produto.name}</h3>
    </div>
    <h3 class="preco">${produto.price}</h3>
    <div class="quantidade">
    <button class="diminuir">-</button>
    <input type="number" value="1" class="input--personalizado">
    <button class="aumentar">+</button>
    </div>
    <button class="remover"><ion-icon name="trash-outline"></ion-icon></button>`;
    
    rowCarrinho.appendChild(newCartProduct);
    // Adiciona os event listeners para os botões de remover
    const removeButtons = document.getElementsByClassName("remover");
    for (var i = 0; i < removeButtons.length; i++) {
      removeButtons[i].addEventListener("click", removeProdutoDoCarrinho);
    }
  });
  atualizaTotal()
}

let productList = sessionStorage.getItem("productList");
let storedNextProductId = sessionStorage.getItem("nextProductId");
if (productList !== null) {
  let productPronto = JSON.parse(productList);
  nextProductId = storedNextProductId ? parseInt(storedNextProductId) : 0;
  productPronto.forEach(produto => {
    // Verifica se o produto já existe no carrinho
    if (!listaProdutos.some(p => p.id === produto.id)) {
      adicionaProdutoAoCarrinho(produto);
    }
  });
}

