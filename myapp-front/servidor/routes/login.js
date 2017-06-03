var jwt = require('jsonwebtoken')
var moment = require('moment')
var segredo = 'seusegredodetoken'
var Usuario = require('../modules/genericModel')(require('../modules/schema/schema-usuario'), 'usuarios');
var express = require('express')
var app = express();
var path = require('path');
var http = require('http')
var app = express();

app.set('superNode-auth', 'node-auth');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')
module.exports = function(req, res) {
    var email = req.body.email || '';
    var senha = req.body.senha || '';
    if (email == '' || senha == '') {
        return res.send(401);
    }
    console.log("chego aq");
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

            var token = jwt.sign(user, app.get('superNode-auth'), {
                expiresIn: 60 * 60 * 24 //o token irá expirar em 24 horas
            });
            user.accessToken = token;
            // http.post() {}
            //Aqui iremos retornar a informação do token via JSON:
            // res.set({
            //     // 'Content-Type': 'text/plain',
            //     // 'Content-Length': '123',
            //     'x-access-token': token
            // })
            console.log(token);
            // res.send('Seja Bem-Vindo a API:');
            let getData = () => {

                return 'qualquer que seja o seu resultado aqui';
            }

            // app.get('/data', (req, res) => {
            // res.send(getData());
            // });
            // etID(function(err, user) {
            // res.render(path.join(__dirname + '/../views/logadox.html'), { ex: user });
            // });
            // res.sendFile(function(err, data) { path.join(__dirname + '/../views/logado.html') });


            // res.json({
            //     email: email,
            //     toke: token
            // });
            // next();

            var expires = moment().add(7, 'days').valueOf();
            // var token = jwt.encode({
            //     iss: user.id,
            //     exp: expires
            // }, segredo);
            // //4
            res.json({
                user: user.toJSON()
            });
            // console.log(res.json)
            // next();
        });
    });
};