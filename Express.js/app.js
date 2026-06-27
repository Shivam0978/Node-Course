const www = require('http');

const Handler = require('./user');   
 const server = www.createServer(Handler);


 const port = 3000;
server.listen(port,() =>{
  console.log(`Server is running on http://localhost:${port}`);

}
);