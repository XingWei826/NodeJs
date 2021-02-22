// const { Logger } = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testData', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('connect server success!'); })
    .catch((error) => { console.log(error, 'connect server failed!'); });
//
const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}); 
const articleSchema = new mongoose.Schema({
    title: {
        type: String
    },
    //使用id将两个表进行关联；表示author这个字段和people这个表进行关联
    author: {
        type: mongoose.Schema.Types.ObjectId,   
        ref: 'people'
    }
});
//作者表格
const people = mongoose.model('People',peopleSchema);
//文章表格
const article = mongoose.model('Article', articleSchema);


//insert ...
// people.create({name: 'ZhangSan'}).then((result)=>{
//     console.log(result);
// })

// article.create({ title: '完美世界', author: '601418f667548808283e6b76' }).then((result) => {
//     console.log(result);           // 将作者的id值赋值给author字段
// })     


//联合查询
// article.find().then((result) => {
//     console.log(result);
// })

article.find()
    .populate('author')
    .then((result) => {
    console.log(result);
});