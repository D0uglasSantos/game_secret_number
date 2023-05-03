function verificarChuteValorValido(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += "<div> Valor Inválido! </div>";
    return;
  }

  if (chute === "game over") {
    document.body.innerHTML = `
    <h2> Game Over!</h2>
    <h3> Você perdeu! O número secreto era ${numeroSecreto}</h3>
    
    <button id="jogar-novamente" class="btn-jogar-novamente">Jogar Novamente!</button>
`;
    return;
  }

  if (numeroMaiorOuMenorQuePermitido(numero)) {
    elementoChute.innerHTML += `
        <div> Valor inválido: Fale um número entre ${menorValor} e ${maiorValor} </div>
        `;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h2> Você Acertou!</h2>
        <h3> O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar-novamente">Jogar Novamente!</button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fas fa-arrow-down"></i></i></div>
    `;
  } else {
    elementoChute.innerHTML += `
     <div>O número secreto é maior <i class="fas fa-arrow-up"></i></i></div>
     `;
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorOuMenorQuePermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
