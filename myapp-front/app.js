'use strict'
require('./db/config')
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongodb = require('mongoose');
var estacionamento = require('./routes/crud-estacionamento/api')('schema-estacionamento', 'estacionamentos')
var funcionario = require('./routes/crud-funcionario/api')('schema-funcionario', 'funcionarios')
var usuario = require('./routes/crud-usuario/api')('schema-usuario', 'usuarios')
var gerencia = require('./routes/crud-gerente/api')('schema-gerente', 'gerentes')
var login = require('./routes/login')
var router = express.Router();

var app = express();



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// console.log(path.join(__dirname + '/views/index.html'))
app.use('/api/usuario', usuario)
app.post('/autentica', login) // autentica
app.use(require('./routes/verifica-toke')) // verifica o token 
app.use('/api/funcioario', funcionario)
app.use('/api/estacionamentos', estacionamento);
app.use('/api/gerente', gerencia);


app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;