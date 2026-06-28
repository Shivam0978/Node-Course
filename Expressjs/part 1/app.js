              // npm start or nodemon start

//    //Core module
// const www = require('http');
//   // External module
// const express = require('express');
//    // Local module
// const requestHandler = require('./user'); 

//  const app = express(); 

//  const server = www.createServer(app);  // express contains request and response

//  const port = 3000;
// server.listen(port,() =>{
//   console.log(`Server is running on http://localhost:${port}`);

// }
// );

                                    //## Middleware ##\\

//   //Core module
// const www = require('http');
//   // External module
// const express = require('express');
//    // Local module
// const requestHandler = require('./user'); 

//  const app = express(); 
//      // jisko pehle register kiye vo pehla 
//      /* middleware is just like the components we create in react to perform different functions 
//      here, to create middleware we use 'use' and the next is used to move to next middleware usually a website is made up of large number of middlewares 
//      eg. aaise samajh skte ho like ek app hai it says to login first then it shows the contents, if you dont login it send you back , so the first login middleware check and response before moving to second
     
//      */
//  app.use((req , res , next)=>{
// console.log("This is the first middleware",req.url , req.method);
// next();  // if we dont use this then our server do not move to next middleware 
//  });

//  app.use((req,res,next)=>{
//   console.log("This is the second middleware",req.url,req.method);
//   res.send("<h3> i am learning expressjs  </h3>")   //sending response
//  });


//  const server = www.createServer(app);  // express contains request and response

//  const port = 3000;
// server.listen(port,() =>{
//   console.log(`Server is running on http://localhost:${port}`);

// }
// );

                            //$continued...

// // express dont need require('http') , it can start the server itself
 
// // const www = require('http');   // not needed\\
//   // External module
// const express = require('express');
//    // Local module
// const requestHandler = require('./user'); 

//  const app = express(); 
//  app.use((req , res , next)=>{
// console.log("This is the first middleware",req.url , req.method);
// next();  // if we dont use this then our server do not move to next middleware 
//  });

//  app.use((req,res,next)=>{
//   console.log("This is the second middleware",req.url,req.method);
//   res.send("<h3> i am learning expressjs  </h3>")   //sending response
//  });


// //  const server = www.createServer(app);  // not need\\

//  const port = 3000;
// app.listen(port,() =>{
//   console.log(`Server is running on http://localhost:${port}`);

// }
// );

                                  //## Handling Routes ##\\ 

// // express dont need require('http') , it can start the server itself
// // sequence is very important .. first middleware > second >  other
 
// // const www = require('http');   // not needed\\
//   // External module
// const express = require('express');
//    // Local module
// const requestHandler = require('./user'); 

//  const app = express(); 
//  app.use("/",(req , res , next)=>{   // '/' matches everything [if you run '/submit-details' , it aslo run first middleware here]
//   // now yaha "/" is known as path, iska mtlb middleware usi ke liye execute hoga jiska path mention hoga 
// console.log("This is the first middleware",req.url , req.method);
// next();  
//  });

//  app.use("/submit-details",(req,res,next)=>{
//   console.log("This is the second middleware",req.url,req.method);
//   res.send("<h3> i am learning expressjs  </h3>")   //sending response
//  });

//  app.use("/",(req,res,next)=>{
//   console.log("This is the other middleware",req.url,req.method);
//   res.send("<h3>hey! earth </h3>")   //sending response
//  });

//  const port = 3000;
// app.listen(port,() =>{
//   console.log(`Server is running on http://localhost:${port}`);

// }
// );

                             //$$ continue ... 

const express = require('express');
   
const requestHandler = require('./user'); 

 const app = express(); 
 app.use("/",(req , res , next)=>{  
console.log("This is the first middleware",req.url , req.method);
next();  
 });
 // you can use get and post also, iska mtlb tm kehna chah rhe ho :- request get/post bhi ho and "/submit-detail" bhi
 /* 
 difference between use and get/post
 > use wild card hota hai like if it matches anywhere, it runs jaise "/" first middleware and other dono ke liye run horha tha
 > get / post are stictly follow the link on which they have to run
 */

 app.post("/submit-details",(req,res,next)=>{
  console.log("This is the second middleware",req.url,req.method);
  res.send("<h3> i am learning expressjs  </h3>")   //sending response
 });

 app.use("/",(req,res,next)=>{
  console.log("This is the other middleware",req.url,req.method);
  res.send("<h3>hey! earth </h3>")   //sending response
 });

 const port = 3000;
app.listen(port,() =>{
  console.log(`Server is running on http://localhost:${port}`);

}
);