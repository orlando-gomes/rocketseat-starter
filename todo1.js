var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
buttonElement.onclick = addTodo;
var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade Rocketseat'
];

function render() {    
    // removendo todos os itens
    listElement.innerHTML = '';
    for (const item of todos) {
        //criar o li com o texto do array e colocar na lista
        var it = document.createElement('li');
        it.innerHTML = item;
        listElement.append(it);

        //criar o link e colocar no li
        var lk = document.createElement('a');
        lk.setAttribute('href','#');
        var pos = todos.indexOf(item);
        lk.setAttribute('onclick','deleteTodo('+pos+')');
        lk.innerHTML = 'Excluir';
        it.append(lk);        
        
    }
}
render();

function addTodo() {
    if (inputElement.value!='') {
        todos.push(inputElement.value);
        inputElement.value='';
        render();
    }
}

function deleteTodo(pos) {
    todos.splice(pos,1);
    render();
}

