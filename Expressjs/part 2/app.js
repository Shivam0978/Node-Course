
//                   //## Body paarser ## \\
// // so ye chunk and buffer jaise hi work krta hai, we use it as middleware and usme hi iske sare codes hote hai we just need to write one line and it give us the input data in console

// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const app = express();

//             //[OR]
//   app.use((req,res,next)=>{
//   console.log("This is the home page",req.url,req.method);
//   next();
// });

//     // second middleware
// app.use((req,res,next)=>{
//   console.log("This is the about page",req.url,req.method);
//   next();

// });

// app.get("/",(req,res,next)=>{
//   console.log("This page is for '/'",req.url,req.method);
//   res.send(`<h3>This is the response page</h3><br>

//     <h4> <a href = "/contact">go to contact</a></h4>
//     `)
//   next();
// });

// app.get("/contact",(req,res,next)=>{
//   console.log("this page is contact page ",req.url,req.method);
//   res.send(`<h3>This the contact page <br> please give your detail here</h3>
//     <form action="/submit" method="POST"> 
//     <input type="Text" placeholder="Enter your name" name="username"><br><br>
//     <input type="text" placeholder="Enter your email" name="email"><br><br>
//     <input type="password" placeholder="Enter password" name="password"><br><br>
//     <button> Submit</button>
//     </form>
//     `) 
//     next();
// });

// app.use(bodyParser.urlencoded());     //now iske upar wale page se jaise hi koi niche aayega ye post data console me print kr dega
 
 

// app.post("/submit",(req,res,next)=>{
//  console.log("Input submitted page ",req.url,req.method,req.body);  // here we need to write req.body
//  res.send(`<h3>your contact has been submitted successfully </h3>
//   <a href="/" > click here to go back</a>`)

//  });

// const port = 3000;
// app.listen(port,()=>{
//   console.log("Server is running on http://localhost:3000")
// })


//                     //## Express Router ## \\

// // use to organise , manage and create different routes in separate modules instead of writing in one file

// const express = require('express');
// const app = express();

// // local module
// const userRouter = require("./routes/userRouter");  
// const hostRouter = require('./routes/hostRouter');


//                 // simple middleware created (jo bhi request aaye use log krne ke liye)
// app.use((req,res,next)=>{
//   console.log(req.url,req.method); 
//   next();
// })

//            // Jo bhi request aaye ye use body-parse(body-parser) krke req.body me daal dega
// app.use(express.urlencoded()); 


// //            // mddleware for home             // transferred to userRouter
// // app.get("/",(req,res,next)=>{       
// //   res.send(`<h2>Welcome to airbnb</h2>            
    
// //     <a href ="/host/add-home">Add home</a>
    
// //     `);

// // })  

//            //  get request middelware for add home (data posting on add-home only)

//   app.use(userRouter);     // handle user requests

//   app.use(hostRouter);     // handle host requests


//                       //#Adding 404

// // hmne get and post pehle hi use kiyaa hai so, any page with unknown link receive this msg. 
// app.use((req,res,next)=>{
//   console.log("404 Error!");
//   res.status(404).send("<h3> 404 !! Your page is not found on airbnb </h3>");
// })

// const port = 3000;
// app.listen(port,()=>{
//   console.log("Server is running on http://localhost:3000")
// })


//                         //##Common Path##\\
          
// const express = require('express');
// const app = express();

// // local module
// const userRouter = require("./routes/userRouter");  
// const hostRouter = require('./routes/hostRouter');

                
// app.use((req,res,next)=>{
//   console.log(req.url,req.method); 
//   next();
// })
         
// app.use(express.urlencoded()); 

//               //  (now we dont need to write "/host/..." in hostRouter )
//   app.use(userRouter);     

//   app.use("/host",hostRouter);     

//   app.use((req,res,next)=>{
//   console.log("404 Error!");
//   res.status(404).send("<h3> 404 !! Your page is not found on airbnb </h3>");
// })

// const port = 3000;
// app.listen(port,()=>{
//   console.log("Server is running on http://localhost:3000")
// })



//                //## Adding and Serving HTML ##\\
          
// const express = require('express');
// const app = express();
// const path = require('path');

// // local module
// const userRouter = require("./routes/userRouter");  
// const hostRouter = require('./routes/hostRouter');

                
// app.use((req,res,next)=>{
//   console.log(req.url,req.method); 
//   next();
// })
         
// app.use(express.urlencoded()); 

//               //  (now we dont need to write "/host/..." in hostRouter )
//   app.use(userRouter);     

//   app.use("/host",hostRouter);     

//   app.use((req,res,next)=>{
//   console.log("404 Error!");
//   res.status(404).sendFile(path.join(__dirname,'views','404.html'));
// })

// const port = 3000;
// app.listen(port,()=>{
//   console.log("Server is running on http://localhost:3000")
// })



               //## Using File Helper ##\\
               
  // it makes serving the html page more easier    [utils]   
const express = require('express');
const app = express();
const path = require('path');

// local module
const userRouter = require("./routes/userRouter");  
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');  // local module
           
app.use((req,res,next)=>{
  console.log(req.url,req.method); 
  next();
})
         
app.use(express.urlencoded()); 

  app.use(userRouter);     

  app.use("/host",hostRouter);     

  app.use((req,res,next)=>{
  console.log("404 Error!");
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));   // changed to rootDir
})

const port = 3000;
app.listen(port,()=>{
  console.log("Server is running on http://localhost:3000")
})
