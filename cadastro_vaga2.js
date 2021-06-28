document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let titulovaga = document.getElementById('titulovaga').value;
    let listaServicos = document.getElementById('listaServicos').value;
    let contratante = document.getElementById('contratante').value;
    let endereco = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let complemento = document.getElementById('complemento').value;
    let bairro = document.getElementById('bairro').value;
    let cep = document.getElementById('cep').value;
    let cidade = document.getElementById('cidade').value;
    let uf = document.getElementById('uf').value;
    let telefonefx = document.getElementById('telefonefx').value;
    let celular = document.getElementById('celular').value;  
    let email = document.getElementById('email').value;  
    let description = document.getElementById('description').value;  
    let requisitos = document.getElementById('requisitos').value;  
    let radio = document.querySelector('input[name="opcao"]:checked').value; 


    let obj = {
        'Titulovaga': titulovaga,
        'TipoServico': listaServicos,
        'Contratante':  contratante,
        'Endereco': endereco,
        'Numero': numero,
        'Complemento': complemento,
        'bairro': bairro,
        'cep': cep,
        'cidade': cidade,
        'uf': uf,
        'celular': celular,
        'telefoneFx': telefonefx,
        'email': email,
        'inicioImediato': radio,
        'description': description,
        'requisitos': requisitos,
    }
    localStorage.setItem('vaga', JSON.stringify(obj));
    alert("Vaga Cadastrada com Sucesso");
    window.location.href = "Home_page.html";      
});