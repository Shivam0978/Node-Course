
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
       yaha registerHomes fetchAll ke callback ka parameter hai means it has the same data
       
       */
      const favouriteHomes = registerHomes.filter(home =>
         /* ab dhyan se sun mere bhai 
         so yaha you can confuse 
          registerHomes.filter(home => favourites.includes(home.Id)
          so yaha filter registerHomes ke liye use hua hai jaise Home.fetchAll but yaha filter registerhomes me likha hua nhi hai its a inbuilt function but you can assume ki likha h so filter bhi callback return krta hai same class or array etc ka jispe bhi use ho rha ho so like filter(callback) where callback(registerHomes) ab filter me home hai so by callback rule home = registerHomes thus home.Id = registerHomes.Id 
          now favourites contains the data of all homes from which the filter identify which is equal to home.Id and include it
          */
           favourites.includes(home.Id)
      );
      // const favouriteHomes = registerHomes.filter(home =>{
      //    return favourites.includes(home.Id)
      // });
      
   res.render('store/favourite-list', {
      favouriteHomes: favouriteHomes,
      pageTitle: 'My Favourites',
      currentPage: 'favourite'
   });
   });
 
    });
}

exports.postAddtoFavourite = (req,res,next)=>{
   console.log("Came to add to favourite", req.body);

   // yaha Id req.body.Id hai and error is the callback
   // kyuki function me do variables pass hui hai
  
   /* to yaha error callback hai and AddtoFavourite me jaha jaha callback call kiya gya hai vaha pura error function call hoga
   */
   Favourite.AddtoFavourite(req.body.Id , error=>{
      // if error then show else redirect
      if(error){
      console.log("Error while Adding to Favourite",error)
      }
        res.redirect("/store/favourite-list");
   });
 
}

exports.postRemoveFromFavourite = (req,res,next)=>{
   
   // route defines the param as :homeId, so use the same name (case-sensitive)
   const homeId = req.params.homeId;
   console.log("came to delete page", homeId);
   Favourite.deleteById(homeId,error=>{
      if(error){
         console.log("Error while deleting from favourite",error);

      }
       res.redirect("/store/favourite-list");
   })
  
}

exports.getIndex =(req,res,next)=>{
   res.render('store/',{pageTitle: 'Airbnb',currentPage:'airbnb'}) ;

}

exports.getHomeDetail = (req,res,next)=>{

   // "'req.params' ke andar jo homeId property hai, uski value nikal kar homeId naam ke variable mein store kar do.  eg /homes/6  so req.params = { homeId: "5" } so req.params.homeId = '5'
   
   const homeId = req.params.homeId;
   console.log("At home details page", homeId);
   // yaha homedetail extract krenge by using findById
   // yaha Favourite.GetFavourite(favourites pass kiye hai taaki favourite.ejs me jo js ka code hai usme favourite define ho
   Favourite.GetFavourite(favourites =>{
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
         favourites:favourites,
         pageTitle: 'Home Detail',
         currentPage: 'home',
         })
      }
         
      });
   })
   }

exports.getHomes = (req,res,next)=>{      
  
   // so yaha Home.fetchAll((registerHomes) , Homes class me static function fetchAll hai which reads the file and write and give callback here as registerHomes and  {registerHomes : registerHomes  yaha tm vo data bhi render krwa rhe ho
 Favourite.GetFavourite(favourites=>{
   Home.fetchAll((registerHomes)=>
    res.render('store/home-list',

      {registerHomes : registerHomes , 
         favourites:favourites,
        pageTitle: 'Home List' ,
         currentPage: 'home'}));
      })
 
}






