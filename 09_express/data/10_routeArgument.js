const express = require('express');
const body_parser = require('body-parser');
const server = express();

server.get('/index/:id/:name/:age',(req,res)=>{
    res.send(req.params);
})

server.listen(3000);
console.log('server start successful!');