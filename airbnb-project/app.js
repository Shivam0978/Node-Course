

const errorController = require("./controllers/error");
const express = require('express');
const app = express();


app.set('view engine' , 'ejs');
app.set('views' , 'views')   
const path = require('path');

// local module
const storeRouter = require("./routes/storeRouter");  
  
const {hostRouter} = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil'); 
           
app.use((req,res,next)=>{
  console.log(req.url,req.method); 
  next();
})
         
app.use(express.urlencoded()); 

app.use(express.static(path.join(rootDir,'public'))); 

  app.use(storeRouter);     

  app.use("/host",hostRouter);          

  // adding controllers
  app.use(errorController.PageNotFound);
            
const port = 3000;
app.listen(port,()=>{
  console.log("Server is running on http://localhost:3000/store")
})



