const addToCartButtons = document.getElementsByClassName("add--cart--button")
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", addProductToCart)
}

function addProductToCart(event) {
  const button = event.target;
  const index = Array.from(addToCartButtons).indexOf(button);
  const productInfos = button.parentElement.parentElement.parentElement.parentElement.parentElement
  const productImage = productInfos.getElementsByClassName("card--produtos--imagem")[index].src;
  const productName = productInfos.getElementsByTagName("h2")[index].innerText;
  const productPrice = productInfos.getElementsByClassName("card--produtos--preco")[index].innerText;

  let product = {
    img: productImage,
    name: productName,
    price: productPrice
  };

  // Recupera a lista de produtos do sessionStorage
  let productList = JSON.parse(sessionStorage.getItem("productList")) || [];

  // Adiciona o novo produto à lista
  productList.push(product);

  // Salva a lista atualizada de volta ao sessionStorage
  sessionStorage.setItem("productList", JSON.stringify(productList));
}