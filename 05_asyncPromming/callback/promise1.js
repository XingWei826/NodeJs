//promise: 解决回调地狱的问题！
const fs = require('fs');
let promise = new Promise((resolve,reject)=>{
    fs.readFile('./3.txt','utf8',(err,result)=>{
        if(err != null) {   //读取文件失败
            reject(err);    
        } else {        
            resolve(result);
        }
    })
});
promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

//resolve和reject本质上也是函数
//调用reject函数就相当于调用.catch里面的这个函数;
//调用resolve函数就相当于调用.then里面的这个函数;