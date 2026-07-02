
//                    //## Dynamic UI using EJS ## \\

// const path = require('path');             
// const express = require('express');
// const hostRouter = express.Router();
// const rootDir = require('../utils/pathUtil');

// hostRouter.get("/add-home",(req,res,next)=>{                   

//   res.sendFile(path.join(rootDir,'views','AddHome.html')); 
// });

//  const registerHomes = []; 
//   // jis array ko point kr rha vo change nhi ho skta (const) but us array ke andar elements change ho kste hai

// hostRouter.post("/add-home",(req,res,next)=>{         
  
//  console.log('Home is successfully registered for: ',req.body);

//   // House Name and House Address dono object bana kr registerHomes me push kr diya
//                                       //CASE 1 using camel case and space

// //  registerHomes.push({'House Name' : req.body.HouseName} , {'House Address' : req.body['House Address']});
// //   res.sendFile(path.join(rootDir,'views','register.html'));

//                                     // using Hyphen or space we extract it like this

// //  registerHomes.push({'House Name' : req.body['House-Name']} , {'House Address' : req.body['House-Address']});
// //   res.sendFile(path.join(rootDir,'views','register.html'));

// registerHomes.push({'House Name' : req.body.HouseName} , {'House Address' : req.body.HouseAddress});
//   res.sendFile(path.join(rootDir,'views','register.html'));



// });
// // here we are exporting to things so we need to specifiy wherever we are importing the module

// exports.hostRouter = hostRouter;
// exports.registerHomes = registerHomes;



                       //## Using EJS ## \\
                   
const path = require('path');             
const express = require('express');
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtil');

hostRouter.get("/add-home",(req,res,next)=>{                   

  res.render('AddHome',{pageTitle: 'Add Home',currentPage:'add-home'}) ;
});

 const registerHomes = []; 
  

hostRouter.post("/add-home",(req,res,next)=>{         
  
 console.log('Home is successfully registered for: ',req.body);

 // structive way of getting different data of same card
const newHome = {
   'House Name': req.body.HouseName,
   'House Address': req.body.HouseAddress,
   price: req.body.price,
   City: req.body.City,
   'photo URL': req.body.photoURL
};

registerHomes.push(newHome);
res.render('register', {pageTitle: 'Registration',currentPage:'register'});



});

exports.hostRouter = hostRouter;
exports.registerHomes = registerHomes;