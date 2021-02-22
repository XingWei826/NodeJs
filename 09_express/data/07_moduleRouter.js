const express = require('express');
const server = express();

const homeRouter = require('./route/home');
const adminRouter = require('./route/admin');

server.use('/home',homeRouter);
server.use('/admin',adminRouter);

server.listen(3000);
console.log('server start success!');