//                 //##Express Router\\

// const express = require('express');
// const hostRouter = express.Router();

// hostRouter.get("/host/add-home",(req,res,next)=>{                   
  
//   res.send(`<h2>Register your home</h2>
//    <form action="/host/add-home" method="POST">           
// <input type="text" placeholder="Enter your house name" name="House Name"><br><br>
// <input type="text" placeholder="Enter house address" name=" House Address"><br><br>
// <input type="submit">
//    </form>
    
//     `);
// })
//              //  post request middelware for add home [get se jo data aaya uske liye]

// hostRouter.post("/host/add-home",(req,res,next)=>{                
//  console.log(req.body);
//   res.send(`<h2>✅Registration successful!!</h2>
//     <a href="/" > go to home </a>
//     `);
// })


// module.exports = hostRouter;

//                      //## Common Path ##\\
              
// const express = require('express');
// const hostRouter = express.Router();

// hostRouter.get("/add-home",(req,res,next)=>{                   

//   res.send(`<h2>Register your home</h2>
//    <form action="/host/add-home" method="POST">           
// <input type="text" placeholder="Enter your house name" name="House Name"><br><br>
// <input type="text" placeholder="Enter house address" name=" House Address"><br><br>
// <input type="submit">
//    </form>
    
//     `);
// })
//              //  post request middelware for add home [get se jo data aaya uske liye]

// hostRouter.post("/add-home",(req,res,next)=>{                
//  console.log(req.body);
//   res.send(`<h2>✅Registration successful!!</h2>
//     <a href="/" > go to home </a>
//     `);
// })

// module.exports = hostRouter;


//               //## Adding and Serving HTML ##\\
// const path = require('path');             
// const express = require('express');
// const hostRouter = express.Router();

// hostRouter.get("/add-home",(req,res,next)=>{                   

//   res.sendFile(path.join(__dirname,'../','views','AddHome.html'));
// })
//              //  post request middelware for add home [get se jo data aaya uske liye]

// hostRouter.post("/add-home",(req,res,next)=>{                
//  console.log(req.body);
//   res.sendFile(path.join(__dirname, '../','views','register.html'));
// })

// module.exports = hostRouter;




                                //## Using File Helper ##\\

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