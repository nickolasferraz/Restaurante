const addToCartButtons = document.getElementsByClassName("add--cart--button")
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", addProductToCart)
}

function addProductToCart(event) {
  const button = event.target;
  const productCard = button.closest(".card--produtos");

  const productImage = productCard.querySelector(".card--produtos--imagem").src;
  const productName = productCard.querySelector("h2").innerText;
  const productPrice = productCard.querySelector(".card--produtos--preco").innerText;

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