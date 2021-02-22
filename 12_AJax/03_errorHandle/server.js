const express = require('express');
const path = require('path');
const server = express();


server.use(express.static(__dirname));

server.get('/error',(req,res) => {
    // console.log(abc);    //此时将返回500状态码给客户端
    res.status(400)
        .send('not ok');
});



server.listen(3000);
console.log('server start successful!');