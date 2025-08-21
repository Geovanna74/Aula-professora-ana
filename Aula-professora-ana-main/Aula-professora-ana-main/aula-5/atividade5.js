// const somar = criarCuladora('+');
// console.log(somar(5,3)); //8

//1- crie uma função criarcalculadora(operador)que retorne oura função capaz de realizar a operação com dois numeros exemplo de uso

// // Função que retorna função (operadores)
// function criarCalculadora(operador) {
//     return function (a, b) {
//         switch (operador) {
//             case '+': return a + b;
//             case '-': return a - b;
//             case '*': return a * b;
//             case '/': return b !== 0 ? a / b : 'Erro: divisão por zero';
//             default: return 'Operador inválido';
//         }
//     };
// }

// // Exemplo
// const somar = criarCalculadora('+');
// console.log(somar(5, 3)); // 8

// //2-crie uma função chamada enviar email(destinatario)que use async simule o tempo de envio com o setimeout dentro de uma promise(ex;2 segundos)mostre no console:"enando e-mail para destinatario apos 2 segundos email enviado com sucesso para destinatario"


// // Função assíncrona para enviar e-mail
// async function enviarEmail(destinatario) {
//     console.log(Enviando e-mail para ${destinatario}...);

//     await new Promise(resolve => setTimeout(resolve, 2000));

//     console.log(E-mail enviado com sucesso para ${destinatario}!);
// }

// // Exemplo
// enviarEmail("usuario@exemplo.com");


// //3-crie um array de objetos chamado produtos com zelo pelo menos 2 produtos cada produto deve ter nome e preço.converta esse array para um strin JSON e mostre o resultado no console.

// // Array de objetos e conversão para JSON
// const produtos = [
//     { nome: "Mouse", preco: 59.90 },
//     { nome: "Teclado", preco: 129.90 }
// ];

// const produtosJSON = JSON.stringify(produtos);
// console.log(produtosJSON);