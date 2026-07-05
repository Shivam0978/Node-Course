



                       //## MVC ## \\
                                
// const express = require('express');
// const hostRouter = express.Router();
// const rootDir = require('../utils/pathUtil');

// // importing home.js controller 
// // const {getAddHome} = require('../controllers/home');
//                   //OR
//    const homesController = require("../controllers/home");

// // using controller for get request 

// hostRouter.get("/add-home", homesController.getAddHome);

 
  
// // using controller for post request

// hostRouter.post("/add-home",homesController.postHomeEntry);

// exports.hostRouter = hostRouter;

                //## Adding Models\\
const express = require('express');
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtil');

// importing home.js controller 
// const {getAddHome} = require('../controllers/home');
                  //OR
   const homesController = require("../controllers/home");

// using controller for get request 

hostRouter.get("/add-home", homesController.getAddHome);

 
  
// using controller for post request

hostRouter.post("/add-home",homesController.postHomeEntry);

exports.hostRouter = hostRouter;