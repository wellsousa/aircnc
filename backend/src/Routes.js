const express = require('express');

/*
    Objeto responsável pelo roteamento dento do express
*/
const Routes = express.Router();

Routes.post('/users', (req, res) => {
    return res.json(req.body);
});

module.exports = Routes;