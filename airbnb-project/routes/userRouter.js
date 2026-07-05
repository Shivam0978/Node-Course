 
                          //## MVC ##\\

 const homesController = require("../controllers/home");

const express = require('express');
const userRouter = express.Router(); 

const rootDir = require('../utils/pathUtil');  

// changing address for registerHomes 
const {registerHomes} = require ('../controllers/home')

 // using controllers [MVC]
userRouter.get("/",homesController.getHomes)  
module.exports = userRouter;