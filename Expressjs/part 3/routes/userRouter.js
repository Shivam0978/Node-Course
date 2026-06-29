
             
const path = require('path');
const express = require('express');
const userRouter = express.Router(); 

const rootDir = require('../utils/pathUtil');   // require ke andar us function ka address hai jise call krna hai

           // mddleware for home
userRouter.get("/",(req,res,next)=>{      
  // it means send file from the directory : (location). 
  res.sendFile(path.join(rootDir,'views','home.html')); 

})  
module.exports = userRouter;