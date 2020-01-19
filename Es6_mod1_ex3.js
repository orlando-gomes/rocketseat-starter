
// 3.1
console.log('3.1');
const arr = [1, 2, 3, 4, 5];
const arr1 = arr.map(item => item + 10);
console.log(arr1);

// 3.2
console.log('3.2');
const usuario = {nome: 'Diego', idade: 23};
const mostraIdade = user => user.idade;
console.log(mostraIdade(usuario));

//3.3
console.log('3.3');
const name = 'Orlando';
const age = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade});

console.log(mostraUsuario(name, age));
console.log(mostraUsuario(name));
console.log(mostraUsuario());

// 3.4
console.log('3.4');
const promise = () => new Promise((resolve, reject)=>reject('Promessa rejeitada'));
promise()
.then()
.catch(msg=>{console.log(msg)});