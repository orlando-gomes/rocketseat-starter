const usuarios = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Lucas', idade: 30, empresa: 'Facebook'}
];

// 2.1
console.log('2.1');
const idades = usuarios.map(item => item.idade);
console.log(idades);

// 2.2
console.log('2.2');
const rctst18 = usuarios.filter(item => ((item.empresa == 'Rocketseat')&&(item.idade>18)));
console.log(rctst18);

// 2.3
console.log('2.3');
const ggle = usuarios.find(item => item.empresa == 'Google');
console.log(ggle);

//2.4
console.log('2.4');
const doub = usuarios.map(item => ({nome: item.nome, idade: item.idade*2, empresa: item.empresa}));
const doubMen = doub.filter(item => item.idade<=50);
console.log(doubMen);
