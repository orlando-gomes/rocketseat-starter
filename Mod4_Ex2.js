
function search() {
    if (ipt.value != '') {
        var url = 'https://api.github.com/users/'+ipt.value+'/repos';
        ipt.value = '';
        var myPromise = new Promise(function (sucess, failure) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        sucess(JSON.parse(xhr.responseText));
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
            console.log(obj);
        })
        .catch(function (msg) {
            console.log(msg);
        })
    }
}

var ipt = document.getElementById('user');
var bts = document.getElementById('search');
bts.onclick = search;
