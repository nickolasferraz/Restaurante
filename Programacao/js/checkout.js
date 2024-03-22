const confirmarCompra = function() {
    const modalConfirmacao = document.createElement('dialog');
    const modalFormulario = document.createElement('dialog');

    modalConfirmacao.innerHTML = `
      <div class="modal-container">
        <h2>Confirmar compra</h2>
        <p>Você está prestes a finalizar a compra. Deseja prosseguir?</p>
        <button id="confirmar-compra">Sim, finalizar compra</button>
        <button id="cancelar-compra">Não, voltar ao carrinho</button>
      </div>
    `;
    
    modalFormulario.innerHTML = `
    <div class="modal-container">
    <h2>Deseja avaliar nosso restaurante ?</h2>
    <a href="formulario.html"><button>Sim !</button></a>
    <a href="/Programacao/home.html"><button id="fechar-form">Não, obrigado !</button></a>
    </div>
    `;

    document.body.appendChild(modalConfirmacao);
    document.body.appendChild(modalFormulario);
    modalConfirmacao.showModal();
  
    modalConfirmacao.addEventListener('click', (event) => {
      const target = event.target;
        
      if (target.id === 'confirmar-compra') {
        modalConfirmacao.close();
        modalFormulario.showModal();
      } else if (target.id === 'cancelar-compra') {
        modalConfirmacao.close();
      }
    });

    modalFormulario.addEventListener('click', (event) => {
    const target = event.target;

    if (target.id === 'fechar-form') {
        modalFormulario.close();
    }
    });

    sessionStorage.clear()
  };

const botaoCheckout = document.getElementsByClassName("botao-checkout");

for (var i = 0; i < botaoCheckout.length; i++) {
  botaoCheckout[i].addEventListener("click", confirmarCompra);
}

