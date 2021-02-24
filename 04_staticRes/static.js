const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const server = http.createServer();
//静态资源的访问
server.on('request',(req,res)=> {
    //获取用户请求路径
    let pathname =  url.parse(req.url).pathname;  
    pathname = (pathname == '/' ? '/first.html' : pathname);
    console.log(pathname);
    //将用户请求路径转换为实际的服务器的硬盘物理路径 
    let realpath = path.join(__dirname , 'public' + pathname);
    let type =  mime.getType(realpath); //获取资源的类型
    //读取文件，返回给用户
    fs.readFile(realpath,(error,result)=> {
        if(error) {
            res.writeHead(404, {
                'context-type': 'text/html;charset=utf8'    
            })
            res.end('not found the file!');
        }
        res.writeHead(200, {
            'content-type': type
        })
        res.end(result);    //将结果呈现给用户,它会执行html文件
        // console.log(result); //打印出来的是二进制数据 
    })
})
server.listen(3000);
console.log('server 启动成功');