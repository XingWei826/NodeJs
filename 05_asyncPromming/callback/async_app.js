const fs = require('fs');
//返回的这个 promisify方法 可以用来将一个异步API改造成promise对象
const promisify = require('util').promisify;
//调用promisify方法改造现有的异步API，使其返回promise对象，从而使其支持异步函数语法
const newReadFile = promisify(fs.readFile);

async function run() {
    let data1 = await newReadFile('./1.txt','utf8');
    let data2 = await newReadFile('./2.txt','utf8');
    let data3 = await newReadFile('./3.txt','utf8');
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

run();