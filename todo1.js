var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
buttonElement.onclick = addTodo;
/*var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade Rocketseat'
];*/

var todos;

function getTodos() {
    if (typeof(Storage)!=='undefined') {
        var retorno;
        var jsonString = localStorage.getItem('myTodos');
        if (jsonString) {
            retorno = jsonString;
        } else {
            retorno = '[]';
        }
    } else {
        alert('Seu navegador não suporta armazenamento!');
    }
    return retorno;
}

function saveTodos(todos) {
    localStorage.setItem('myTodos',JSON.stringify(todos));
}

function render() {    
    // removendo todos os itens
    listElement.innerHTML = '';
    // recuperando os todos na memória
    console.log(getTodos());
    todos = JSON.parse(getTodos());
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
        todos = JSON.parse(getTodos());
        todos.push(inputElement.value);
        inputElement.value='';
        saveTodos(todos);
        render();
    }
}

function deleteTodo(pos) {
    todos = JSON.parse(localStorage.getItem('myTodos'));
    todos.splice(pos,1);
    localStorage.setItem('myTodos',JSON.stringify(todos));
    render();
}

