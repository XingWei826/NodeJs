const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const server = express();


server.use(express.static(__dirname));

//passGETArgs.html
server.get('/get',(req,res) => {
    res.send(req.query);
});
//passPOSTArgs.html
server.post('/post',(req,res) => {
    res.send(req.body);
});
//passJsonToServer
server.use(bodyParser.json());
server.post('/json',(req,res) => {
    res.send(req.body);
});


server.listen(3000);
console.log('server start successful!');