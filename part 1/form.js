const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) =>{
  console.log(req.url , req.method , req.headers);
  if (req.url==='/'){
    res.setHeader('content-type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>Form</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome candidate!</h1>');
    res.write('<form action="/submit-details" method = "POST>"');
    res.write('<input type ="text" id="name" name="name" placeholder ="Enter your name"><br><br>');
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name"gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name"gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</body>');

    res.write('</html>');
    return res.end();
    
  }
  else if(req.url.toLowerCase() === '/submit-details' && req.method == 'POST'){
    fs.writeFileSync('user.txt', 'shivam kumar');
    res.statusCode = 302; 
  }
});
  const port = 3000;
server.listen(port,() =>{
  console.log(`Server is running on http://localhost:${port}`);

}
);