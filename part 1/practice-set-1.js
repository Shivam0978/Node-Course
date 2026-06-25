const http = require('http');
const fs = require('fs');

const server= http.createServer((req,res)=> {

console.log(req.url,req.method);

if(req.url==='/'){
  res.setHeader('Content-Type','text/html');

  res.write('<html>');
res.write('<head><title>My Practice</title></head>');
res.write('<body>');

res.write('<a href="http://localhost:3000/home">Home &nbsp </a>');
res.write('<a href="http://localhost:3000/Men"> Men &nbsp </a>');
res.write('<a href="http://localhost:3000/Women">Women  &nbsp</a>');
res.write('<a href="http://localhost:3000/Kids">Kids &nbsp </a>');
res.write('<a href="http://localhost:3000/Cart">Cart &nbsp</a>');
return res.end();


res.write('</body>');
res.write('</html>');
return res.end(); 
}


else if(req.url==='/home'){
  res.setHeader('Content-Type' , 'text/html')
 res.write('<h2> &nbsp;Welcome to home &nbsp; </h2>')
 return res.end();
}
else if(req.url==='/Men'){
  res.setHeader('Content-Type' , 'text/html')
 res.write('<h2> &nbsp;Welcome to Men &nbsp; </h2>')
 return res.end();
}
else if(req.url==='/Women'){
  res.setHeader('Content-Type' , 'text/html')
 res.write('<h2> &nbsp;Welcome to Women &nbsp; </h2>')
 return res.end();
}
else if(req.url==='/Kids'){
  res.setHeader('Content-Type' , 'text/html')
 res.write('<h2> &nbsp;Welcome to Kids &nbsp; </h2>')
 return res.end();
}
else if(req.url==='/Cart'){
  res.setHeader('Content-Type' , 'text/html')
 res.write('<h2> &nbsp;Welcome to Cart &nbsp; </h2>')
 return res.end();
}})

const port = 3000;
server.listen(port,() =>{
  console.log(`Server is running on http://localhost:${port}`);

}
);

// OR
/*
  res.write('<html>
<head><title>My Practice</title></head>
<body>

<a href="http://localhost:3000/home">Home &nbsp </a>
<a href="http://localhost:3000/Men"> Men &nbsp </a>
<a href="http://localhost:3000/Women">Women  &nbsp</a>
<a href="http://localhost:3000/Kids">Kids &nbsp </a>
<a href="http://localhost:3000/Cart">Cart &nbsp</a>
</body>
</html>
);
*/