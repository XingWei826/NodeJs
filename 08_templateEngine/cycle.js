/* 
    循环语法：
        标准语法：
            {{each Array}}  //当前循环的Arrays数组
                {{$index}} {{$value}}
            {{/each}}
        原始语法： 
            <% 
                for(...) 
                    {%> ... <%} 
            %>
///////////////////////////////////////////
        <%
                for(var i = 0;i <Array.length;i++) { %>
                        <li>
                            <%=Array[i].name %>
                            <%=Array[i].age %>
                            <%=Array[i].sex %>
                        </li>
            <% } 
        %>
*/

const template = require('art-template');
const path = require('path');
const views = path.join(__dirname,'views','cycle.art');
const html = template(views,{
    Array: [{
        name: 'Zhang',
        age: 20,
        sex: 'man'
    },{
        name: 'Wang',
        age:34,
        sex: 'woman'
    },{
        name: 'Li',
        age: '21',
        sex: 'gay'
    }]
});
console.log(html);