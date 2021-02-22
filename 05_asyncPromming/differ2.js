//区别2：代码执行顺序不同
//同步API从上自下执行，前面代码会阻塞后面代码的执行。

// for(var i=0;i< 100000;i++){
//     console.log(i);
// }
// console.log('after');


//异步API不会等待API执行完后，再去执行后面的代码
console.log('start');
setTimeout(()=>{console.log('after 2 sec');},2000);
setTimeout(()=>{console.log('after 0 sec');},0);
console.log('end');
// => 执行顺序： start => end => after 0 sec => after 2 sec


//同步代码执行区域，异步代码执行区，回调函数队列！
//先执行同步，再执行异步！见视频讲解！