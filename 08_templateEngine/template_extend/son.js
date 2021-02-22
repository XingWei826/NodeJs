/*  
    模板继承：
        使用模板继承可以将网站HTML骨架抽离到单独的文件之中，
        其他页面模板可以继承模板骨架文件。
*/

const template = require('art-template');
const path = require('path');
const views = path.join(__dirname,'son.art');
const html = template(views,{
    msg: '首页模板',
});
console.log(html);
