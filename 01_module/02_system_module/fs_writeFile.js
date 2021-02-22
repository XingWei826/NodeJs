const fs = require('fs');   
const data = 'Hello World!';
fs.writeFile('./test.txt',data, (err) => {
    //如果文件写入失败，err是一个对象，包含错误信息；
    //如果文件写入成功，err为null；
    //doc是写入文件的内容
    if(err != null) {
        console.log(err);
        return ;    //写入失败
    }
    console.log('文件写入成功');
})
