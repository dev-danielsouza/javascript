function contagem() {
    var initialNum = document.querySelector('input#initial-input')
    var lastNum = document.querySelector('input#last-input')
    var steps = document.querySelector('input#steps')
    var res = document.querySelector('div#res')

    if (initialNum.value.length == 0 || lastNum.value.length == 0 || steps.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(initialNum.value)
        let f = Number(lastNum.value)
        let p = Number(steps.value)

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c}`
        }
    }
}