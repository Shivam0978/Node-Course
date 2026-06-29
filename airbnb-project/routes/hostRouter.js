

const path = require('path');             
const express = require('express');
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtil');

hostRouter.get("/add-home",(req,res,next)=>{                   

  res.sendFile(path.join(rootDir,'views','AddHome.html'));  // basically tmhe bass itna hi krna hai iski chinta nhi krni ki file kis folder me hai kaise address dena hai just write rootDir and folder and file name which is to be extract.
});

hostRouter.post("/add-home",(req,res,next)=>{                
 console.log(req.body);
  res.sendFile(path.join(rootDir,'views','register.html'));
});

module.exports = hostRouter;