function myPromise() {
    return new Promise(/*executor*/function (acertou, errou) { 
        var x=2
        if (x==1) {
            acertou('Resolveu');    
        } else {
            errou(['Este é', 'um array']);
        }
    })
}

myPromise()
.then(function (param1) {
    console.log(param1);
})
.catch(function (param2) {
    console.warn(param2);
})

/*A função executora recebe como parâmetros duas outras funçoes, com qualquer nome.
Se a primeira função for executada, a promessa será carimbada como BEM sucedida; 
se a segunda executar, a promessa será carimbada como MAL sucedida. 
No caso acima, escolhemos os nomes "acertou" e "errou". Tão logo uma das duas funções 
execute, será acionado o chamada apropriada: se a promisse foi BEM sucedida, segue o 
comando then; caso contrário, segue o comando catch. Os nomes param1 e param2 são 
arbitrários. Param1 será o objeto passado como parâmetro na função acertou e param2, 
o objeto passado na função errou. Pode ser qualquer objeto*/