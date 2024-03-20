// validação caixa de texto vazia
let foodComments = document.getElementById("foodComents");
let mensagemErro = document.querySelector(".mensagem--erro--comentario");
let mensagensErroEstrela = document.querySelectorAll(".mensagem--erro--estrela");


foodComments.addEventListener("blur", function() {
  if (foodComments.value === "") {
    mensagemErro.style.display = "block";
  } else {
    mensagemErro.style.display = "none";
  }
});

const avaliacaoEstrelas = document.querySelectorAll('input[name="foodRating"]');
const avaliacaoEstabelecimento = document.querySelectorAll('input[name="establishmentRating"]');

function updateStarError(starInputs, errorMessage) {
  let checked = false;
  for (let i = 0; i < starInputs.length; i++) {
    if (starInputs[i].checked) {
      checked = true;
      break;
    }
  }
  if (!checked) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}

// Attach event listeners to each star radio button
avaliacaoEstrelas.forEach(star => {
  star.addEventListener("change", () => {
    updateStarError(avaliacaoEstrelas, mensagensErroEstrela[0]);
  });
});

avaliacaoEstabelecimento.forEach(star => {
  star.addEventListener("change", () => {
    updateStarError(avaliacaoEstabelecimento, mensagensErroEstrela[1]);
  });
});

const enviarFormulario = document.getElementById('send--form')
const modalConfirmacao = document.createElement('dialog');
const modalFormulario = document.createElement('dialog');

modalConfirmacao.innerHTML = `
  <div class="modal-container">
    <h2>Obrigado por nos avaliar</h2>
    <p>Volte sempre !</p>
    <a href="/Programacao/home.html"><button id="finalizar--avaliacao">Finalizar</button></a>
  </div>
`;
document.body.appendChild(modalConfirmacao);


enviarFormulario.addEventListener('click', (event) => {
    const target = event.target;
      event.preventDefault()
    if (target.id === 'send--form') {
        modalConfirmacao.showModal();
    }
})

modalConfirmacao.addEventListener('click', (event) => {
    const target = event.target;
      
    if (target.id === 'finalizar--avaliacao') {
      modalConfirmacao.close();
    }
    }
);