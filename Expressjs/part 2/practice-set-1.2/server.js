
// const express = require('express');
// const fs = require('fs');
// const app = express();


//    // first middleware
// // app.get("/home",(req,res,next)=>{
// //   console.log("This is the home page",req.url,req.method);
// //   next();
// // });
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


// // app.use((req,res,next)=>{
// //   console.log("This is the repond page",req.url,req.method);
// //   res.send('<h3>Hey there i am learning node and express</h3>')

// // });


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
//     next();// form action is used to collect all data input data and send it to the provided file like "/contact"
// });

// app.post("/submit",(req,res,next)=>{
//  console.log("Input submitted page ",req.url,req.method);
//  res.send(`<h3>your contact has been submitted successfully </h3>
//   <a href="/" > click here to go back</a>`)


// if(req.url.toLowerCase()==="/submit" && req.method == "POST"){
 
//   const body=[];
//   req.on('data',chunk=>{
//     body.push(chunk);
//   });
//   req.on('end',()=>{       
//       const fullBody=Buffer.concat(body).toString();    
//       console.log(fullBody);
//        const param = new URLSearchParams(fullBody);  
//             const BodyObject = Object.fromEntries(param); 
//             console.log(BodyObject);
//             // fs.writeFileSync('user.txt' , JSON.stringify(BodyObject)); // this replace the previous data in user.txt 
//             fs.appendFileSync('user.txt',JSON.stringify(BodyObject)+ `\n`+`\n`);

// });
// }
// });

// const port = 3000;
// app.listen(port,()=>{
//   console.log("Server is running on http://localhost:3000")
// })


                                              // ## practice set- 1.2 \\
const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser'); 
const path = require('path');    
const rootDir = require('./utils/pathUtils')

const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter')
                       
                                    //[OR]
  app.use((req,res,next)=>{
  console.log("This is the home page",req.url,req.method);
  next();
});

    // second middleware
app.use((req,res,next)=>{
  console.log("This is the about page",req.url,req.method);
  next();

});

   app.use(homeRouter);
   app.use(contactRouter);


app.use((req,res,next)=>{
  console.log("404!! ERROR");
  res.status(404).send(`<h3> 404 Error! this page is not found</h3>`)
})

const port = 3000;
app.listen(port,()=>{
  console.log("Server is running on http://localhost:3000")
})
