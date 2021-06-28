window.onload = () => {
    let cads = localStorage.getItem('login');

    cads = JSON.parse(cads)
    
 $(".nomeUser").text(cads.Nome)
 $(".Email").text(cads.Email)
 $(".cpf").text(cads.CPF)
 $(".nascimento").text(cads.Date)
 $(".sexo").text(cads.Sexo)
 $(".escolaridade").text(cads.Escolaridade)
 $(".telefone").text(cads.Telefone)
 $(".celular").text(cads.Celular)
 $(".cidade").text(cads.Cidade)
 $(".uf").text(cads.UF)
 $(".cep").text(cads.Cep)
 $(".endereco").text(cads.Endereco)
 $(".bairro").text(cads.Bairro)
 $(".opcaoServico1").text(cads.opcaoServico1)
 $(".opcaoServico2").text(cads.opcaoServico2)
 $(".servico1").text(cads.Servico1)
 $(".servico2").text(cads.Servico2)
 $(".sobreUser").text(cads.SobreVoce)

 var vaga = localStorage.getItem('vaga');
  vaga = JSON.parse(vaga)

 $(".titulovagaC").text(vaga.Titulovaga)
 $(".tipoServicoC").text(vaga.TipoServico)
 $(".contratanteC").text(vaga.Contratante)
 $(".enderecoC").text(vaga.Endereco)
 $(".numeroC").text(vaga.Numero)
 $(".complementoC").text(vaga.Complemento)
 $(".bairroC").text(vaga.bairro)
 $(".cepC").text(vaga.cep)
 $(".cidadeC").text(vaga.cidade)
 $(".ufC").text(vaga.uf)
 $(".telefoneFxC").text(vaga.telefoneFx)
 $(".celularC").text(vaga.celular)
 $(".emailC").text(vaga.email)
 $(".inicioC").text(vaga.inicioImediato)
 $(".descricaoC").text(vaga.description)
 $(".requisitosC").text(vaga.requisitos)
}

var vkey = localStorage.getItem("vaga");
if( vkey == null ){
document.getElementById("cardvaga").style.display="none";
}else{
  document.getElementById("cardvaga").style.display="block";
}
//const vemail = JSON.parse(localStorage.getItem('login')).Email;

function expandir(){
  var cxPerfil = document.getElementById("um");

  cxPerfil.style.border="1px solid #000";
  cxPerfil.style.width="100%";
  cxPerfil.style.backgroundColor = "#000";
  cxPerfil.style.display="block";

  var cxBusca = document.getElementById("dois");
  cxBusca.style.width="70%";
  cxBusca.style.display="";

  var cxCarrosel = document.getElementById("tres");
  cxCarrosel.style.width="30%";
  cxCarrosel.style.display="";

  var voltar = document.getElementById("oculto");
  voltar.style.display="block"
}

function retornar(){
  var cxPerfil = document.getElementById("um");

  cxPerfil.style.border="none";
  cxPerfil.style.width="";

  var cxBusca = document.getElementById("dois");
  cxBusca.style.width="";
  cxBusca.style.display="";

  var cxCarrosel = document.getElementById("tres");
  cxCarrosel.style.width="";
  cxCarrosel.style.display="";

  var voltar = document.getElementById("oculto");
  voltar.style.display="none"
}

var dt = document.querySelectorAll(".date");

for (var i = 0; i < dt.length; i++) {
 dt[i].style.backgroundColor="#D2B48C";
}

function interesse(){
  alert("Sucesso!\n Você demonstrou interesse na vaga.\n O contratante será informado e poderá entrar em contato com você.")
}
