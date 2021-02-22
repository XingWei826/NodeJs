const add = (num1,num2) => num1 + num2;
//导出模块：法一
// exports.add = add;

//法二：
const x = 100;
exports.x = x;
module.exports.add = add;

module.exports = {
    name: 'zhangSan'
}
/* 
    两种方法的联系：
        exports 是 module.exports的别名(地址引用关系),
        导出对象最终以module.exports为准！
*/

