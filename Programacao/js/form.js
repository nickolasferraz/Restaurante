// validação caixa de texto vazia
let foodComments = document.getElementById("foodComents");
let mensagemErro = document.querySelector(".mensagem--erro--comentario");
let mensagensErroEstrela = document.querySelectorAll(".mensagem--erro--estrela");

// Flag para indicar se o formulário pode ser enviado
let canSubmit = true;

function updateSubmitButton() {
  // Habilita o botão de envio apenas se todas as validações forem passadas
  document.getElementById('send--form').disabled = !canSubmit;
}


foodComments.addEventListener("blur", function() {
  if (foodComments.value === "") {
    mensagemErro.style.display = "block";
    canSubmit = false; // Desabilita o envio se o campo estiver vazio
  } else {
    mensagemErro.style.display = "none";
  }
  updateSubmitButton(); // Atualiza o estado do botão de envio
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
    canSubmit = false; // Desabilita o envio se nenhuma estrela for selecionada
  } else {
    errorMessage.style.display = "none";
  }
  updateSubmitButton(); // Atualiza o estado do botão de envio
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