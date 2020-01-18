
function checaIdade(idade) {
    return new Promise(function (maior, menor) {
        setTimeout(function name() {
            if (idade>18) {
                maior('O usuário é maior de 18 anos');
            } else {
                menor('O usuário tem idade menor ou igual a 18 anos')
            }
        }, 2000)
    })
}

checaIdade(17)
.then(function (msgv) {
    console.log('Velho! '+msgv);
})
.catch(function (msgn) {
    console.log('Gente nova! '+msgn);
})