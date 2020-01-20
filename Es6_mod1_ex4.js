
// 4.1
console.log('4.1');
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
}

const {nome, endereco: {cidade, estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

// 4.2
console.log('4.2');
const mostraUsuario = ({nome, idade})=> `${nome} tem ${idade} anos`;
console.log(mostraUsuario({nome: 'Diego', idade: 18, sexo: 'M'}));
