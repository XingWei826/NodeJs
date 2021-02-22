const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testData',{ useNewUrlParser: true , useUnifiedTopology: true })
    .then(()=>{console.log('connect server success!');})
    .catch((error)=>{console.log(error,'connect server failed!');});
//创建集合规则（相当于创建表头/字段）
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});
//使用规则创建集合(相当于创建表格)
const Course = mongoose.model('Course',courseSchema);  //courses
//创建文档(相当于插入行)
/* 
法一：
const data1 = new Course({
    name: 'nodeJS',
    author: 'teacher',
    isPublished: true
});
data1.save(); 
*/
// 法二：
// Course.create({name:'JS',author:'student',isPublished:false},(error,doc)=> {
//     // console.log(err);    //错误对象
//     console.log(doc);
// });

Course.create({name:'JS',author:'student',isPublished:false})
    .then((doc)=> {
        console.log(doc);
    }).catch((err)=>{
        console.log(err);
    });