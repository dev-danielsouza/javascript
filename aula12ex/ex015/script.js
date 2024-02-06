function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.querySelector("input#txtano");
  var res = document.querySelector("div#res");

  if (fano.value == 0 || fano.value > ano) {
    window.alert(
      "[ERRO] Dados inválidos. Verifique os dados e tente novamete!"
    );
  } else {
    var fsex = window.document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = undefined;
    
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "homem";

      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "components/images/foto-bebe-m.jpg");
      } else if (idade >= 10 && idade < 21) {
        // Jovem
        img.setAttribute('src','components/images/foto-jovem-m.jpg')
      } else if (idade >= 21 && idade < 50) {
        // Adulto
        img.setAttribute('src','components/images/foto-adulto-m.jpg')
      } else {
        // Idoso
        img.setAttribute('src','components/images/foto-idoso-m.jpg')
      }
    } else if (fsex[1].checked) {
      genero = "mulher";
      
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "components/images/foto-bebe-f.jpg");
      } else if (idade >= 10 && idade < 21) {
        // Jovem
        img.setAttribute('src','components/images/foto-jovem-f.jpg')
      } else if (idade >= 21 && idade < 50) {
        // Adulto
        img.setAttribute('src','components/images/foto-adulto-f.jpg')
      } else {
        // Idoso
        img.setAttribute('src','components/images/foto-idoso-f .jpg')
      }
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
