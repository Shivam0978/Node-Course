
// // const getAddHome = (req,res,next)=>{                   

// //   res.render('AddHome',{pageTitle: 'Add Home',currentPage:'add-home'}) ;
// // }

// // exports.getAddHome =getAddHome;

//                                                // OR

// exports.getAddHome = (req,res,next)=>{                   

//   res.render('AddHome',{pageTitle: 'Add Home',currentPage:'add-home'}) ;
// }


// const registerHomes = []; 

// exports.postHomeEntry = (req,res,next)=>{         
 
//  console.log('Home is successfully registered for: ',req.body);

//  // structive way of getting different data of same card
// const newHome = {
//    'House Name': req.body.HouseName,
//    'House Address': req.body.HouseAddress,
//    price: req.body.price,
//    City: req.body.City,
//    'photo URL': req.body.photoURL
// };

// registerHomes.push(newHome);
// res.render('register', {pageTitle: 'Registration',currentPage:'register'});
// }

// exports.getHomes = (req,res,next)=>{      
  
//    console.log(registerHomes); // just to check


//  // res.render('home',{registerHomes}); 
//              //OR
//   res.render('home',{registerHomes : registerHomes , pageTitle: 'Home' , currentPage: 'home'});
// }


//   // ise ab hata bhi skte ho kyuki jo middleware ise use krte the ab vo yhi hai
// exports.registerHomes = registerHomes;


            //$$ Adding Models $$\\

// // adding model class 'Home'
// const Home = require('../models/home');
// exports.getAddHome = (req,res,next)=>{                   

//   res.render('AddHome',{pageTitle: 'Add Home',currentPage:'add-home'}) ;
// }


// exports.postHomeEntry = (req,res,next)=>{         
 
//  console.log('Home is successfully registered for: ',req.body);

// /* so yaha Home class me data add ho rhe like req.body.HouseName = "Royal House"
// and  ye data object ke form me add hote hai so housename = "Royal House",
// houseAdrress = "..." and then ye objects this.HouseName ko assign hote hai and fir vo objects data ke form me console me show hote hai
// */

//  const newHome = new Home(
//   // yaha req.body ke andar jitne bhi data hai vo Home class ke constructor me ja rhe hai aur fir vo data registerHomes array me push ho rhe hai
//    req.body.HouseName,
//    req.body.HouseAddress,
//    req.body.price,
//    req.body.City,
//    req.body.photoURL
//  );
//  newHome.save();
 
//  const registerHomes = Home.fetchAll();        // not required
//  res.render('register', {pageTitle: 'Registration',currentPage:'register'});
// }

// exports.getHomes = (req,res,next)=>{      
  
//   const registerHomes = Home.fetchAll();
//    console.log(registerHomes); // just to check

//   res.render('home',{registerHomes : registerHomes , pageTitle: 'Home' , currentPage: 'home'});
// }


//                     //## Writing data to Files ##\\


// const Home = require('../models/home');
// exports.getAddHome = (req,res,next)=>{                   

//   res.render('AddHome',{pageTitle: 'Add Home',currentPage:'add-home'}) ;
// }


// exports.postHomeEntry = (req,res,next)=>{         
 
//  //console.log('Home is successfully registered for: ',req.body);

//  const newHome = new Home(
//   // yaha req.body ke andar jitne bhi data hai vo Home class ke constructor me ja rhe hai aur fir vo data registerHomes array me push ho rhe hai
//    req.body.HouseName,
//    req.body.HouseAddress,
//    req.body.price,
//    req.body.City,
//    req.body.photoURL
//  );
//  newHome.save();
 
//  const registerHomes = Home.fetchAll();        // not required
//  res.render('register', {pageTitle: 'Registration',currentPage:'register'});
// }

// exports.getHomes = (req,res,next)=>{      
  
//   const registerHomes = Home.fetchAll();
//    console.log(registerHomes); // just to check

//   res.render('home',{registerHomes : registerHomes , pageTitle: 'Home' , currentPage: 'home'});
// }




                   //## Reading data from Files ##\\


const Home = require('../models/home');
exports.getAddHome = (req,res,next)=>{                   

  res.render('AddHome',{pageTitle: 'Add Home',currentPage:'add-home'}) ;
}


exports.postHomeEntry = (req,res,next)=>{         
 
 //console.log('Home is successfully registered for: ',req.body);

 const newHome = new Home(
  
   req.body.HouseName,
   req.body.HouseAddress,
   req.body.price,
   req.body.City,
   req.body.photoURL
 );
 newHome.save();
 
 const registerHomes = Home.fetchAll();        
 res.render('register', {pageTitle: 'Registration',currentPage:'register'});
}

exports.getHomes = (req,res,next)=>{      
  
 // yaha Home class ke fetchAll method ko call kiya hai aur usme ek callback function pass kiya hai jisme registerHomes ko render kiya hai
   Home.fetchAll((registerHomes)=>
    res.render('home',
      {registerHomes : registerHomes , 
        pageTitle: 'Home' ,
         currentPage: 'home'}));
  // console.log(registerHomes); // just to check

  
}


