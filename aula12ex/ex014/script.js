function loading() {
  var msg = window.document.querySelector("div#msg");
  var img = window.document.querySelector("img#image");

  var data = new Date();
  var hora = data.getHours();
  
  msg.innerHTML = `<p>Agora são ${hora} horas.</p>`;

  if (hora >= 0 && hora < 12) {
    //Bom dia
    img.setAttribute("src", "components/images/morning.jpg");
    document.body.style.background = "#C8B68B";
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.setAttribute("src", "components/images/afternoon.jpg");
    document.body.style.background = "#AB7A65";
  } else {
    // Boa Noite
    img.setAttribute("src", "components/images/night.jpg");
    document.body.style.background = "#48494A";
  }
}
