const express = require('express');
const adminRouter = express.Router();
adminRouter.get('/index',(req,res)=>{
    res.send('Welcome to  Admin Page!');
});
module.exports = adminRouter;