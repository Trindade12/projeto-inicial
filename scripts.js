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

        //validação
        if(cep.value.length < 8){
            alert("Entre com um CEP válido")
        }

        const url = `https://viacep.com.br/ws/${cep.value}/json/`;

        fetch(url)

        //versão verbosa sem arrow function
        .then(function(resposta){
            return resposta.json();
        })

        .then(function(dados){
            logradouro.value = dados.logradouro;
            bairro.value = dados.bairro;
            cidade.value = dados.localidade;
            complemento.value = dados.complemento;
            estado.value = dados.uf;
        })

        .catch(function(error){
            alert(error.message);
        })

        //versão menos verbosa com arrow function

        /*fetch(url)
        .then(resposta=>resposta.json())
        .then(dados=>alert(dados.logradouro))

        .catch ((e) => alert(e.message()))*/

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