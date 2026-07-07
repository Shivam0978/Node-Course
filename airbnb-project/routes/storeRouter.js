
                   //##Adding Home detail##\\
 
 const storeController = require("../controllers/storeController");

const express = require('express');
const storeRouter = express.Router(); 

const rootDir = require('../utils/pathUtil');  

// changing address for registerHomes 
const {registerHomes} = require ('../controllers/hostController')

storeRouter.get("/", storeController.getIndex);

storeRouter.get("/booking", storeController.getBookings);
storeRouter.get("/home-list", storeController.getHomes);
storeRouter.get("/home-list/:homeId", storeController.getHomeDetail);
storeRouter.get("/favourite-list", storeController.getFavourite);

module.exports = storeRouter;