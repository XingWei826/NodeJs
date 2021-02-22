/* 
    server.use():
        匹配所有的请求方式，可以直接传入请求处理函数，代表接收所有的请求。
        server.use((req,res,next) =>{
            console.log(req.url);
            next();
        })
        server.user(...)的第一个参数也可以传入地址，代表不论什么请求，
        只要是这个请求地址就接收这个请求。
*/

const express = require('express');
const server = express();

//接收所有请求的中间件
server.use((req,res,next)=> {
    console.log('请求走了server.use中间件');
    next();
})
server.get('/request',(req,res,next)=>{
    console.log('请求走了app.use /request中间件');
    next();
});
server.get('/list',(req,res)=>{
   res.send('/list');
})

server.get('/request',(req,res)=>{
    res.send(req.name);
})


server.listen(3000);
console.log('server start success!');