var hour = new Date();
var dayHour = hour.getHours();
var mss = window.document.querySelector("div#dayMss");
var img = window.document.querySelector("img.main-img");

if (dayHour < 12) {
    mss.innerHTML = `<p> Agora são <strong>${dayHour} horas.</strong> Bom Dia!</p>`;
    mss.style.color = '#C8B68B'
    img.setAttribute("src","components/images/morning.jpg")
    window.document.body.style.background = '#C8B68B'
} else if (dayHour > 12 && dayHour <= 18) {
    mss.innerHTML = `<p> Agora são <strong>${dayHour} horas.</strong> Boa Tarde!</p>`;
    mss.style.color = '#AB7A65'
    img.setAttribute("src","components/images/afternoon.jpg")
    window.document.body.style.background = '#AB7A65'
} else if (dayHour > 18) {
    mss.innerHTML = `<p> Agora são <strong>${dayHour} horas.</strong> Boa Noite!</p>`;
    mss.style.color = '#48494A'
    img.setAttribute("src", "components/images/night.jpg")
    window.document.body.style.background = '#48494A'
} else {
    mss.innerHTML = '<p>[ERRO]</p>'
}
