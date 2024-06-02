
//       Desafio 1       //


// let ganhouAposta = gets();

// // TODO: Crie uma condicional if-else corretamente para atender aos requisitos para solucionar o problema
// if (ganhouAposta == 1) {
//     print("Ficou rico!");
// } else {
//     print("Perdeu tudo!");
// }















//          Desafio 2      //
// let n = gets();  
// n = parseInt(n); 


// let valorInicial = 50; 
// let rendimentoMensal = valorInicial / 10;  
// let rendimentoTotal = rendimentoMensal * n; 
// let valorTotal = valorInicial + rendimentoTotal;


// print(valorTotal, ' criptomoedas');








//         Desafio 3       //
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let dados = gets().split(" ");  // Obtém a entrada do usuário e divide em um array de strings
let arr = [];
for (let i = 0; i < dados.length; i++) {  // Laço de repetição para percorrer todos os elementos do array `dados`
    arr.push(parseInt(dados[i]));  // Converte cada elemento para inteiro e adiciona ao array `arr`
}

let max_valor = Math.max(...arr);  // Encontra o maior valor no array `arr` usando o spread operator
print(max_valor);  // Imprime o maior valor encontrado
