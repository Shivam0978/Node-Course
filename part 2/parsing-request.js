                                      //##IMPORTANT DEFINITION##\\
        // parsing:- raw data ko kisi useful information me change krna taaki hm use easily use kr sake. ithappens via 3 methods

// Streams:- Data flow in continous form like stream of water , in small chunks or parts [bit by bit]. 

// Chunks:- small forms in which data travel.

// Buffer :- it organise the chunks in a meaningful set of data.


// const www = require('http');
// const fs = require('fs');
//  const server = www.createServer((req,res) => {
//   console.log(req.url , req.method);

//   if (req.url === '/') {
//   res.setHeader('Content-Type', 'text/html');  
// res.write('<html>');
// res.write('<head><title>My First Node Server</title></head>');
// res.write('<body><h1>Hello Earth This page is the first</h1>');
// res.write('<form action="/submit-details" method="POST">'); // action ~ all the data will be submitted here ,,  
// res.write('<input type="text" name="Username" placeholder="Enter your name"><br>');
// res.write('<input type="password" name="Password" placeholder="Enter your password"><br>');
// res.write('<label for="male"> Male </label>');
// res.write('<input id="male" type="radio" name="gender" value="male">');

// res.write('<label for="female"> Female </label>');
// res.write('<input id="female" type="radio" name="gender" value="female"><br>');
// res.write('<input type="submit" value="submit">');

// res.write('</form>');
// res.write('</body>');
// res.write('</html>');
// return res.end(); 
//   }
//   else if(req.url.toLowerCase()==="/submit-details" && req.method == "POST")
//    {  

//     req.on('data',chunk=> {
//       console.log(chunk);            // jb bhi POST request aaye,chunk(data) console me print kr dena i.e jb bhi event pura ho jaye console me inform kr dena or jb bhi first data receive ho console me inform kr dena
//     });
//     fs.writeFileSync('user.txt' , 'Mr.S');  

//     res.statusCode = 302;    // 302 is for redirecting
//     res.setHeader ('Location','/') ;  //redirecting to home page
//     return res.end();
//    }

//   else if(req.url === '/about'){
//       res.setHeader('Content-Type', 'text/html');
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
// }
// );
// const port = 3000;
// server.listen(port,() =>{
//   console.log(`Server is running on http://localhost:${port}`);

// }
// );


// yaha buffer me  kuch random alpha numeric terms as digits aa rhe honge which is the chunks which is not a meaningful info so now we will so buffering chunks where we store chunks in a buffer and make it a meaningful data

                                       //#Buffering Chunks#\\

// const www = require('http');
// const fs = require('fs');
//  const server = www.createServer((req,res) => {
//   console.log(req.url , req.method);

//   if (req.url === '/') {
//   res.setHeader('Content-Type', 'text/html');  
// res.write('<html>');
// res.write('<head><title>My First Node Server</title></head>');
// res.write('<body><h1>Hello Earth This page is the first</h1>');
// res.write('<form action="/submit-details" method="POST">'); // action ~ all the data will be submitted here ,,  
// res.write('<input type="text" name="Username" placeholder="Enter your name"><br>');
// res.write('<input type="password" name="Password" placeholder="Enter your password"><br>');
// res.write('<label for="male"> Male </label>');
// res.write('<input id="male" type="radio" name="gender" value="male">');

// res.write('<label for="female"> Female </label>');
// res.write('<input id="female" type="radio" name="gender" value="female"><br>');
// res.write('<input type="submit" value="submit">');

// res.write('</form>');
// res.write('</body>');
// res.write('</html>');
// return res.end(); 
//   }
//   else if(req.url.toLowerCase()==="/submit-details" && req.method == "POST")
//    {  
//     const body=[];     // creating a array to store chunks
//     req.on('data',chunk=> {
//       console.log(chunk); 
//       body.push(chunk);   //adding chunks to body           
//     });
//     req.on('end',()=>{        // signal ki chunks aana ab band ho gye (alll chunks received)
//       const fullBody=Buffer.concat(body).toString();      // give the final data after combining all chunks in string form
//       console.log(fullBody);
//     })
//     fs.writeFileSync('user.txt' , 'Mr.S');  

//     res.statusCode = 302;    // 302 is for redirecting
//     res.setHeader ('Location','/') ;  //redirecting to home page
//     return res.end();
//    }

//   else if(req.url === '/about'){
//       res.setHeader('Content-Type', 'text/html');
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
// }
// );
// const port = 3000;
// server.listen(port,() =>{
//   console.log(`Server is running on http://localhost:${port}`);

// }
// );

                                     //#Parsing Request#\\

// const www = require('http');
// const fs = require('fs');
//  const server = www.createServer((req,res) => {
//   console.log(req.url , req.method);

//   if (req.url === '/') {
//   res.setHeader('Content-Type', 'text/html');  
// res.write('<html>');
// res.write('<head><title>My First Node Server</title></head>');
// res.write('<body><h1>Hello Earth This page is the first</h1>');
// res.write('<form action="/submit-details" method="POST">'); // action ~ all the data will be submitted here ,,  
// res.write('<input type="text" name="Username" placeholder="Enter your name"><br>');
// res.write('<input type="password" name="Password" placeholder="Enter your password"><br>');
// res.write('<label for="male"> Male </label>');
// res.write('<input id="male" type="radio" name="gender" value="male">');

