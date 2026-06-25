
         // run  node pract-set-app.js

const {result} = require('./result');
const {container} = require('./container');
const calculator = ((req,res)=>{

  console.log(req.url , req.method);

  if (req.url ==='/'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Calculator</title><head>');
  res.write('<body>');
  res.write('<h2>&nbsp;&nbsp;&nbsp;CALCULATOR</h2><br><br><br>');
  res.write('<a href="/calculator">&nbsp;&nbsp;&nbsp; Go to calculator</a>');

  res.write('</body>');
  res.write('</html>');
  
}
else if (req.url==='/calculator'){
   res.setHeader('Content-Type','text/html');
   container(req,res);
  return res.end();
}

 else if(req.url==='/calculator-result' && req.method=='POST'){
 return result(req,res);
 }
else{
   res.setHeader('Content-Type','text/html');
  res.write(`<html>
 <head><title>Calculator</title><head>
  <body>
  <h3>404!! page doesnt exist </h3>
  <a href = "/">Go to home</a>  `
  )
}
});


// module.exports = calculator;

//OR
 exports.calculator = calculator;