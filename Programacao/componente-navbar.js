const navbar = document.querySelector('.nav-bar')

let header = document.createElement('nav')

header.innerHTML = `
        <a href="/Programacao/home.html" class="logo"> <img src="img/Logo.png" alt="logo" /></a>

        <ul class="nav-list">
            <li><a href="/Programacao/home.html">Home</a></li>
            <li><a href="/Programacao/Pag_cardapio.html">Cardápio</a></li>
            <li><a href="/Programacao/Pg_Sobremesa.html">Sobremesas</a></li>
            <li><a href="/Programacao/bebidas_pag.html">Bebidas</a></li>
        </ul>
        <ul class="navbar--cart">
            <li>
                <a href="/Programacao/carrinho.html"><ion-icon name="cart-outline" class="nav--cart--icon"></ion-icon>
                <span class="cart--quantidade">0 itens</span>
                </a>
            </li>
        </ul>
` 

const navLinks = header.querySelectorAll('.nav-list a');

function destaquePaginaAtual() {
  const paginaAtual = window.location.pathname;

  for (const link of navLinks) {
    const href = link.getAttribute('href');

    if (href && href.endsWith(paginaAtual)) {
      link.style.textDecoration = "underline"
    }
  }
}


window.addEventListener('load', destaquePaginaAtual);
window.addEventListener('popstate', destaquePaginaAtual);

navbar.appendChild(header);
