const express = require('express');
const path = require('path');
const server = express();

server.engine('art',require('express-art-template'));   //'art': 模板后缀
server.set(path.join(__dirname,'views'));               //设置模板目录
server.set('view engine','art');                        //'view engine':设置默认模板后缀（后续可省略后缀）
server.get('/home',(req,res)=>{                        
    res.render('index.art',{                                //渲染模板(.art可省略)
        msg: 'Hello World! express_art_template',    
    })
})

server.listen(3000);
console.log('server start successful!');