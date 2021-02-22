/* 
    server.locals对象：
        server.locals.user = [{
            name: 'Zhang',
            age: 20
        },{
            name: 'Wang',
            age: 32
        }];
    将变量设置到server.locals对象下面，这个数据在所有的模板中都可以获取到！
*/

const express = require('express');
const path = require('path');
const server = express();

server.engine('art',require('express-art-template'));   
server.set(path.join(__dirname,'views'));           

//locals属性：
server.locals.users = [{
    name: 'Zhang',
    age: 23
},{
    name: "Wang",
    age: 42
}];

//3
server.get('/home',(req,res)=>{                        
    res.render('home.art',{                            
        msg: '首页',    
    })
})
server.get('/list',(req,res)=>{                        
    res.render('list.art',{                            
        msg: '列表页',    
    })
})

server.listen(3000);
console.log('server start successful!');