function somar() {
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.querySelector('div#res')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var soma = n1 + n2
    res.innerHTML = `A soma dos números é igual á: <strong>${soma}</strong>`
}