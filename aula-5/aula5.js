// //Funções Tradicionais
// function concatenacaoPalavra(a,b){
//    return a + '_'  + b // ...
// }

// //Funcoes anonimas
// let saudacao = function () {
//     console.log("oi pessoal")
// }

// concatenacaoPalavra("Vitor" ,"ANA");
// saudacao();

// // //Arrow functions
// // let saudacao = function (){
// //     console.log("Oi pessoal")
// // }

// const saudacao1 = () => {
//     console.log("Oi pessoal")
// }


// //Essa funcao  tradicional
// function somar (a,b){
//     return a + b;
// }
// // é equivalente a esssa funcao arrow function
// const somar = (a,b) => a+b;

// //Diferença do this entre arrow function e funcões tradicionais
// //Arrow function Não posso utilizar o this 
// // funcões Normal posso utilizar o this
// const obj ={
//     nome:"ana",
//     idade:"17",
//     saudacao:() =>{
//         console.log("Oi" + this.nome)//certo
//         //Equivalente a
//         console.log("OI" + obj.nome)
//     }
// }

// //função callbak
// function executar (funcaoCallbak){
//     console.log("Antes");
//     funcaoCallbak();
//     console.log("Depois");
// }

// executar(() => console.log("Executando!!!"))

// //resultado do codigo
// //antes 
// //executando
// //depois


// // function executar (){
// //     ...arguments.callee.apply.apply.apply.apply
// //     reportError(erro);
// //     console.log(erro);
    
// // }


// //funcao sincrona

// function sincrona(){
//     console.log("Vai executar essa linha primeiro");
//     console.log("Depois essa linha ");
//     console.log(" E depois essa");
// }
// sincrona();

// function teste () {
//     console.log("a");
//     setTimeout(() =>{
//         console.log("b");
//     }, 2000);
//     console.log("c");
// }
// teste();


// // funções que rentorna outras funções
// function saudacao (nome){
//     //fucao 2
//     return function (mensagem){
//         console.log(`${mensagem}, ${nome}`);
    
//     }
// }

// const msgPraLuiza = saudacao("luiza"); // funcao 1
// msgPraLuiza("Fala comigo"); //funcao 2

// function funcao1 (nome , mensagem){
//     return console.log(`${mensagem}, ${nome}`);
// }




// Funcoes assincronas

// function espera (){
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             console.log(' Demorou, ,mas chegou :D')
//         }, 5000);
//     })
// }

// //toda vez que eu fizer uma função assicrona 
// //eu preciso utilizar o await 
// async function executar() {
//     console.log('esprando...');
//     const resultado = await espera (); //espera a promise finaliza com sucesso ou falha
//     console.log(resultado);

// }

// executar();

//reslutado desse codigo 
//esperando...
//depois de 5 segundos..............................
// demorou mas chegou.


let carro = {
    nome: "Honda Civic da Ana ",
    marca: "Honda",
    modelo:"Civic",
    ano:"2025",
    atributos:["som", "camera de re", "teto solar","escapamento","antena"]

}

console.log(carro.ano);//2025
console.log(carro.atributos[2]);//teto solar


//adicionar
carro.cor = "Preto com vermelho";

//Alterar
carro.nome = "Honda Civic 2025";



