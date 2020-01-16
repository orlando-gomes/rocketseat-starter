/*Estamos referenciando os botões da página HTML e cadastrando
listeners para o evento onClick. O handler vai chamar a função
whoIs, passando o botão clicado como parametro.*/ 
var bt1 = document.getElementById('bt1');
bt1.addEventListener('click', function () {
    whoIs(this);
});
var bt2 = document.getElementById('bt2');
bt2.addEventListener('click', function () {
    whoIs(this);
});

/*No momento da chamada, a função whoIs recebe o botão clicado e 
dispara uma promise que escreverá o botão clicado no console.*/
function whoIs(element) {
    buttonPromise(element)
    .then(function (param1) {
        console.log(param1);
    })
    .catch(function (param2) {
        console.log(param2);
    })
}

function buttonPromise(element) {
    return new Promise(function (btOne, btTwo) {
        if (element.id == 'bt1') {
            btOne('Clicou o Botão 1');
        } else {
            btTwo('Clicou o Botão 2');
        }
    });
}

/*
function myPromise() {
    return new Promise(function (acertou, errou) { 
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
*/

/*A função executora recebe como parâmetros duas outras funçoes, com qualquer nome.
Se a primeira função for executada, a promessa será carimbada como BEM sucedida; 
se a segunda executar, a promessa será carimbada como MAL sucedida. 
No caso acima, escolhemos os nomes "acertou" e "errou". Tão logo uma das duas funções 
execute, será acionado o chamada apropriada: se a promisse foi BEM sucedida, segue o 
comando then; caso contrário, segue o comando catch. Os nomes param1 e param2 são 
arbitrários. Param1 será o objeto passado como parâmetro na função acertou e param2, 
o objeto passado na função errou. Pode ser qualquer objeto*/