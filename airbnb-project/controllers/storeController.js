
                     //## Adding Home detail ##\\


// const Home = require('../models/home');

// exports.getBookings = (req,res,next)=>{

//    res.render('store/booking',{pageTitle: 'Bookings',currentPage:'bookings'}) ;
// }

// exports.getFavourite = (req,res,next)=>{

//    res.render('store/favourite-list',{pageTitle: 'Favourites',currentPage:'favourite'}) ;
// }

// exports.getIndex =(req,res,next)=>{
//    res.render('store/',{pageTitle: 'Airbnb',currentPage:'airbnb'}) ;

// }

// exports.getHomeDetail = (req,res,next)=>{

//     // homeId ki value const homeId me store krne ke liye (params express ka ek object hai jo URL ke dynamic part ko store krta hai)
//    const homeId = req.params.homeId;
//    console.log("At home details page", homeId);

//    //  Home.fetchAll((homes) => {
//    //    const selectedHome = homes.find((home) => home.id === homeId);

//    //    if (!selectedHome) {
//    //       return res.status(404).render('404',{pageTitle: 'page not found', currentPage: '404'});
//    //    }

//       res.render('store/home-details', {
//          pageTitle: 'Home Detail',
//          currentPage: 'home',
         
//       });
//    }



// exports.getHomes = (req,res,next)=>{      
  

//    Home.fetchAll((registerHomes)=>
//     res.render('store/home-list',
//       {registerHomes : registerHomes , 
//         pageTitle: 'Home List' ,
//          currentPage: 'home'}));
//   // console.log(registerHomes); // just to check

  
// }


                                

// const Favourite = require('../models/favourites');
// const Home = require('../models/home');

// exports.getBookings = (req,res,next)=>{

//    res.render('store/booking',{pageTitle: 'Bookings',currentPage:'bookings'}) ;
// }

// exports.getFavourite = (req,res,next)=>{


//    res.render('store/favourite-list',{pageTitle: 'Favourites',currentPage:'favourite'}) ;
// }

// exports.postAddtoFavourite = (req,res,next)=>{
//    console.log("Came to add to favourite", req.body);

//    // yaha id req.body.id hai and error is the callback

//    Favourite.AddtoFavourite(req.body.Id , error=>{
//       if(error){
//       console.log("Error while Adding to Favourite",error)
//       }
//         res.redirect("/store/favourite-list");
//    })
 
// }

// exports.getIndex =(req,res,next)=>{
//    res.render('store/',{pageTitle: 'Airbnb',currentPage:'airbnb'}) ;

// }

// exports.getHomeDetail = (req,res,next)=>{

//    const homeId = req.params.homeId;
//    console.log("At home details page", homeId);
//    // yaha homedetail extract krenge by using findById
//    Home.findById(homeId,home =>{
//       // if home is not present
//       if(!home){
//          console.log("Home not found")
//          res.redirect("/store/home-list")
//       }
//       else{
//       console.log("Home Detail found ", home)
//    // jb ghar ki detail mil jayegi tb page render krenge 
//       res.render('store/home-details', {
//          home: home,  // rendering home-detail page with home data
//          pageTitle: 'Home Detail',
//          currentPage: 'home',
//          })
//       }
         
//       });
//    }

// exports.getHomes = (req,res,next)=>{      
  

//    Home.fetchAll((registerHomes)=>
//     res.render('store/home-list',
//       {registerHomes : registerHomes , 
//         pageTitle: 'Home List' ,
//          currentPage: 'home'}));
 

// }




                     //## ##\\
// that class in favourites.js
const Favourite = require('../models/favourites');

// the class of home.js
const Home = require('../models/home');

exports.getBookings = (req,res,next)=>{

   res.render('store/booking',{pageTitle: 'Bookings',currentPage:'bookings'}) ;
}

exports.getFavourite = (req,res,next)=>{
   
   // calling GetFavourite from favourite.js in Favourite class passing favourites as callback
   Favourite.GetFavourite(favourites =>{
   /* now ab aage kaise flow ho rha hai ye dekho
   pehle Favourite.GetFavourite(favourites=>) ab yaha GetFavourite jaake dekho usme callback ke pehle jo jo code hai vo sb run honge i.e fs.readFile(FavouriteDataPath ,(err,data) ye file read hogi and then callback execute hoga in which the data will be parsed/stored so ab yaha favourites us callback ka parameter hai (it contains the data of the file parsed)
   */
   Home.fetchAll((registerHomes)=>{
      /*
      now ab yaha fetchAll run hoga and after performing its own work it will execute callback (here as registerHomes)
      */
      /*
       now yaha filter:Array me se sirf wahi elements rakhna jo condition satisfy karein.
       
       */
      const favouriteHomes = registerHomes.filter(home =>

           favourites.includes(home.Id)
      );
      // const favouriteHomes = registerHomes.filter(home =>{
      //    return favourites.includes(home.Id)
      // });
      
   res.render('store/favourite-list',{pageTitle: 'My Favourites',currentPage:'favourite'}) ;
   });
 
    });
}

exports.postAddtoFavourite = (req,res,next)=>{
   console.log("Came to add to favourite", req.body);

   // yaha id req.body.id hai and error is the callback

   Favourite.AddtoFavourite(req.body.Id , error=>{
      if(error){
      console.log("Error while Adding to Favourite",error)
      }
        res.redirect("/store/favourite-list");
   })
 
}

exports.getIndex =(req,res,next)=>{
   res.render('store/',{pageTitle: 'Airbnb',currentPage:'airbnb'}) ;

}

exports.getHomeDetail = (req,res,next)=>{

   // "'req.params' object ke andar jo homeId property hai, uski value nikal kar homeId naam ke variable mein store kar do.  eg /homes/6  so req.params = { homeId: "5" }
   
   const homeId = req.params.homeId;
   console.log("At home details page", homeId);
   // yaha homedetail extract krenge by using findById
   Home.findById(homeId,home =>{
      // if home is not present
      if(!home){
         console.log("Home not found")
         res.redirect("/store/home-list")
      }
      else{
      console.log("Home Detail found ", home)
   // jb ghar ki detail mil jayegi tb page render krenge 
      res.render('store/home-details', {
         home: home,  // rendering home-detail page with home data
         pageTitle: 'Home Detail',
         currentPage: 'home',
         })
      }
         
      });
   }

exports.getHomes = (req,res,next)=>{      
  

   Home.fetchAll((registerHomes)=>
    res.render('store/home-list',
      {registerHomes : registerHomes , 
        pageTitle: 'Home List' ,
         currentPage: 'home'}));
 

}






