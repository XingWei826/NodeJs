/* 
    POST参数的获取：
        Express中接收post请求参数需要借助第三方包：body-parser;

*/
const express = require('express');
const body_parser = require('body-parser');
const { RSA_NO_PADDING } = require('constants');
const server = express();
//拦截所有请求
    // extended:
        // false: 方法内部使用querystring模块处理请求参数的格式
        // true:方法内部使用第三方模块qs处理请求参数的格式
server.use(body_parser.urlencoded({extended: false}));
server.post('/add',(req,res)=>{
    //接收POST请求参数
    res.send(req.body);
})

server.listen(3000);
console.log('server start successful!');

