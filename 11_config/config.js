const express = require('express');
const config = require('config');
const server = express();
//
console.log(config.get('title'));

server.listen(3000);
console.log('server start successful!');

// 143 - 144