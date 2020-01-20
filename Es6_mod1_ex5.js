// 5.1.1
console.log('5.1.1');
const arr = [1, 2, 3, 4, 5, 6];
[x, ...y] = arr;
console.log(x);
console.log(y);

// 5.1.2 com function
console.log('5.1.2');
function soma(...params) {
    return params.reduce(function (soma, item) {
        return soma + item;
    });
}
console.log(soma(1,2,3));
// com arrow function
const somaAf = (...num)=> num.reduce((adicao, item) => (adicao+item));
console.log(somaAf(1,2,3,4,5,6));

// 5.2
console.log('5.2');

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil'
    }
}


const usuario2 = {...usuario, nome: 'Gabriel'};
console.log(usuario2);

const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};
console.log(usuario3);
