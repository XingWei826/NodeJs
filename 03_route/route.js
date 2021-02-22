const http = require('http');
const url = require('url');
const server = http.createServer();
//实现路由：请求什么就响应什么
server.on('request',(req,res)=> {
    //获取请求方式
    const method = req.method;
    //获取请求地址
    const pathname = url.parse(req.url).pathname;
    //
    res.writeHead(200, {
        'context-type': 'text/html;charset=utf8'    
    })
    //
    if(method == 'GET') {
        if(pathname == '/' || pathname == '/index') {
            res.end('welcome to home===> GET');
        } else if(pathname == '/list') {
            res.end('welcome to list===> GET')
        } else {
            res.end('not found===>GET')
        }
    } else if(method == 'POST') {
        if(pathname == '/index/' || pathname == '/') {
            console.log('welcome to home===>POST');
        } else if(pathname == '/list/'){
            console.log('welcome to list===>POST');
        } else {
            console.log('not found===>POST');
        }
    }
})
server.listen(3000);
console.log('server 启动成功');