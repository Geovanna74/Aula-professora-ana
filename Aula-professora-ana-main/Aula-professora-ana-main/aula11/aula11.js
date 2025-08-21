const cep = `88020-364`;

//fetch API - Nativo Javascript
fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(res => res.json()) //converte para obejto
.then(data => console.log(data)) //recebe os dados convertidos e mostra os dados
.catch(err => console.log(err)) //se der erro, captura e mostra o erro



// ######################################################################################################

//Funcao Ler os dados do arquivo
function lerDados(arquivo){
    //retorna os dados E CONVERTE PARA OBEJTO 
    return JSON.parse(fs.readFile(arquivo, 'utf-8')); 
}

//Salvar os dados no arquivo
function salvarDados(arquivo){
    // USA A FUNCAO DE ESCREVER NO ARQUIVO, PASSANDO COMO PARAMETROS O ARQUIVO E UM METODO QUE CONVERTE O OBEJTO PARA JSON
    fs.writeFileSync(arquivo, JSON.stringify(dados, null, 2));
}

const http = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');
const port = 3000;

const server = http.createServer((req,res) => {
   res.setHeader("Content-type","application/json");
   if(req.method === "GET" && req.url === '/dados'){
    const dados = lerDados('usuarios.json'); //retorna os dados do json
    res.writeHead(200);
    res.end(JSON.stringify(dados));
   }else if(req.method === "POST" && req.url === "/dados"){
       let body = '';
       req.on('data',chunk => {
        body += chunk.toString();
       });

       req.on('end', ()=> {
        try{
         const novoDado = JSON.parse(body)
          
         //le o json existente
         const dados = lerDados('usuarios.json');
          
         //Gera o id
         novoDado.id = 99;
           
         //Adiciona o novos dados no json
         dados.push(novoDado);
         
        //Chama funcao salvar dados
         salvarDados('usuarios.json', dados);

         res.writeHead(201);
         res.end("dados adicionados com su")
        }catch(erro){
            console.log("Ocorreu um erro: ", erro);
            res.writeHead(400);
        }
       })
   }else{
    res.writeHead(404);
    res.end("Pagina não existe.")
   }
})

server.listen(port, () => {  //servido ira roda na porta definida
    console.log(` Servidor rodando na porta ${port} . Só abri localhost:${port}/`)
});

const url = `http://localhost:${port}/dados`;

const objNovoDado = {
    nome: "LUNA ",
    idade:19,
    salario:250.00
}
fetch(url,{
    method: "POST",
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(objNovoDado)
})
.then(response =>{
    if(!response)
        console.log("Errrorrrrr");

    return response.json();
})
.then(data => console.log("Resposta do servidor",data))
.catch(error =>{
    console.log('Errror: ', error)
})
