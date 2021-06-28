document.addEventListener("DOMContentLoaded", function(){
document.querySelector("#upload").addEventListener("change", function(imagem) {
    const arquivo = imagem.target.files.item(0);
    const endereco = new FileReader();
    endereco.onload = function () {
        document.querySelector("#img-preview").setAttribute("src", endereco.result);
    }
    endereco.readAsDataURL(arquivo);
})
});

function teste() {
    let primeiro = $('#radio1').prop('checked');
    let segundo = $('#radio2').prop('checked');

    console.log("Primeiro: " + primeiro);
    console.log("Segundo: " + segundo);

    if(segundo == true){
        //#prestaServicos1
        $('#prestaServicos1').css('display', 'block');
    }else {
        $('#prestaServicos1').css('display', 'none');
    }
}
