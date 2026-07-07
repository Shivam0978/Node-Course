
                     //## Adding Home detail ##\\


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

exports.getHomeDetail = (req,res,next)=>{

    // homeId ki value const homeId me store krne ke liye (params express ka ek object hai jo URL ke dynamic part ko store krta hai)
   const homeId = req.params.homeId;
   console.log("At home details page", homeId);

   //  Home.fetchAll((homes) => {
   //    const selectedHome = homes.find((home) => home.id === homeId);

   //    if (!selectedHome) {
   //       return res.status(404).render('404',{pageTitle: 'page not found', currentPage: '404'});
   //    }

      res.render('store/home-details', {
         pageTitle: 'Home Detail',
         currentPage: 'home',
         home: selectedHome
      });
   }



exports.getHomes = (req,res,next)=>{      
  

   Home.fetchAll((registerHomes)=>
    res.render('store/home-list',
      {registerHomes : registerHomes , 
        pageTitle: 'Home List' ,
         currentPage: 'home'}));
  // console.log(registerHomes); // just to check

  
}


