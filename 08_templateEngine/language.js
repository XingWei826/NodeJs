/* 
    语法：
        标准语法：{{数据}}
        原始语法：<%= 数据 %>
*/
const template = require('art-template');
const path = require('path');
const views = path.join(__dirname,'views','language.art');
const html = template(views,{
    name: 'WangWu',
    age: 20,
    content: '<h1>我是标题(解析)</h1>',
});
console.log(html);