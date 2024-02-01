function somarMedia() {
  var nt1 = window.document.querySelector("input#nota1");
  var nt2 = window.document.querySelector("input#nota2");
  var res = window.document.querySelector("p.resultado");
  var aprovacao = window.document.querySelector("div.aprovacao");

  var nota1 = Number(nt1.value);
  var nota2 = Number(nt2.value);

  var media = (nota1 + nota2) / 2;

  res.innerHTML = `Média do aluno: ${media}`;

  if (media >= 7.0) {
    aprovacao.innerHTML = "Aprovado &#10003;";
  } 
  else {
    aprovacao.innerHTML = "Reprovado &#65794;";
  }
}
