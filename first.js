console.log("hello earth");

const fs = require('fs');
fs.writeFile("output.txt", "Writing file " , (err)=>{
  if (err) console.log("Error!");
  else console.log("Successful");
})