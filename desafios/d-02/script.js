function verificar() {
  var data = new Date();
  var ano = data.getFullYear();

  var txtano = window.document.querySelector("input#txtano");
  var res = window.document.querySelector("div#res");

  if (txtano.value == 0 || txtano.value > ano) {
    window.alert("[ERRO] Dados Inválidos, por favor tente novamente!");
  } else {
    var sexo = document.getElementsByName("radsex");
    var genero = undefined;
    var idade = ano - Number(txtano.value);

    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (sexo[0].checked) {
      genero = "homem";

      res.innerHTML = `Detectamos um ${genero} de ${idade} anos.`;
      document.body.style.background = "rgb(70, 142, 236)";
      
      if (idade > 0 && idade < 12) {
        // Criança
        img.setAttribute("src", "components/images/foto-bebe-m.jpg");
      } else if (idade > 12 && idade < 21) {
        // Jovem
        img.setAttribute("src", "components/images/foto-jovem-m.jpg");
      } else if (idade > 21 && idade < 51) {
        // Adulto
        img.setAttribute("src", "components/images/foto-adulto-m.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "components/images/foto-idoso-m.jpg");
      }
    } else if (sexo[1].checked) {
      genero = "mulher";

      res.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`;
      document.body.style.background = "#CB7A96";

      if (idade > 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "components/images/foto-bebe-f.jpg");
      } else if (idade > 10 && idade < 21) {
        // Jovem
        img.setAttribute("src", "components/images/foto-jovem-f.jpg");
      } else if (idade > 21 && idade < 51) {
        // Adulto
        img.setAttribute("src", "components/images/foto-adulto-f.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "components/images/foto-idoso-f.jpg");
      }
    }

    res.appendChild(img);
  }
}
