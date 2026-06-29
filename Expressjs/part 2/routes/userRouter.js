//                  //## express Router \\

// const express = require('express');

// // ye express ka feature hai jisse express userRouter naam ka ek alag module create krta hai jisme we can perfom separate task
// const userRouter = express.Router(); 

//            // mddleware for home
// userRouter.get("/",(req,res,next)=>{       
//   res.send(`<h2>Welcome to airbnb</h2>            
    
//     <a href ="/host/add-home">Add home</a>
    
//     `);

// })  

// module.exports = userRouter;


//                     //## Common Path \\

// const express = require('express');
// const userRouter = express.Router(); 

//            // mddleware for home
// userRouter.get("/",(req,res,next)=>{       
//   res.send(`<h2>Welcome to airbnb</h2>            
    
//     <a href ="/host/add-home">Add home</a>
    
//     `);

// })  
// module.exports = userRouter;


//             //## Adding and Serving HTML ##\\  
// // creating a separate html file and serving it to the mainserver using 'path' 
// const path = require('path');
// const express = require('express');
// const userRouter = express.Router(); 

//            // mddleware for home
// userRouter.get("/",(req,res,next)=>{      
//   // it means send file from the directory : (location). 
//   res.sendFile(path.join(__dirname,'../','views','home.html')); 

// })  
// module.exports = userRouter;



            //## Using File Helper ##\\ 
             
const path = require('path');
const express = require('express');
const userRouter = express.Router(); 

const rootDir = require('../utils/pathUtil');   // require ke andar us function ka address hai jise call krna hai

           // mddleware for home
userRouter.get("/",(req,res,next)=>{      
  // it means send file from the directory : (location). 
  res.sendFile(path.join(rootDir,'views','home.html')); 

})  
module.exports = userRouter;