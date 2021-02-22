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
// user.create({ name: 'zhang', age: 12, password: '123456', hobbies: ['sing', 'dance'] },
//     { name: 'wang', age: 23, password: '654321', hobbies: ['say', 'pao'] },
//     { name: 'li', age: 45, password: '654321', hobbies: ['say', 'pao'] },
//     { name: 'zhao', age: 24, password: '654321', hobbies: ['say', 'pao'] },
//     { name: 'gao', age: 522, password: '654321', hobbies: ['say', 'pao'] });

//更新一条
// user.updateOne({name: "zhang"},{name: "zhangSan"}).then((result)=>{
//     console.log(result);
// })

//更新多条:{} => 所有
user.updateMany({}, {"age": 99}).then((result)=>{
    console.log(result);
})
