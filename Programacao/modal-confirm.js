const confirmarCompra = (produto) => {
  const botaoClicado = event.target;
  const cardProdutoElemento = botaoClicado.closest('.card--produtos');
  const tituloProduto = cardProdutoElemento.querySelector('h2').textContent;

    const modal = document.createElement('dialog');
    modal.innerHTML = `
      <div class="modal-container">
        <h2>Confirmação de compra</h2>
        <p>Você adicionou ${tituloProduto} ao carrinho!</p>
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
  };

  const botoesCarrinho = document.querySelectorAll('.card--produtos .add--cart--button');

  for (const botao of botoesCarrinho) {
      botao.addEventListener('click', () => {
          const produto = {
              nome: "ItemTeste",
          };
          confirmarCompra(produto);
      });
  }
