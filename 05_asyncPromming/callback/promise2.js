const { pbkdf2 } = require('crypto');
const fs = require('fs');

function fun1() {
    let promise1 = new Promise((resolve,reject)=> {
        fs.readFile('./1.txt', 'utf8', (err, result) => {
            resolve(result);
        })
    });
    return promise1;
}

function fun2() {
    return new Promise((resolve,reject)=> {
        fs.readFile('./2.txt', 'utf8', (err, result) => {
            resolve(result);
        })
    });
}

function fun3() {
    return new Promise((resolve,reject)=> {
        fs.readFile('./3.txt', 'utf8', (err, result) => {
            resolve(result);
        })
    });
}

fun1().then((data1)=>{
    console.log(data1);
    return fun2();
}).then((data2)=>{
    console.log(data2);
    return fun3();
}).then((data3)=>{
    console.log(data3);
})
