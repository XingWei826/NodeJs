const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testData', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('connect server success!'); })
    .catch((error) => { console.log(error, 'connect server failed!'); });
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    password: String,
    hobbies: [String]
});
const user = mongoose.model('User', userSchema);

//删除一个：查找到匹配的文档中的第一个，并返回删除的这个对象
// user.findOneAndDelete({name: 'zhang'}).then((result)=>{
//     console.log(result);
// })

//删除多个：
user.deleteMany({}).then((result)=> {
    console.log(result);
})