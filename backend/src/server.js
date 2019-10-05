//DICA: use 'const' para variaveis que não alterarção o seu valor

//importando a bliblioteca express
const express = require('express');

//criando o servidor
const app = express();

/*
cria uma rota e uma requisição do tipo get
Nesse exemplo usa-se arrow function mas o codigo poderia ser escrito assim:

app.get('/', function(req, res){
    return res.send('Hello World');
});

req - são os dados que o cliente envia para o servidor
res - é a resposta que o servidor envia para o cliente
*/
app.post('/', (req, res) => {
    return res.json({ message: 'Hello World!'});
});

//a aplicação será executada na porta 3333
app.listen(3333);
