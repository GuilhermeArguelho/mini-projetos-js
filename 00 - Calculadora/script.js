var resultado = document.getElementById("result");
function insert(n) {

  resultado.innerHTML += n;
  ajustaTamanho();
}

function limpar() {
  resultado.innerHTML = "";
}

function backspace() {
  let resSplit = resultado.innerHTML.split("");
  resSplit.pop();
  resultado.innerHTML = resSplit.join("");
  ajustaTamanho();
}

function calcular() {
  var resultado = document.getElementById("result").innerHTML;
  if (resultado) {
    document.getElementById("result").innerHTML = eval(resultado);
  } else {
    document.getElementById("result").innerHTML = "";
  }
  ajustaTamanho();
}

function ajustaTamanho() {
  let tamanho = resultado.innerHTML.length;
  console.log(tamanho);
  let conteudo = document.getElementById("result");
  if (tamanho <= 26) {
    conteudo.style.fontSize = "60px";
  } else if (tamanho >= 26) {
    conteudo.style.fontSize = "32px";
  }
  if (tamanho >= 70) {
    conteudo.style.fontSize = "16px";
  }
}
