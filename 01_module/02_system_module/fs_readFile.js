const fs = require('fs');   //获取系统文件模块
fs.readFile('../../HelloWorld.js','utf8',(err,doc) => {
    //如果文件读读取错误，err是一个对象，包含错误信息；
    //如果文件读取正确，err为null；
    //doc是读取文件的内容
    console.log(err);
    console.log(doc);
})
