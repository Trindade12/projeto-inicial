var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var saida = document.getElementById("saida-de-dados");

var nome = document.getElementById("nome");
var email = document.getElementById("email");
var tel = document.getElementById("tel");

var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");

var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

function alertar(event){
    if(true){
        //alert("Você Clicou no Botão!!!" + "" + nome.value);

        const url = `https://viacep.com.br/ws/${cep.value}/json/`;

        fetch(url)
        .then(resposta=>resposta.json())
        .then(dados=>alert(dados.logradouro))

        saida.innerText = `Nome:  ${nome.value} 
                           Email: ${email.value}
                           Telefone: ${tel.value}
                           CEP: ${cep.value}
                           Número: ${numero.value}
                           Logradouro: ${logradouro.value}
                           Complemento:  ${complemento.value} 
                           Bairro: ${bairro.value}
                           Cidade:  ${cidade.value} 
                           Estado: ${estado.value}
                           `;
    }
}