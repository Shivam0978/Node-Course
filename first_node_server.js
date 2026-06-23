/*const http = require('http');
function requestListener(req, res){
  console.log(req);
}

http.createServer(requestListener); */

// OR
const http = require('http');
 const server = http.createServer((req,res) => {
  console.log(req.url , req.method , req.headers);
  if (req.url === '/'){
   res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Node Server</title></head>');
res.write('<body><h1>Hello World</h1></body>');
res.write('</html>');

    
  }
  else if(req.url === '/about'){
       res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>About us</title></head>');
res.write('<body><h1> i am learning node</h1></body>');
res.write('</html>');


  }
  else{
    res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Node Server</title></head>');
res.write('<body><h1>Hello World</h1></body>');
res.write('</html>');


  }

 // process.exit(); // stops event loop and server, so we can see the first request object in the console and then stop the server 
}
);
const port = 3000;
server.listen(port,() =>{
  console.log(`Server is running on http://localhost:${port}`);

}
);
