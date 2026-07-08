
                   //## Reading data from Files ##\\


const Home = require('../models/home');
exports.getAddHome = (req,res,next)=>{                   

  res.render('host/AddHome',{pageTitle: 'Add Home',currentPage:'add-home'}) ;
}

exports.getHostHomes = (req,res,next)=>{      
  
 // yaha Home class ke fetchAll method ko call kiya hai aur usme ek callback function pass kiya hai jisme registerHomes ko render kiya hai
   Home.fetchAll((registerHomes)=>
    res.render('host/host-home-list',
      {registerHomes : registerHomes , 
        pageTitle: 'Host Home List' ,
         currentPage: 'host-homes'}));

      }

exports.postHomeEntry = (req,res,next)=>{         
 
 //console.log('Home is successfully registered for: ',req.body);

 const newHome = new Home(
  
   req.body.HouseName,
   req.body.HouseAddress,
   req.body.price,
   req.body.City,
   req.body.photoURL,
   req.body.description,
   req.body.contact,
  
 );
 newHome.save();
 
 res.render('host/registered', {pageTitle: 'Registration',currentPage:'register'});
}

