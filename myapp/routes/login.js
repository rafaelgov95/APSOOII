var jwt = require('jsonwebtoken')
var moment = require('moment')
var segredo = 'seusegredodetoken'
var Usuario = require('../modules/genericModel')(require('../modules/schema/schema-usuario'), 'usuarios');
var express = require('express')
var app = express();
var http = require('http')
app.set('superNode-auth', 'node-auth');

module.exports = function(req, res) {
    var email = req.body.email || '';
    var senha = req.body.senha || '';
    if (email == '' || senha == '') {
        return res.send(401);
    }
    //1
    Usuario.findOne({ email: email }, function(err, user) {
        if (err) {
            return res.end(401)
        }
        //2
        user.verificaSenha(senha, function(isMatch) {
            if (!isMatch) {
                return res.send(401);
            }
            //3

            var token = jwt.sign(user, app.get('superNode-auth'), {
                expiresIn: 60 * 60 * 24 //o token irá expirar em 24 horas
            });
            // http.post() {}
            //Aqui iremos retornar a informação do token via JSON:
            res.json({
                success: true,
                message: 'Token criado!!!',
                toke: token
            });
            // var expires = moment().add(7, 'days').valueOf();
            // var token = jwt.encode({
            //     iss: user.id,
            //     exp: expires
            // }, segredo);
            // //4
            // return res.json({
            //     token: token,
            //     expires: expires,
            //     user: user.toJSON()
            // });
            console.log(res.json)
        });
    });
};