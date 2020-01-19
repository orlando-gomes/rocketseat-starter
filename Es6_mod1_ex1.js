
class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin(){
        var msg = 'O usuário NÃO é administrador';
        if (this.admin) {
            msg = 'O usuário é administrador';
        } 
        console.log(msg);
    }

    showDados(){
        console.log(`O e-mail é ${this.email} e a senha é ${this.senha}`);
    }
}

class Admin extends Usuario {
    constructor(email, senha){
        super(email, senha);
        this.admin = true;
    }
}

const user = new Usuario('usuario@teste.com.br','123user');
user.isAdmin();
user.showDados();

const adm = new Admin('admin@teste.com.br','123admin');
adm.isAdmin();
adm.showDados();