// res.write('<label for="female"> Female </label>');
// res.write('<input id="female" type="radio" name="gender" value="female"><br>');
// res.write('<input type="submit" value="submit">');

// res.write('</form>');
// res.write('</body>');
// res.write('</html>');
// return res.end(); 
//   }
//   else if(req.url.toLowerCase()==="/submit-details" && req.method == "POST")
//    {  
//     const body=[];     
//     req.on('data',chunk=> {
//       console.log(chunk); 
//       body.push(chunk);   

//     });
//     req.on('end',()=>{       
//       const fullBody=Buffer.concat(body).toString();    
//       console.log(fullBody);

//        const param = new URLSearchParams(fullBody);  // ye data ko aur meaningful and precise form me represent krega
//       const BodyObject = {}  //for storing the key value pairs
//       for (const [key,val] of param.entries()){    // this loop breaks every key value pair like "username" : "mohan" 
//         BodyObject[key] = val ;   // storing key & value
//       }
//       console.log(BodyObject);
//     });
    

//     fs.writeFileSync('user.txt' , 'Mr.S');  

//     res.statusCode = 302;  
//     res.setHeader ('Location','/') ;  
//     return res.end();
//    }

//   else if(req.url === '/about'){
//       res.setHeader('Content-Type', 'text/html');
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
// }
// );
// const port = 3000;
// server.listen(port,() =>{
//   console.log(`Server is running on http://localhost:${port}`);

// }
// );


// const www = require('http');
// const fs = require('fs');
//  const server = www.createServer((req,res) => {
//   console.log(req.url , req.method);

//   if (req.url === '/') {
//   res.setHeader('Content-Type', 'text/html');  
// res.write('<html>');
// res.write('<head><title>My First Node Server</title></head>');
// res.write('<body><h1>Hello Earth This page is the first</h1>');
// res.write('<form action="/submit-details" method="POST">'); // action ~ all the data will be submitted here ,,  
// res.write('<input type="text" name="Username" placeholder="Enter your name"><br>');
// res.write('<input type="password" name="Password" placeholder="Enter your password"><br>');
// res.write('<label for="male"> Male </label>');
// res.write('<input id="male" type="radio" name="gender" value="male">');

// res.write('<label for="female"> Female </label>');
// res.write('<input id="female" type="radio" name="gender" value="female"><br>');
// res.write('<input type="submit" value="submit">');

// res.write('</form>');
// res.write('</body>');
// res.write('</html>');
// return res.end(); 
//   }
//   else if(req.url.toLowerCase()==="/submit-details" && req.method == "POST")
//    {  
//     const body=[];     
//     req.on('data',chunk=> {
//       console.log(chunk); 
//       body.push(chunk);   

//     });
//     req.on('end',()=>{       
//       const fullBody=Buffer.concat(body).toString();    
//       console.log(fullBody);

//        const param = new URLSearchParams(fullBody);  // ye data ko aur meaningful and precise form me represent krega
//       // const BodyObject = {}  //for storing the key value pairs
//       // for (const [key,val] of param.entries()){    // this loop breaks every key value pair like "username" : "mohan" 
//       //   BodyObject[key] = val ;   // storing key & value
//       // }
//       const BodyObject = Object.fromEntries(param);  // param me se entry nikal kr use object bna dena
//       console.log(BodyObject);
//       fs.writeFileSync('user.txt' , JSON.stringify(BodyObject)); 
//     }); 

//     res.statusCode = 302;  
//     res.setHeader ('Location','/') ;  
//     return res.end();
//    }

//   else if(req.url === '/about'){
//       res.setHeader('Content-Type', 'text/html');
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
// }
// );
// const port = 3000;
// server.listen(port,() =>{
//   console.log(`Server is running on http://localhost:${port}`);

// }
// );


                  //#Using Modules\\

// here we separate the creating server part and listening part to another file "app.js" and exporting the requestHandler function to the file and run it to perform the same operation
const fs = require('fs');
const requestHandler = ((req,res) => {
  console.log(req.url , req.method);

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
  else if(req.url.toLowerCase()==="/submit-details" && req.method == "POST")
   {  
    const body=[];     
    req.on('data',chunk=> {
      console.log(chunk); 
      body.push(chunk);   

    });
    req.on('end',()=>{       
      const fullBody=Buffer.concat(body).toString();    
      console.log(fullBody);

       const param = new URLSearchParams(fullBody);  
      const BodyObject = Object.fromEntries(param);  // param me se entry nikal kr use object bna dena
      console.log(BodyObject);
      fs.writeFileSync('user.txt' , JSON.stringify(BodyObject)); 
    }); 

    res.statusCode = 302;  
    res.setHeader ('Location','/') ;  
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


module.exports = requestHandler;   // exporting the function