//同步API和异步API的区别1：
// 同步API可以从返回值拿到API执行的结果;
// 异步API是不行的;

//同步
function sum(num1, num2) {
    return num1 + num2;
};
console.log(sum(10,2));

//异步
function getMsg() {
    setTimeout(function() {
        return {msg: 'Hello World'}
    },2000)
};
console.log(getMsg());       //undefined


//下面函数会返回undefined
// function add() {
// }
// console.log(add());

/////////////////////////////////////////////////////////////////
//怎样获得正确的异步API的返回的值呢？
// => 通过回调函数
function get(callback) {
    callback('123');
}
get(function(num) {
    console.log('yes');
    console.log(num);
})

// callback = function(num) {
//     console.log(num);
// }
// callback('123');

//
function getMsg1(callback) {
    setTimeout(function() {
       callback({
           msg: 'hello'
       })
    },2000)
};
getMsg1(function(data){
    console.log(data);
})
