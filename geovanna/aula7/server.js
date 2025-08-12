const http = require("http"); //modulo interno do node
const port = 3000; //porta onde o node/servidor irá rodar

const server = http.createServer((req,res) => {
    res.writeHead(200, {"content-type": "text/plain"}); //defino o cabeçalho
    res.write("Olá, servidor em Nodejs está fucionado. :D"); //Corpo
    res.end();
})

server.listen(port, () => {  //servido ira roda na porta definida
    console.log(` Servidor rodando na porta ${port}`)
})

const fs = require("fs"); //importando modulo interno do node chamado File System
//lendconso arquivos
// fs.readFile('dados.text','utf-8', (err, data) =>{ //chamando o mentodo para ler meu arquivo
//     if(err) //se der erro vai aparecer no console
//         console.log('Erro:',err);

//     console.log(data); //nessa linha irá mostra os dados do meu arquivo "dados.text"
// });

//Escrevedo no arquivo
fs.writeFile('dados.txt','Olá pessoal!!!', (erro)=>{
    if(erro)
        console.log("Houve um erro:" + (erro))

    console.log("Arquivo salvo com sucesso");
});

//Acrescenta dados no arquivo
fs.appendFile("dados.txt", "\n Linha acrescentada!!! acaba logooooooooo",(err)=>{
    if(err)
        console.log('Erro:' , err);
    console.log('Linha adicionada com sucesso.');
})