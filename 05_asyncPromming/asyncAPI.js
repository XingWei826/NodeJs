// 异步API: 当前API的执行不会阻塞后续代码的运行
console.log('before');
setTimeout(function() {     //setTimeout就是一个异步API
    console.log('last');
},2000);
console.log('after');