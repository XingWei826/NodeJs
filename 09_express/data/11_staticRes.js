/* 
    Express：
        静态资源的处理：
            通过内置的express.static可以方便地托管静态文件，例如img,css,js,,,
*/
const express = require('express');
const path = require('path');
const server = express();

//实现静态资源的访问功能
server.use(express.static(path.join(__dirname,'staticRes')));

//在浏览器中输入访问的目标即可
// http://localhost:3000/test.html
// http://localhost:3000/images/ball.png

server.listen(3000);
console.log('server start successful!');