/* 
    模块化路由
*/
const express = require('express');
const server = express();
const router = express.Router();    //create router
server.use('/home',router);         //为路由对象匹配请求路径
                                    //当请求路径为/home时，就使用router进行处理

router.get('/index',(req,res)=>{     //创建二级路由
    res.send('Welcome to Home page!');//当请求路径为/home/index时,触发此路由
})

server.listen(3000);
console.log('server start successful!');
