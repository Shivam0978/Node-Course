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
         // writeFileSync ka mtlb kaam event loop hi krega and as IO takes more time, it blocks everyother request till this will not complete
       fs.writeFile('user.txt' , JSON.stringify(BodyObject),error =>{
        console.log('Data written successfully');
        res.statusCode = 302;  
        res.setHeader ('Location','/') ;  
        return res.end();
       }); 
     }); 

      /*res.statusCode = 302;  
     res.setHeader ('Location','/') ;  
     return res.end();*/ //ye yaha write krne ka koi mtlb nhi kyuki ye pehle execute hoga , user file write krne ke pehle hi redirect ho jayega 
     
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