

               
const express = require('express');
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtil');

// importing home.js controller 
// const {getAddHome} = require('../controllers/home');
                  //OR
   const hostController = require("../controllers/hostController");

// using controller for get request 

hostRouter.get("/add-home", hostController.getAddHome);

hostRouter.get("/edit-home" , hostController.getEditing);

// adding host router for particular home editing page here query parameter alag alag time pr alag alag aa skti hai so they are not the part of the path
hostRouter.get("/edit-home/:homeId", hostController.getEditHome);
  
// using controller for post request
hostRouter.post("/edit-home",hostController.postEditHome)

hostRouter.post("/add-home",hostController.postHomeEntry);


hostRouter.get("/host-homes-list",hostController.getHostHomes);
hostRouter.post("/delete-home/:homeId",hostController.postDeleteHome);

exports.hostRouter = hostRouter;