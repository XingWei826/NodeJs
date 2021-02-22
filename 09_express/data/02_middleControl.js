/* 
    中间件：
        就是一堆方法，可以接受客户端发来的请求，可以对请求做出响应，
        也可以将请求继续交给下一个中间件继续处理。
    可以针对同一个请求设置多个中间件，对同一个请求进行多次处理；
    默认情况下，请求从上到下依次匹配中间件，一旦匹配成功，就终止匹配！
    可以调用next方法将请求的控制权交给下一个中间件，直到遇到结束请求的中间件。
*/
const express = require('express');
const server = express();


server.get('/request',(req,res,next)=>{
    req.name = 'ZhangSan';
    next();     //请求继续向下执行
});
server.get('/request',(req,res)=>{
    res.send(req.name);
})


server.listen(3000);
console.log('server start success!');