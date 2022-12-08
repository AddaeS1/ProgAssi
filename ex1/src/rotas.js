const express = require('express');

 

const rotas = express();

rotas.get('/produtos');
rotas.get('/produtos/:idProduto');
rotas.get('/produtos/:idProduto/frete/:cep');



module.exports = rotas;