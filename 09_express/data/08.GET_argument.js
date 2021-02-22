/* 
    GET参数的获取： query;
        http://localhost:3000/index?name=zhang&age=29
*/

const express = require('express');
const server = express();

server.get('/index',(req,res)=>{
    //获取GET请求参数
    res.send(req.query);    //{"name":"zhang","age":"29"}
})

server.listen(3000);
console.log('server start successful!');