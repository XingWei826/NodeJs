//验证规则
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testData', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('connect server success!'); })
    .catch((error) => { console.log(error, 'connect server failed!'); });
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'the name filed must to be write!'],      //此时这个字段必须赋值，否则ERROR
                                                                //数组里的第二个表示自定义ERROR信息
        minlength: [2,'不能小于2个字符'],   //针对String类型
        maxlength: [5,'不能大于5个字符'],
        trim: true,
    },
    age: {
        type: Number,
        min: 2,                             //针对数值类型
        max: [8,'传入的数值过大！'],
    },
    publishDate: {
        type: Date,
        default: Date.now                      //默认值
    },
    category: {
        type: String,   
        enum: {
            values: ['c++','css','html'],              //只能取指定的值
            message: '必须是指定值之一'
    }},
    author: {                                   //自定义规则
        type: String,
        validate: {
            validator: (v)=> {
                //返回true，验证成功; 返回false,验证失败
               return  v && v.length > 4;
            },
            //自定义错误信息
            message: '传入的值不符合自定义规则'
        }
    }
});
const user = mongoose.model('User', userSchema);
user.create({name: '   fsfa  ',age: 6, category: 'c+', author: 'bd'} ).then((result)=>{
    console.log(result);
}).catch((error)=>{
    // console.log(error);
    const errors = error.errors;
    for(var temp in errors) {
        console.log(errors[temp]['message']);
    }
});
 

/* 
    验证：
        required,
        minlength,maxlength,
        min,max,
        enum,trim,
        validate,default
*/