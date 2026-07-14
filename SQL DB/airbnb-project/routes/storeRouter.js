// route ka sirf itna work hai ki jo function execute krna hai uska naam get request and location likh do
                   //##Adding Home detail##\\

 const storeController = require("../controllers/storeController");

const express = require('express');
const storeRouter = express.Router(); 

const rootDir = require('../utils/pathUtil');  

// changing address for registerHomes 
const {registerHomes} = require ('../controllers/hostController')

storeRouter.get("/", storeController.getIndex);

// dekho yaha get ke baad jo bhi link hai vo main html,ejs etc ki page ki link nhi hai ye vo page hai jispe tm get request bhejna chah rhe ho
// main file ki link controller me hoti hai jaha se render krte ho
storeRouter.get("/booking", storeController.getBookings);
storeRouter.get("/home-list", storeController.getHomes);

// yaha :homeId ka mtlb ek dynamic parameter hai and sare dynamic parameter req.params ke object ho jate h so they can be accessible using req.params.name
storeRouter.get("/home-list/:homeId", storeController.getHomeDetail);
storeRouter.get("/favourite-list", storeController.getFavourite);
// adding post request for favourite page
storeRouter.post("/favourite-list", storeController.postAddtoFavourite);
storeRouter.post("/delete/:homeId", storeController.postRemoveFromFavourite);

module.exports = storeRouter;