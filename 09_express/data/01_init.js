const express = require('express');
//create web server 
const server = express();
server.get('/',(req,res)=>{
    /* 
        send():
            1. send方法内部会检测响应内容的类型;
            2. send方法会自动设置http状态码；
            3. send方法会帮我们自动设置响应的内容类型及编码；
    */
    res.send('Hello World!');   //响应客户端
});
server.get('/list',(req,res)=>{
    res.send({
        "name": 'Zhang',
        "age": 20,
    })
})
server.listen(3000);
console.log('server start success!');