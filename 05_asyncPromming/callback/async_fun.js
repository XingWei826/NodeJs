//异步函数：
    //异步函数是异步编程的终极解决方案，它可以让我们将异步代码改写成同步的形式，
    //让代码不再有回调函数嵌套，使代码更加清晰明了！
    //const fun = async () => {}
    //async function fun() {}
    //===>异步函数默认返回的是promise对象
//await：
    //1.只能出现在异步函数中；
    //2.await promiseObject： 可以暂停异步函数的执行，等待promise对象返回结果后再向下执行函数；
        // ===> 此时，就把异步代码写成同步函数的形式了！

async function fun() {
    throw 'ERROR';      //抛出异常
    return 123;
}
// console.log(fun());
fun().then(function(data) {     //获取异步函数执行结结果
    console.log(data);      
}).catch(function(error) {      //捕获异常
    console.log(error);
})

/////////////////////////////////////////////////////////
//模拟之前的顺序读写文件1,2,3
async function fun1() {
    return 'p1';
}
async function fun2() {
    return 'p2';
}
async function fun3() {
    return 'p3';
}

async function run() {
    let data1 = await fun1();       //等待fun1()返回对象后再去执行下面的语句
    let data2 = await fun2();
    let data3 = await fun3();
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

run();














