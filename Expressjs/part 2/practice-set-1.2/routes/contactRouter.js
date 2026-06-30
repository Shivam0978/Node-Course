const express = require('express');
const rootDir = require('../utils/pathUtils');
const contactRouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser');


contactRouter.get("/contact",(req,res,next)=>{
  console.log("this page is contact page ",req.url,req.method);
  res.sendFile(path.join(rootDir,'views','contact.html')) ;
   
});
contactRouter.use(bodyParser.urlencoded());

contactRouter.post("/submit",(req,res,next)=>{
  
 console.log("Input submitted page ",req.url,req.method,req.body);
 
 res.sendFile(path.join(rootDir,'views','submit.html'));

});

module.exports = contactRouter;