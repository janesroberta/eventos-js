//EVENTO



//MANIPULADOR DE EVENTO = EVENT HANDLER

/**
 * função que dispara uma ação
 */

 //MANIPULADOR DE EVENTO PADRÃO


//<a href="http://www.google.com.br">Google</a>


//ELEMENTO ou DISPARADOR DE EVENTO

//O elemento em que se interage o evento.








//3 MANEIRAS DE DE ATRELAR UM EVENTO A UM ELEMNTO HTML

//1ª MANEIRA E NÃO RECOMENDADA

// function cliqueUm() {
//     alert("Cliquei Um")
// }

// function cliqueDois() {
//     alert("Cliquei Dois")
// }


// function cliqueTres() {
//     alert("Cliquei Tres")
// }


//2º MANEIRA

//disparo da função alert

//  var botao = document.getElementById('btn');

// botao.onclick = function () {
    
//      alert("clique Um")
// }

// botao.onclick = function () {

//     alert("clique Dois")
// }

// botao.onclick = function () {

//     alert("clique Tres")
// }



// 3ª FORMA - RECOMENDADA

function cliqueUm(nome) {
    alert('Clique Um ' +nome)
}

// function cliqueDois() {
//     alert('Clique Dois')
// }

// function cliqueTres() {
//     alert('Clique Tres')
// }

var botao = document.getElementById("btn");

botao.addEventListener("click", function () {
    
    cliqueUm("Guilherme")

}, false)


// botao.addEventListener("click", cliqueDois, false)
// botao.addEventListener("click", cliqueTres, false)