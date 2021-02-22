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

/* user.create({ name: 'zhang', age: 12, password: '123456', hobbies: ['sing', 'dance'] },
    { name: 'wang', age: 23, password: '654321', hobbies: ['say', 'pao'] },
    { name: 'li', age: 45, password: '654321', hobbies: ['say', 'pao'] },
    { name: 'zhao', age: 24, password: '654321', hobbies: ['say', 'pao'] },
    { name: 'gao', age: 522, password: '654321', hobbies: ['say', 'pao'] });
 */


//find: 返回查询结果的数组
//查询所有文档（所有行）
// user.find().then((result)=>{
//     console.log(result);
// })
//指定条件
// user.find({_id: '6012d6149b6e754b6cd6f307'}).then((result)=>{
//     console.log(result);
// })


//findOne: 默认返回第一个文档（第一行）
// user.findOne({name: 'wang'}).then((result) => {
//     console.log(result);
// })

//20 < age < 40
// user.find({age: {$gt: 20, $lt: 40}}).then((result)=>{
//     console.log(result);
// })

//匹配包含：hobbies = sing
user.find({hobbies: {$in: ['sing']}}).then((result)=>{
    console.log(result);
})

//选择要查询的字段：不显示_id字段
user.find().select('name password -_id').then((result)=>{
    console.log(result);
})

//排序(默认升序)
// user.find().sort('age').then((result)=>{
//     console.log(result);
// })
//降序:-age
user.find().sort('-age').then((result)=>{
    console.log(result);
})

//跳过2条，限制数量为2个
user.find().skip(2).limit(2).then((result)=>{
    console.log(result);
})