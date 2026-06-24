console.log("hello earth");
 // creating a additional file
const fs = require('fs');
fs.writeFile("output.txt", "Writing file " , (err)=>{
  if (err) console.log("Error!");
  else console.log("Successful");
})

// require('module') use to import that module
// if we created our own module then we need to give path eg. require('./module2')
const fes = require('fs');
let a =2;
b=6;
let sum = a+b;
let div = a/b;
let data =` Sum: ${sum} and divide: ${div}`;
fes.writeFile(`newFile.txt`,data, (err)=>{  //writeFile is a function in fs
  if (err) throw  err;
  else
  console.log('Data written to the file');

})