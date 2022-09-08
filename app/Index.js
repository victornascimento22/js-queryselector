function onClickSalvar(){

let campoNome = document.querySelector('#nome');
let campoIdade = document.querySelector('#idade');
let campoDatadeNascimento = document.querySelector('#datadenascimento');
let campoNomedoPai = document.querySelector('#nomedopai');
let campoNomedaMae = document.querySelector('#nomedamae');

var pessoa = {

    nome: campoNome.value,
    idade: campoIdade.value,
    datadenascimento: campoDatadeNascimento.value,
    nomedopai:campoNomedoPai.value,
    nomedamae:campoNomedaMae.value
    
};


let div = document.querySelector('#dadosSalvos');

div.innerHTML =  '<input disabled value ="'  + pessoa.nome + '" />' +
'<input disabled value = "' + pessoa.idade + '" />' +
'<input disabled value = "' + pessoa.datadenascimento + '" />' +
'<input disabled value ="'+ pessoa.NomedoPai + '" />'+
'<input disabled value ="'+ pessoa.NomedaMae + '" />'
}




