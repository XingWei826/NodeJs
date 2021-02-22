const express = require('express');
const path = require('path');
const fs = require('fs');
const server = express();


server.use(express.static(__dirname));

server.get('/cache',(req,res) => {
    fs.readFile('./test.txt',(err,result)=>{
        res.send(result);
    })
});



server.listen(3000);
console.log('server start successful!');