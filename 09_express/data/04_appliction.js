/* 
    中间件的应用：
        1. 路由保护：客户端在访问需要登录的页面时，可以先使用中间件判断用户登录状态，
                    用户如果未登录，则拦截请求，直接响应，禁止用户进入需要登录的页面。
        2. 网站维护公告: 在所有路由的最上面定义接收所有请求的中间件，直接为客户端做出响应，网站正在维护中。
        3. 自定义404界面
*/

const express = require('express');
const server = express();

///////////////////////////////////////////////////////////////路由保护
// server.use('/admin',(req,res,next)=>{
//     // let isLogin = false;
//     let isLogin = true;
//     if(isLogin) {
//         next();
//     }else {
//         res.send('未登录,不能访问/admin页面');
//     }
// });
// server.get('/admin',(req,res)=>{
//     res.send('已登录,可以访问/admin页面');
// })


///////////////////////////////////////////////////////////////网站维护
// server.use((req,res)=>{
//     res.send('网站维护中......');
// })
// server.use('/admin',(req,res,next)=>{

// })
// server.listen(3000);
// console.log('server start success!');

///////////////////////////////////////////////////////////////404界面
server.use('/admin',(req,res,next)=>{
    next();
});
server.get('/admin',(req,res)=>{
    res.send('已登录,可以访问/admin页面');
})
server.use((req,res,next)=>{
    res.status(404);                //为客户端响应404状态码
    res.send('404, Not found!');
})



server.listen(3000);
console.log('server start success!');