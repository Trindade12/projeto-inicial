var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var saida = document.getElementById("saida-de-dados");

var nome = document.getElementById("nome");
var email = document.getElementById("email");
var tel = document.getElementById("tel");

var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");

var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

function alertar(event){
    if(true){
        //alert("Você Clicou no Botão!!!" + "" + nome.value);
        saida.innerText = `Nome:  ${nome.value} 
                           Email: ${email.value}
                           Telefone:  ${tel.value} 
                           Logradouro: ${logradouro.value}
                           Complemento:  ${complemento.value} 
                           Bairro: ${bairro.value}
                           Cidade:  ${cidade.value} 
                           Estado: ${estado.value}
                           `;
    }
}