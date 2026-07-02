                 //## Dynamic UI using EJS ## \\
             
// const path = require('path');
// const express = require('express');
// const userRouter = express.Router(); 

// const rootDir = require('../utils/pathUtil');   // require ke andar us function ka address hai jise call krna hai

// const {registerHomes} = require ('./hostRouter')

//            // mddleware for home
// userRouter.get("/",(req,res,next)=>{      
//   // it means send file from the directory : (location).
  
//    console.log(registerHomes); // just to check
//   res.sendFile(path.join(rootDir,'views','home.html')); 

// })  
// module.exports = userRouter;

                          //## Using EJS ##\\

const path = require('path');
const express = require('express');
const userRouter = express.Router(); 

const rootDir = require('../utils/pathUtil');  

const {registerHomes} = require ('./hostRouter')

         
userRouter.get("/",(req,res,next)=>{      
  
   console.log(registerHomes); // just to check

   // for rendering home.ejs and send data to it
// open home file from views (by default views and we also have set up view folder for ejs) and display it to the user , render the home page and send the registerHomes data to that page

 // res.render('home',{registerHomes}); 
             //OR
  res.render('home',{registerHomes : registerHomes , pageTitle: 'Home' , currentPage: 'home'});

})  
module.exports = userRouter;