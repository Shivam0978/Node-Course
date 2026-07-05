
// // manage all data related works

// // fake database
// const registerHomes = []; 

//            // home data
// // create a class name 'Home' and export it
// module.exports = class Home{

// //constructor(ye automatically call hota hai when we make objects of a class)
//   constructor(houseName, houseAddress, price , city, photoURL){

// // this refers to the current object being created like this ~ Home
// // now that means : constructor me jitne bhi objects hai there name can be anything, but in this.name , yaha name will contain that variable to which post request is receiving 
// /*
//  Example:
//  const home1 = new Home("Royal House", ...);
//  Here:
//  houseName = "Royal House"
//  this.HouseName = houseName
//  After assignment:
//  home1.HouseName === "Royal House"
// */
//     this.HouseName = houseName;
//     this.HouseAddress = houseAddress;
//     this.City = city;
//     this.price = price;
//     this.photoURL = photoURL;
//   }
//    // save all data to registerHomes
//   save(){
//     registerHomes.push(this);
//   }

// // method :- the function which belongs to an object or class
// // here static works as :- it says that the function(method) is itself belongs to class
// static fetchAll(){
//   return registerHomes;
// }

// }


//                            //## Writing data to Files ##\\

// // all modules necessary for writing files
// const fs = require('fs');
// const path = require('path');
// const rootDir = require('../utils/pathUtil');
// // fake database
// const registerHomes = []; 

//            // home data
// // create a class name 'Home' and export it
// module.exports = class Home{

// //constructor(ye automatically call hota hai when we make objects of a class)
//   constructor(houseName, houseAddress, price , city, photoURL){

//     this.HouseName = houseName;
//     this.HouseAddress = houseAddress;
//     this.City = city;
//     this.price = price;
//     this.photoURL = photoURL;
//   }
//    // save all data to registerHomes
//   save(){
//     registerHomes.push(this);
//     // path for a separate file for data
//     const homeDataPath = path.join(rootDir,'data' ,'homes.json');
//     // writing data to a separate file
//     // fs.writeFile(homeDataPath , JSON.stringify(registerHomes) , error =>{
//     //   console.log("File writing denied" , error );
//     // }  );
//                         // OR (for adding spacing)
//      fs.writeFile(homeDataPath , JSON.stringify(registerHomes,null,2) , error =>{
//       console.log("File writing denied" , error );
//     }  );
//   }

// static fetchAll(){
//   return registerHomes;
// }

// }
// // but this will restart the server after every submit and thus it will not appear on the home page.
//  //[so for this we use nodemon.json]

//  /*
//   "watch": ["."] ~ sbkuch watch kr lena jo "." path pr aa rha hai
//   "ext": "js,json,ejs" ~ in files ko dekh skte ho
//   "ignore":["node_modules/","data/"] ~ data folder ko ignore krna hai if usme koi change ho to server restart nhi krna
//   "exec": "node app.js"
//  */









                          //## Reading Data from files ##\\

// so that after refreshing, data will be remain on the home page   
/* 
but here is a small error , writing files takes time and so the function fetchAll will be executed before that , for that we use 'callback' */             
// all modules necessary for writing files
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

let registerHomes = [];

module.exports = class Home{

  constructor(houseName, houseAddress, price , city, photoURL){

    this.HouseName = houseName;
    this.HouseAddress = houseAddress;
    this.City = city;
    this.price = price;
    this.photoURL = photoURL;
  }
   // save all data to registerHomes
  save(){
   
    // Saving previous data
  // if registerHomes me pehle se koi data hai to vo same rhega and yaha fir new data push hoga aur do data ek sath homes.json me save ho jayenge
    Home.fetchAll((registerHomes)=>{
       registerHomes.push(this);
    // path for a separate file for data
    const homeDataPath = path.join(rootDir,'data' ,'homes.json');
    
     fs.writeFile(homeDataPath , JSON.stringify(registerHomes,null,2) , error =>{
      console.log("File writing denied" , error );
    }  );

    })
    
  
  }

static fetchAll(callback){
  // locating file where data is present
   const homeDataPath = path.join(rootDir,'data' ,'homes.json');
   //reading data from file
   fs.readFile(homeDataPath,(err,data)=>{
    // for the first time it shows error because there will be no data in homes.json
  //   if(err){
  //     registerHomes = [];
  //   }
  //   else { // at present data is in string form so convert it into object 
  //     registerHomes = JSON.parse(data);
  //   }
  //   return registerHomes;
  //  });

                            //OR
         // initially registerHomes = [] (null) ; 

     callback(!err ? JSON.parse(data) : [] )
    
   });
  
   // [Now we dont need registerHomes cause now data is coming from homes.json]
 // return registerHomes;
}

}
