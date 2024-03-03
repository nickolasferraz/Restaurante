const diminuirBotoes = document.querySelectorAll('.diminuir');
const aumentarBotoes = document.querySelectorAll('.aumentar');
const inputQuantidades = document.querySelectorAll('.input--personalizado');


function atualizarQuantidade(botaoClicado) {
  const card = botaoClicado.closest('.card--produtos, .card--produtos--carrinho');
  const inputAssociado = card.querySelector('.input--personalizado');
  const quantidadeAtual = parseInt(inputAssociado.value);
  
  if (botaoClicado.classList.contains('diminuir')) {
    if (quantidadeAtual > 1) {
      inputAssociado.value = quantidadeAtual - 1;
    }
  } else if (botaoClicado.classList.contains('aumentar')) {
    inputAssociado.value = quantidadeAtual + 1;
  }
}


diminuirBotoes.forEach(botao => botao.addEventListener('click', () => atualizarQuantidade(botao)));
aumentarBotoes.forEach(botao => botao.addEventListener('click', () => atualizarQuantidade(botao)));