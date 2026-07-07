const Home = require('../models/home');

exports.getBookings = (req,res,next)=>{

   res.render('store/booking',{pageTitle: 'Bookings',currentPage:'bookings'}) ;
}

exports.getFavourite = (req,res,next)=>{

   res.render('store/favourite-list',{pageTitle: 'Favourites',currentPage:'favourite'}) ;
}

exports.getIndex =(req,res,next)=>{
   res.render('store/',{pageTitle: 'Airbnb',currentPage:'airbnb'}) ;

}

exports.getHomes = (req,res,next)=>{      
  
 // yaha Home class ke fetchAll method ko call kiya hai aur usme ek callback function pass kiya hai jisme registerHomes ko render kiya hai
   Home.fetchAll((registerHomes)=>
    res.render('store/home-list',
      {registerHomes : registerHomes , 
        pageTitle: 'Home List' ,
         currentPage: 'home'}));
  // console.log(registerHomes); // just to check

  
}


