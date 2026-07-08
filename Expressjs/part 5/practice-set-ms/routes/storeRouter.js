 
                          //## MVC ##\\

 
 const storeController = require("../controllers/storeController");

const express = require('express');
const storeRouter = express.Router(); 

const rootDir = require('../utils/pathUtil');  

// changing address for registerHomes 
const {registerHomes} = require ('../controllers/hostController')

storeRouter.get("/store/",storeController.getIndex)

storeRouter.get("/store/booking",storeController.getBookings)
 // using controllers [MVC]
storeRouter.get("/store/home-list",storeController.getHomes)  

storeRouter.get("/store/favourite-list",storeController.getFavourite)

module.exports = storeRouter;