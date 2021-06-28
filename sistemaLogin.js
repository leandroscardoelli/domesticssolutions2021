function login() { 
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var vkey = localStorage.getItem("login");

    if (vkey == null ) {
        alert("usuário não cadastrado");
    } else {
        const vemail = JSON.parse(localStorage.getItem('login')).Email;
        const vsenha = JSON.parse(localStorage.getItem('login')).password;
        if( vemail != email){
            alert("Email incorreto");
        }else if(vsenha != senha){
            alert("Senha incorreta")
        }else{
            window.location.href = "pg2.html";
        }
    }
}
