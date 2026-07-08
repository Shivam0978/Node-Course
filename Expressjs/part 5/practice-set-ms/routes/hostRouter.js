

               
const express = require('express');
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtil');

// importing home.js controller 
// const {getAddHome} = require('../controllers/home');
                  //OR
   const hostController = require("../controllers/hostController");

// using controller for get request 

hostRouter.get("/add-home", hostController.getAddHome);

 
  
// using controller for post request

hostRouter.post("/add-home",hostController.postHomeEntry);

hostRouter.get("/host-home-list",hostController.getHostHomes)

exports.hostRouter = hostRouter;