


                     //## Adding database (mySQL)##\\

const Favourite = require('../models/favourites');

const Home = require('../models/home');


exports.getBookings = (req,res,next)=>{

   res.render('store/booking',{pageTitle: 'Bookings',currentPage:'bookings'}) ;
}

exports.getFavourite = (req,res,next)=>{
   Promise.all([
      Favourite.GetFavourite(),
      Home.fetchAll()
   ])
   .then(([favourites, [registerHomes]]) => {
      const favouriteHomes = registerHomes.filter((home) => favourites.includes(home.Id));

      res.render('store/favourite-list', {
         favouriteHomes: favouriteHomes,
         pageTitle: 'My Favourites',
         currentPage: 'favourite'
      });
   })
   .catch((error) => {
      console.log('Error while loading favourites', error);
      next(error);
   });
}

exports.postAddtoFavourite = (req,res,next)=>{
   console.log('Came to add to favourite', req.body);

   Favourite.AddtoFavourite(req.body.Id)
      .then(() => {
         res.redirect('/store/favourite-list');
      })
      .catch((error) => {
         console.log('Error while adding to favourite', error);
         next(error);
      });
}

exports.postRemoveFromFavourite = (req,res,next)=>{
   const homeId = req.params.homeId;
   console.log('came to delete page', homeId);

   Favourite.deleteById(homeId)
      .then(() => {
         res.redirect('/store/favourite-list');
      })
      .catch((error) => {
         console.log('Error while deleting from favourite', error);
         next(error);
      });
}

exports.getIndex =(req,res,next)=>{
   // now using fetchAll as promise
   Home.fetchAll().then(([registerHomes,fields])=>{
      
        res.render('store/',{
         registerHomes:registerHomes,
         pageTitle: 'Airbnb',
         currentPage:'airbnb'
      }) ;
   })
 

}

exports.getHomeDetail = (req,res,next)=>{
   const homeId = req.params.homeId;
   console.log('At home details page', homeId);

   Promise.all([
      Favourite.GetFavourite(),
      Home.findById(homeId)
   ])
   .then(([favourites, [homes]]) => {
      const home = homes[0];

      if (!home) {
         console.log('Home not found');
         res.redirect('/store/home-list');
      } else {
         console.log('Home Detail found ', home);
         res.render('store/home-details', {
            home: home,
            favourites: favourites,
            pageTitle: 'Home Detail',
            currentPage: 'home',
         });
      }
   })
   .catch((error) => {
      console.log('Error while loading home detail', error);
      next(error);
   });
}

exports.getHomes = (req,res,next)=>{
   Promise.all([
      Favourite.GetFavourite(),
      Home.fetchAll()
   ])
   .then(([favourites, [registerHomes]]) => {
      res.render('store/home-list', {
         registerHomes: registerHomes,
         favourites: favourites,
         pageTitle: 'Home List',
         currentPage: 'home'
      });
   })
   .catch((error) => {
      console.log('Error while loading home list', error);
      next(error);
   });
}






