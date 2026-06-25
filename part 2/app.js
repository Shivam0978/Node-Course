const www = require('http');

// const requestHandler = require('./parsing-request');   // using the function  [you can also give other name to variable]
//  const server = www.createServer(requestHandler);

const Handler = require('./parsing-request');   
 const server = www.createServer(Handler);


 const port = 3000;
server.listen(port,() =>{
  console.log(`Server is running on http://localhost:${port}`);

}
);