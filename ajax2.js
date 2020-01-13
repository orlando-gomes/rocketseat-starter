function buscar() {
    function myPromise() {
        return new Promise(function (allright, bad) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        allright(JSON.parse(xhr.responseText));
                    } else {
                        bad('Falha na conexão!');
                    }
                }
            }
            xhr.open('GET', 'https://api.github.com/users/orlando-gomes', true);
            xhr.send(null);
        })
    }

    myPromise()
    .then(function (objSucess) {
        document.getElementById('show').innerHTML = objSucess.login;
    })
    .catch(function (msg) {
        console.warn(msg);
    })

}
