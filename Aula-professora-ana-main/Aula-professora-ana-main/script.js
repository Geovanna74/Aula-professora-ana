// 3.Solicite ao usuário que digite um CPF e verifique se ele tem exatamente 11 dígitos.Caso contrário,exiba uma mensagem personalizada explicando o erro.

// 4. Converta os dados abaixo:

// Atividade 2
let n1 = '150';
console.log(parseInt (n1))
let n2 = '18';
console.log(String(n2))
let n3 = '20.99';
console.log(parseFloat(n3))
let n4 = '010';
console.log(parseInt(n4))

// 5. Qual valor de cada variável abaixo:
// a) 
// let soraia = 0;
// soraia++;
// R:1

// // b)
// let bichinho = 5;
// bichinho++;
// R:

// // c)
// let mateus = 40;
// mateus--;

// // d)
// let numero = 10;
// numero += 5;

// // e)
// let saldo = 500;
// saldo -= 200;

// // f)
// let b1 =9;
// b1 *= 2;

// // g)
// let aux = 1;
// aux = aux + 9;

// // h)
// let ax = 5;
// ax = ax - 5;


// 6. Crie um objeto aluno com as propriedades nome, idade, notaFinal e aprovado(boolean).
let nome = "Aluno";
let idade = 30;
let notaFinal = 6;
let aprovado = true;

// 7. Com a atividade acima, crie uma string informando o nome, idade, nota e se foi aprovado.
let str = "";
 str += `o nome do aluno aprovado é ${objeto.nome}`;
 str += `a idade do aluno é ${objeto.idade}`;
 str += `a nota final do aluno  é ${objeto.notaFinal}`;
 str += `o aluno foi ${objeto.aprovado ? "APROVADO" : "REPROVADO"}`;

// 8. Faça uma calculadora da sua idade.

// 9. Converta graus Celsius para Fahrenheit com a fórmula F=(C * 9/5)+32.
// a) 18°C
// b) 5°C
// c) 27°C
// d) 0
// e) 100°C
// f) 44°C
// g) -4°C
// h) 33°C



// 3.
// Entrada 
let cpf = prompt("Digite o numero do CPF do usuario");
// convertendo para string
let strCpf = String(cpf);
// verifica 
if(cpf.length === 11){
    alert('Perfeito!')
}
// Contrario do if
else{
   alert("Opa, parceiro! seu CPF está Faltando digito.")
}

