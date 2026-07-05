

// const express = require('express');
// const app = express();

// // for working with ejs
// app.set('view engine' , 'ejs');
// app.set('views' , 'views')   // 'views','folder_name' (html)
// const path = require('path');

// // local module
// const userRouter = require("./routes/userRouter");  
//  // {hostRouter} because we need to specify 
// const {hostRouter} = require('./routes/hostRouter');
// const rootDir = require('./utils/pathUtil');  // local module
           
// app.use((req,res,next)=>{
//   console.log(req.url,req.method); 
//   next();
// })
         
// app.use(express.urlencoded()); 

// app.use(express.static(path.join(rootDir,'public'))); 

//   app.use(userRouter);     

//   app.use("/host",hostRouter);          


//   app.use((req,res,next)=>{
//   console.log("404 Error!");
//   res.status(404).render('404',{pageTitle: 'page not found', currentPage: '404'})  // giving pageTitle and rendering ejs file
// });
            
// const port = 3000;
// app.listen(port,()=>{
//   console.log("Server is running on http://localhost:3000")
// })


                              //## Model View Controller ##\\
          
// basically ye ek architecture hai which company used to build projects in a systematic and responsible way
// Model :- data management karna and core logic of the application 
// View :- display and presentation of data to user
// Controller :- model and view ke interaction ke liye responsible hai (process user input, interact with the model and update the view) {eg. routes}

const errorController = require("./controllers/error");
const express = require('express');
const app = express();


app.set('view engine' , 'ejs');
app.set('views' , 'views')   
const path = require('path');

// local module
const userRouter = require("./routes/userRouter");  
  
const {hostRouter} = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil'); 
           
app.use((req,res,next)=>{
  console.log(req.url,req.method); 
  next();
})
         
app.use(express.urlencoded()); 

app.use(express.static(path.join(rootDir,'public'))); 

  app.use(userRouter);     

  app.use("/host",hostRouter);          

  // adding controllers
  app.use(errorController.PageNotFound);
            
const port = 3000;
app.listen(port,()=>{
  console.log("Server is running on http://localhost:3000")
})



