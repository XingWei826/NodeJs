const http = require('http');         
const app = http.createServer();     
const querystring = require('querystring');   //处理请求参数模块
app.on('request', (req, res) => {
    //post 参数是通过事件的方式接受的
    //data：当请求参数传递的时候发出data事件
    //end：当参数传递完成的时候发出end事件
    let postParams = '';
    req.on('data',(params) => {
        postParams += params;
    });
    req.on('end',()=> {
        // querystring.parse(postParams);
        // console.log(postParams);
        console.log(querystring.parse(postParams));

    })
    res.end('ok');
});
app.listen(3000);
console.log('server启动成功！');
