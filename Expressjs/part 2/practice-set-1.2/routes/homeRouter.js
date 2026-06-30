const express = require('express');
const path = require('path');
const homeRouter = express.Router();
const rootDir = require('../utils/pathUtils');

homeRouter.get("/",(req,res,next)=>{                                 //home.html
  console.log("This page is for '/'",req.url,req.method);
  res.sendFile(path.join(__dirname,'../','views','home.html'));
 
});

module.exports = homeRouter;