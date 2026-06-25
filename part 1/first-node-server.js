                //#CREATING SERVER#\\

      // //old method of creating function\\
/*const http = require('http');
function requestListener(req, res){    // request,response
  console.log(req);
}

http.createServer(requestListener); */

// OR               //New Method\\

// const http = require('http'); //importing http(for creating http server)
//  const server = http.createServer((req,res) => {
//   console.log(req.url,req.method,req.headers);  //*see 'info.html' *\\
//  }) ;
//  // server has been created but it stops as it starts becaue it just executed and stops, do not listen
//  //so 
//  const port = 3000
//  server.listen(port,()=> {
//   console.log(`Server is running on http://localhost:${port}`);
//  });
 
 //// for exiting the server
 //process.exit(); // it ends the event loop i.e server closed)


              //#Sending Response#\\

// const http = require('http');
//  const server = http.createServer((req,res) => {
//   console.log(req.url , req.method , req.headers);

//    res.setHeader('Content-Type', 'text/html'); // 'Content-Type' says ki kis type ka data server ke pass ja rha hai , here text/html 
// res.write('<html>');
// res.write('<head><title>My First Node Server</title></head>');
// res.write('<body><h1>Hello Earth</h1></body>');
// res.write('</html>');
// res.end();
//   });

// const port = 3000;
// server.listen(port,() =>{
//   console.log(`Server is running on http://localhost:${port}`);

// }
// );
                  //#Routing Request#\\

// const www = require('http');
//  const server = www.createServer((req,res) => {
//   console.log(req.url , req.method , req.headers);

//   if (req.url === '/') {
//   res.setHeader('Content-Type', 'text/html');  
// res.write('<html>');
// res.write('<head><title>My First Node Server</title></head>');
// res.write('<body><h1>Hello Earth This page is the first</h1></body>');
// res.write('</html>');
// return res.end();  // here, we give res.end() as return to prevent the server from being killed after this line , we can also add it only at the last statement.
  
//   }
//   else if(req.url === '/about'){
//        res.setHeader('Content-Type', 'text/html');
// res.write('<html>');
// res.write('<head><title>About us</title></head>');
// res.write('<body><h1> i am learning node</h1></body>');
// res.write('</html>');
// return res.end();
//   }
//   else{
//     res.setHeader('Content-Type', 'text/html');
// res.write('<html>');
// res.write('<head><title>My First Node Server</title></head>');
// res.write('<body><h1>Hello World</h1></body>');
// res.write('</html>');

//   }

//  // process.exit(); // stops event loop and server, so we can see the first request object in the console and then stop the server 
// }
// );
// const port = 3000;
// server.listen(port,() =>{
//   console.log(`Server is running on http://localhost:${port}`);

// }
// );

                   //#Taking User Inputs#\\
                    //(Server Side Rendering)
const www = require('http');
const fs = require('fs');
 const server = www.createServer((req,res) => {
  console.log(req.url , req.method , req.headers);

  if (req.url === '/') {
  res.setHeader('Content-Type', 'text/html');  
res.write('<html>');
res.write('<head><title>My First Node Server</title></head>');
res.write('<body><h1>Hello Earth This page is the first</h1>');
res.write('<form action="/submit-details" method="POST">'); // action ~ all the data will be submitted here ,,  
res.write('<input type="text" name="Username" placeholder="Enter your name"><br>');
res.write('<input type="password" name="Password" placeholder="Enter your password"><br>');
res.write('<label for="male"> Male </label>');
res.write('<input id="male" type="radio" name="gender" value="male">');

res.write('<label for="female"> Female </label>');
res.write('<input id="female" type="radio" name="gender" value="female"><br>');
res.write('<input type="submit" value="submit">');

res.write('</form>');
res.write('</body>');
res.write('</html>');
return res.end(); 
  }
  else if(req.url.toLowerCase()==="/submit-details" && req.method == "POST") // toLowerCase just to ensure that if user manually type like /Submit-detail then also it runs and "POST" to ensure that some data is their
   {
    fs.writeFileSync('user.txt' , 'Mr.S');  //to add te data in user.txt. writeFileSync is used to replace the prev. contain with new one

    res.statusCode = 302;    // 302 is for redirecting
    res.setHeader ('Location','/') ;  //redirecting to home page
    return res.end();
   }

  else if(req.url === '/about'){
      res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>About us</title></head>');
res.write('<body><h1> i am learning node</h1></body>');
res.write('</html>');
return res.end();
  }
  else{
    res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Node Server</title></head>');
res.write('<body><h1>Hello World</h1></body>');
res.write('</html>');

  }
}
);
const port = 3000;
server.listen(port,() =>{
  console.log(`Server is running on http://localhost:${port}`);

}
);