/*
    需求：如果异步API后的代码执行依赖于当前异步API的执行结果，
    但实际上后续后序代码执行的时候异步API还没有返回结果，怎么解决？
    fs.readFile('./demo.txt',(err,result)=>{});
    console.log('打印出result')

*/

//回调地狱
const fs = require('fs');
fs.readFile('./1.txt', 'utf8', (err, result1) => {
     console.log(result1);
    fs.readFile('./2.txt', 'utf8', (err, result2) => {
        console.log(result2);
        fs.readFile('./3.txt', 'utf8', (err, result3) => {
            console.log(result3);
        })
    })
})