/* 
    在浏览器中的全局对象是window；
    在Node中的全局对象是global；
    Node中的全局对象有以下方法,可以在任何地方使用,global可省略！
        console.log();
        setTimeout();
        clearTimeout();
        setInterval();
        clearInterval();
*/

global.console.log('Hello global');
global.setTimeout(function() {
    console.log('123');
},2000);