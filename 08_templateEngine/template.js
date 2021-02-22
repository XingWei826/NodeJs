/* 
    模板引擎是第三方模块;
    更加友好的拼接字符串，使项目代码更加清晰，更易于维护。
    art-template
*/
const template = require('art-template');
const path = require('path');
//获取模板路径
const views = path.join(__dirname , 'views' , 'index.art');
//替换模板中的数据(第二个参数)
    //返回替换后的整个art中的内容
const html = template(views, {
    name: 'ZhangSan',
    age:20
});
console.log(html);