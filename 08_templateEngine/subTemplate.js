/*  
    子模板语法：
        标准语法：
            {{include '模板路径'}}
        原始语法：
            <% include('模板路径') %>
*/

const template = require('art-template');
const path = require('path');
const views = path.join(__dirname,'views','subTemplate.art');
const html = template(views,{
    msg: '我是首页',
});
console.log(html);