const http = require('http');
const fs = require('fs');


//const calculator = require('./practice-set-2')
 const {calculator} = require('./practice-set-2')
const Server = http.createServer(calculator);


const port = 3000;
Server.listen(port,()=>{
   console.log(`Server is running on http://localhost:${port}`);

});
