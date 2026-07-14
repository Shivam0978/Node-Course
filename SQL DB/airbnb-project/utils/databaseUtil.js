// requiring mySQL
const mysql = require('mysql2');
/*
generally jb hm database use krte hai to hame ek connection establish hoti hai 
database limted connection hi ek baar me support kr skta hai so hame connection bana ke apna work krke fir connection band krna hota hai now it become very hectic and cause error or crashed sometimeso for this we use createPool which make few connection active but with shared Pool (can used by many people)
*/
// so that mujhe individual connection na banana pade
const pool = mysql.createPool({

  // now jb hm actual website ke liye database banate hai to usme uska ip address DNS etc add krte hai but at present for out project
  host: 'localhost',
  user: 'root',
  password:'shivam_0786',
  database:'airbnb',

});

// exporting pool promise because ye directly export nhi hota 
module.exports = pool.promise();