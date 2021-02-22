const { doesNotMatch } = require('assert');
const gulp = require('gulp');       //引用模块
gulp.task('FirstTask', (callback) => {        //建立任务
    console.log('gulp_hello World!');
    gulp.src('./src/test.html')     //获取要处理的文件
        .pipe(gulp.dest('./dest/csss'));  //输出到指定目录
    // done();  //不行
    callback(); //指示任务已经完成
});

/* 
    Gulp插件：
    gulp-htmlmin: html文件压缩
    gulp-csso：压缩css
    gulp-babel：JavaScript语法转换
    gulp-less：语法转换
    gulp-uglify：压缩混淆JavaScript
    gulp-file-include：公共文件包含
    browsersync：浏览器实时同步
*/

/////////////////////////////////////////////////////////////////////
/* 
    html任务：
    1.HTML文件压缩操作;
    2.抽取html文件中的公共代码。
*/
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
gulp.task('htmlminTask', (callback) => {
    gulp.src('./src/*.html')
        //引入公共文件
        .pipe(fileinclude())
        //压缩
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dest/html'));
    callback();
})
/* 
    此时在commn文件下将自动生成进行处理后的文件test.html,table.html.
*/

/////////////////////////////////////////////////////////////////////
/* 
    css任务：
        1.less语法转换;
        2.css压缩。
*/
const less = require('gulp-less');
const csso = require('gulp-csso');
gulp.task("lessTask", (callback) => {
    gulp.src(['./src/*.less', './src/*.css'])
        .pipe(less())   //less->css
        .pipe(csso())   //压缩css
        .pipe(gulp.dest('./dest/csso')) //输出
    callback();
})

/////////////////////////////////////////////////////////////////////
/* 
    js任务：
        1.es6代码转换；  es6 => 转化成浏览器支持的代码
        2.代码压缩。
*/
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const GulpClient = require('gulp');
gulp.task('jsTask', (callback) => {
    gulp.src('./src/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))                 //es6 => ...
        .pipe(uglify())     //压缩js代码
        .pipe(gulp.dest('./dest/js'))
    callback();
})

/////////////////////////////////////////////////////////////////////
//copy file
gulp.task('copyFileTask', async() => {
    gulp.src('./src/file1/*')               //将此目录下的所有文件
        .pipe(gulp.dest('./dest/file1'));       //拷贝一份到file1文件下（file1将自动创建）   
    gulp.src('./src/file2/*')
        .pipe(gulp.dest('./dest/file2'))
})

/////////////////////////////////////////////////////////////////////
//构建任务
gulp.task('default', gulp.series(['htmlminTask', 'lessTask', 'jsTask', 'copyFileTask']));
//当名字为default时，可以直接gulp即可！
//如果不加gulp.series()，则会发生ERROR！

//Notice:  gulp.task('',()=>{})
//将会发生报错！
//（1）async()=>{}  
//(2)(callback)=>{} + callback();




















