/* 
      条件判断语法：
    标准语法：
        {{if 条件}}
             ... 
        {{else if 条件}}
            ...
        {{else}}
            ...
    原始语法：
        <%
            if(条件)
                {%> ... <%}
            else if(条件) 
                {%> ... <%}
            else
                {%> ... <%}
        %>
*/
const template = require('art-template');
const path = require('path');
const views = path.join(__dirname,'views','addtional.art');
const html = template(views,{
    name: 'LongDa',
    age: 17,
});
console.log(html);