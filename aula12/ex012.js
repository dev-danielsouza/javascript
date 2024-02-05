var agora = new Date()
var hora = agora.getHours()
var tempo = undefined

if (hora <= 12) {
    var tempo = 'manhã'
} else if ((hora > 12) && (hora <= 17)) {
    var tempo = 'tarde'
} else {
    var tempo = 'noite'
}
    
console.log(`São exatemente ${hora} horas da ${tempo}!`)

if (hora <= 12) {
    console.log('Bom dia!')
} else if ((hora > 12) && (hora <= 17)) {
    console.log('Boa tarde!')
} else {
    console.log('Boa Noite!')
}