
// npm tools is use to initialize new projects

                  //#Scripts#\\
                //   "start" : "node test.js" in package.json
// now just typing 'npm start' in terminal , the server runs
/* start is a special command so it runs directly , if i have to run my own script then i need to write 'npm run script_name' eg. khul-ja */
// package.json contains the metadata of the files

const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req);
});

const port = 3000;
server.listen(port,()=>{
  console.log("server is running at http//:localhost:3000");
})

