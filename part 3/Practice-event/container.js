const container = ((req,res)=>{

   res.write(`<html>
 <head><title>Calculator</title><head>
  <body>
  
  <form action = "/calculator-result" method="POST">
  <input type="text" name="num1" placeholder="Enter first number" ><br><br>
  <input type="text" name="num2" placeholder="Enter second number" ><br><br>
<button name="operation" value ="+"> sum</button>&nbsp;
   <button name="operation" value="-"> minus</button>&nbsp;
    <button name="operation" value="*"> multiply</button>&nbsp;
     <button name="operation" value="/"> divide</button>&nbsp;

  </body>
  </html> `) 
});

exports.container = container;
