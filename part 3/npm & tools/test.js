
// npm tools is use to initialize new projects

                  //#Scripts#\\
                //   "start" : "node test.js" in package.json
// now just typing 'npm start' in terminal , the server runs
/* start is a special command so it runs directly , if i have to run my own script then i need to write 'npm run script_name' eg. khul-ja */
// package.json contains the metadata of the files

// nodemon is used to update the server whenever it detect some change 

const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req);
});

const port = 3001;
server.listen(port,()=>{
  console.log("server is running at http//:localhost:3001");
})




                         // to set up projects :- npm init
                        // to install nodemon :- npm install nodemon --save
                        // to install express :- npm install express --save
                        // to run self made scripts (start is not self made) :- npm run ___