
function search() {
    if (ipt.value != '') {
        //Indicador de carregamento
        var lista = document.getElementById('lista');
        lista.innerHTML = '';
        var indicador = document.createElement('li');
        indicador.innerHTML = 'Carregando...';
        lista.append(indicador);

        var url = 'https://api.github.com/users/'+ipt.value+'/repos';
        ipt.value = '';
        var myPromise = new Promise(function (sucess, failure) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                console.log('Estado: '+xhr.readyState+' / Status: '+xhr.status);
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        sucess(JSON.parse(xhr.responseText));
                    } else if (xhr.status == 404){
                        failure('Usuário não encontrado')
                    } else {
                        failure('Erro de conexão');
                    }
                }
            }
            xhr.open('GET', url);
            xhr.send(null);
        })
        myPromise
        .then(function (obj) {
            console.log(obj.typeof);
            var lista = document.getElementById('lista');
            lista.innerHTML = '';
            var item;
            for (const ob of obj) {
                item = document.createElement('li');
                item.innerHTML = ob.full_name;
                lista.append(item);
            }

        })
        .catch(function (msg) {
            var lista = document.getElementById('lista');
            lista.innerHTML = '';
            var errMsg = document.createElement('li');
            errMsg.innerHTML = msg;
            lista.append(errMsg);
        })
    }
}

var ipt = document.getElementById('user');
var bts = document.getElementById('search');
bts.onclick = search;
