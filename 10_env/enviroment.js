/* 
    开发环境：项目运行在开发人员的电脑上，项目所处的环境就是开发环境。
    生产环境：项目开发完成以后，要将项目放到真实的网站服务器电脑中运行。
*/
// console.log(process.env);   //获取所有环境变量
const express = require('express');
const morgan = require('morgan');
const server = express();
if(process.env.NODE_ENV == 'development') {
    // console.log('开发环境');
    server.use(morgan('dev'));  //在开发环境汇中，将客户端发送到服务器的请求信息打印到控制台中

} else{
    console.log('生产环境');
}


server.listen(3000);
console.log('server start successful!');