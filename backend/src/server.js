
const express = require('express');
const mongoose = require('mongoose');
const SessionController = require('./Controllers/SessionController');

const Routes = require('./Routes');

//criando o servidor
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack90-sh3ds.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/*
    Informa ao node que estamos trabalhando com dados prioritariamente no formato json.
*/
app.use(express.json());
//usa as rotas definidas no 'arquivo routes.js'
app.use(Routes);

Routes.post('/sessions', SessionController.store);


//a aplicação será executada na porta 3333
app.listen(3333);
