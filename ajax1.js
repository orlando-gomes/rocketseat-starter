function buscar() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status==200){
            var obj = JSON.parse(xhr.responseText);
            document.getElementById('show').innerHTML = obj.login;
        }
    }

    xhr.open('GET', 'https://api.github.com/users/orlando-gomes', true);
    xhr.send(null);
}
