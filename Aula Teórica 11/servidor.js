var http = require('http');
var express = require('express');

var app = express();
app.use(express.static('./public'));

var server = http.createServer(app);

server.listen(8080);

console.log('Servidor rodando...');