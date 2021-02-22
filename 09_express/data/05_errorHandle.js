/* 
    错误处理中间件：
        在程序执行过程当中，不可避免的会出现一些无法预料的错误，
        比如文件读取失败，数据库连接失败。
        =>错误处理中间件是一个集中处理错误的地方。
        app.use((err,req,res,next)=>{
            res.status(500).send('服务器发生未知错误！');
        })
*/

const express = require('express');
const server = express();
const fs = require('fs');

//
server.get('/index',(err,res,next)=>{
    // throw new Error('发生未知错误！');
    fs.readFile('./01_init.js','utf8',(err,request)=>{
        if(err) {
            next(err);
        } else {
            res.send(request);
        }
    })
})

//错误处理中间件
server.use((err,req,res,next)=>{
    res.status(500)
        .send(err.message);
})

server.listen(3000);
console.log('server start success!');