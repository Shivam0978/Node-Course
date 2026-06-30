
  
                //## Dynamic UI using EJS ## \\

// iska mtlb aaise sites jo user ke according ui different show krte ho like instagram,facebook
// EJS :-Embedded Java Script
 
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

                 //adding middleware 
  // ise hmesha 404 error wali middleware ke upar rakhna hai  
app.use(express.static(path.join(rootDir,'public')));      


  app.use((req,res,next)=>{
  console.log("404 Error!");
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));   // changed to rootDir
});
            
const port = 3000;
app.listen(port,()=>{
  console.log("Server is running on http://localhost:3000")
})