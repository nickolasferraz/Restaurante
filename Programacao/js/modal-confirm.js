const confirmarCompra = function(event) {
  // pega o nome do produto dentro do h2
  const tituloProduto = event.target.closest('.card--produtos').querySelector('h2').textContent;

// cria o modal
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

// fecha automaticamente o modal em 2,5 segundos
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
// faz aparecer o modal ao apertar no botão
  for (const botao of botoesCarrinho) {
    botao.addEventListener('click', confirmarCompra.bind(botao));
  }
