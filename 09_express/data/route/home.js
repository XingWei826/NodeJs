const express = require('express');
const homeRouter = express.Router();
homeRouter.get('/index',(req,res)=>{
    res.send('Welcome to  Home Page!');
});
module.exports = homeRouter;