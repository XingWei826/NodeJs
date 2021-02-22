const http = require('http');            //获取网站服务器模块
const app = http.createServer();        //创建服务器对象
const url = require('url');             //处理URL地址
app.on('request', (req, res) => {
    // res.writeHead(400);                  //状态(400,500,,,)
    //1. console.log(req.method);            //获取请求方式
    // if (req.method == 'POST') {
    //     res.end('post');
    // } else if (req.method == 'GET') {
    //     res.end('get');
    // }


    //4.
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    })

    // 2. console.log(req.url);                 //获取请求地址
    let Object = url.parse(req.url,true);
    console.log(req.url);  
    console.log(Object.pathname);
    // if (req.url == '/index' || Object.pathname == '/') {
    if (Object.pathname == '/index/' || Object.pathname == '/') {
        res.end('<h1>welcome to index 你好</h1>');
    }
    else if (Object.pathname == '/list/') {
        res.end('welcome to list');;
    } else {
        res.end('not found');
    }

    //3.
    // console.log(req.headers);
    // console.log(req.headers['host']);   //获取指定字段

    //5.获取请求参数
    console.log(req.url);
    let obj = url.parse(req.url,true).query;   //true,将参数解析成对象
    console.log(obj);
    console.log(obj.name);
    console.log(obj.age);

    // res.end('<h1>hi, i am server!</h1>');
})                                          //当有客户端请求到来时，进行响应处理
app.listen(3600);
console.log('server start!');

/*
    请求报文：
        请求方式：
            GET：请求数据
            POST：发送数据
        req.headers:    获取请求报文
        req.url：       获取请求地址
        req.method:     获取请求方法

    响应报文：
        200: 请求成功
        404：请求的资源没有被找到
        400：客户端请求有语法错误
        500：服务器端错误
        内容类型：
            text/plain
            text/html
            test/css
            application/javascript
            image/jpeg
            application/json
*/

/*
    一个ERROR：
    events.js:291
      throw er; // Unhandled 'error' event
      ^
Error [ERR_STREAM_WRITE_AFTER_END]: write after end
    at writeAfterEnd (_http_outgoing.js:653:15)
    at ServerResponse.end (_http_outgoing.js:773:7)
    at Server.<anonymous> (D:\Users\XingWei\Desktop\Node.JS\02_Server\server.js:12:13)
    at Server.emit (events.js:314:20)
    at parserOnIncoming (_http_server.js:782:12)
    at HTTPParser.parserOnHeadersComplete (_http_common.js:119:17)
Emitted 'error' event on ServerResponse instance at:
    at writeAfterEndNT (_http_outgoing.js:712:7)
    at processTicksAndRejections (internal/process/task_queues.js:81:21) {
  code: 'ERR_STREAM_WRITE_AFTER_END'

  ===》解决方案：原因是开启了多个res.end()函数！
*/
