function mascaraCPF(){
    var cpf = document.getElementById("formCPF");
    if(cpf.value.length == 3 || cpf.value.length == 7 ){
        cpf.value += "."
    }else if (cpf.length == 11){
        cpf.value += "-"
    };
}

function teste() {
    let primeiro = $('#formRadio1').prop('checked');
    let segundo = $('#formRadio2').prop('checked');



    if (segundo == true) {
      
        $('#descricaoServ').css('display', 'block');
    } else {
        $('#descricaoServ').css('display', 'none');
    }
}
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let nome = document.getElementById('formNome').value;
    let date = document.getElementById('formDate').value;
    let sexo = document.getElementById('formSexo').value;
    let escolaridade = document.getElementById('formEscolaridade').value;
    let cpf = document.getElementById('formCPF').value;
    let telefone = document.getElementById('formTelefone').value;
    let celular = document.getElementById('formCelular').value;
    let email = document.getElementById('formEmail').value;
    let cep = document.getElementById('formCep').value;
    let uf = document.getElementById('formUF').value;
    let cidade = document.getElementById('formCidade').value;
    let bairro = document.getElementById('formBairro').value;
    let endereco = document.getElementById('formEndereco').value;
    let servico1 = document.getElementById('formServico1').value;
    let servico2 = document.getElementById('formServico2').value;
    //let servico3 = document.getElementById('formServico3').value; 
    let sobreVoce = document.getElementById('formDescricaoUsuario').value;
    let senha = document.getElementById('formSenha').value;
    let confirmaSenha = document.getElementById('confirmacaoSenha').value;
    let opcaoServico1 = document.getElementById('opcaoServico1').value;
    let opcaoServico2 = document.getElementById('opcaoServico2').value;




    if (nome == "") { document.getElementById('formNome').style.border = "red thin solid"; } else {
        document.getElementById('formNome').style.border = "black thin solid";
        if (date == "") { document.getElementById('formDate').style.border = "red thin solid"; } else {
            document.getElementById('formDate').style.border = "black thin solid";
            if (sexo == "") { document.getElementById('formSexo').style.border = "red thin solid"; } else {
                document.getElementById('formSexo').style.border = "black thin solid";
                if (cpf == "") { document.getElementById('formCPF').style.border = "red thin solid"; } else {
                    document.getElementById('formCPF').style.border = "black thin solid";
                    if (celular == "") { document.getElementById('formCelular').style.border = "red thin solid"; } else {
                        document.getElementById('formCelular').style.border = "black thin solid";
                        if (email == "") { document.getElementById('formEmail').style.border = "red thin solid"; } else {
                            document.getElementById('formEmail').style.border = "black thin solid";
                            if (cep == "") { document.getElementById('formCep').style.border = "red thin solid"; } else {
                                document.getElementById('formCep').style.border = "black thin solid";
                                if (uf == "") { document.getElementById('formUF').style.border = "red thin solid"; } else {
                                    document.getElementById('formUF').style.border = "black thin solid";
                                    if (cidade == "") { document.getElementById('formCidade').style.border = "red thin solid"; } else {
                                        document.getElementById('formCidade').style.border = "black thin solid";
                                        if (bairro == "") { document.getElementById('formBairro').style.border = "red thin solid"; } else {
                                            document.getElementById('formBairro').style.border = "black thin solid";
                                            if (endereco == "") { document.getElementById('formEndereco').style.border = "red thin solid"; } else {
                                                document.getElementById('formEndereco').style.border = "black thin solid";
                                               if (senha == "") { document.getElementById('formSenha').style.border = "red thin solid"; } else {
                                                    document.getElementById('formSenha').style.border = "black thin solid";
                                                    if (confirmaSenha == "") { document.getElementById('confirmacaoSenha').style.border = "red thin solid"; } else {
                                                        document.getElementById('confirmacaoSenha').style.border = "black thin solid";
                                                        if (confirmaSenha != senha) { document.getElementById('confirmacaoSenha').style.border = "red thin solid"; } else {
                                                            document.getElementById('confirmacaoSenha').style.border = "black thin solid";
    
                                                    let obj = {
                                                        'Nome': nome,
                                                        'Date': date,
                                                        'Sexo': sexo,
                                                        'Escolaridade': escolaridade,
                                                        'CPF': cpf,
                                                        'Celular': celular,
                                                        'Telefone': telefone,
                                                        'Email': email,
                                                        'Cep': cep,
                                                        'UF': uf,
                                                        'Cidade': cidade,
                                                        'Bairro': bairro,
                                                        'Endereco': endereco,
                                                        'Servico1': servico1,
                                                        'Servico2': servico2,
                                                        //'Servico3': servico3,
                                                        'SobreVoce': sobreVoce,
                                                        'opcaoServico1': opcaoServico1,
                                                        'opcaoServico2': opcaoServico2,
                                                        'password': senha,

                                                    }

                                                    localStorage.setItem('login', JSON.stringify(obj));

                                                    window.location.href = "pg2.html";
                                                }
                                                }
                                               }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }   
    }

});

