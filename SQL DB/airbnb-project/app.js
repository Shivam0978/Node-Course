        //## Adding Database (mySQL) ##\\
       

const errorController = require("./controllers/error");
const express = require('express');
const app = express();






const path = require('path');
const rootDir = require('./utils/pathUtil');

app.set('view engine' , 'ejs');
app.set('views' , path.join(rootDir, 'views'));

// local module
const storeRouter = require("./routes/storeRouter");  
  
const {hostRouter} = require('./routes/hostRouter');
           
app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
})
         
app.use(express.urlencoded()); 

app.use(express.static(path.join(rootDir,'public'))); 

  app.use("/store",storeRouter);     

  app.use("/host",hostRouter);          

  // adding controllers
  app.use(errorController.PageNotFound);
            
const port = 3000;
app.listen(port,()=>{
  console.log("Server is running on http://localhost:3000/store")
})



