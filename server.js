//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello World\n');
//}).listen(1337, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');

var express = require('express');
var app = express();
var socketIO = require('socket.io');
var server = require('http').Server(app);

// API key: API-BRXMAGUSCGG0GRCZYRILSUGWMG


var io = socketIO(server);

//app.get('/', function(req, res){
//    res.send('hello world');
//});
app.use(function(req, res, next) {
    res.setHeader("AnyHeader", "*");
    return next();
});

app.use(express.static(__dirname + '/www'));

//io.on('connection', function (socket) {
//
//    socket.on('message', function (message) {
//        socket.get('pseudo', function (error, name) {
//            var data = { 'message' : message, pseudo : name };
//            socket.broadcast.emit('message', data);
//            console.log("user " + name + " send this : " + message);
//        })
//    });
//
//});

server.listen(3000);