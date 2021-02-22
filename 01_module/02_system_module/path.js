//路径拼接： path.join('路径','路径',,,,,,)
const path = require('path');   //获取系统路径模块
const result = path.join('Destork','111','test');
const Result = path.join(__dirname,'test.txt'); //__dirname:当前路径的绝对路径
console.log(result);
console.log(Result);
console.log(__dirname);


