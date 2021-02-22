/* 
    config:
        1. 向模板中导入变量 template.defaults.imports.变量名 = 变量值;
        2. 设置模板根目录 template.defaults.root = 模板目录
*/
const template = require('art-template');
const path = require('path');
const dateformat = require('dateformat');
//导入模板变量
template.defaults.imports.self = dateformat;
//设置模板根目录
template.defaults.root = path.join(__dirname);
//配置模板的默认后缀
template.defaults.extname = '.art';
const html = template('config',{
    time: new Date(),
});
console.log(html);
