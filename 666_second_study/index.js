const url = require('url');
var path = "http://www.baidu.com?name=zhang&age=23";
console.log(url.parse(path,true));
var temp = url.parse(path,true).query;
console.log(temp);

const fs = require('fs');
fs.readFile()
