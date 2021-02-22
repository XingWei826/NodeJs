const express = require('express');
const path = require('path');
const server = express();
//静态资源的访问
server.use(express.static(path.join(__dirname,'public')));

server.get('/first',(req,res) => {
    res.send('Hello,Ajax!');
});


server.listen(3000);
console.log('server start successful!');