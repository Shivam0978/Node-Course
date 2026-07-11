


                //## Adding Favourite Model ##\\

// So that on every homeId some data will be there
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

// storing favourite.json file location into the variable
 const FavouriteDataPath = path.join(rootDir, 'data', 'favourite.json');
// exporting favourite class
module.exports = class Favourite {
  // adding add and get feature functions
  // yaha pehle id check hoga and then koi functioin (callback) pass hoga
  /* why passed callback?
   maybe hm kisi file ya function me is method ka use kre and hame is id ka sath kuch aur krna ho like koi other function pass krne ko which we did also then vo function callback me pass kiya ja sake
  */
  static AddtoFavourite(Id,callback) {
  // yaha favourites ek callback hai and which is a function
     Favourite.GetFavourite((favourites) => {
// if favourites me id hai to show kr do ki home pehle se marked hai else use add krlo
// includes check whether the id is present or not
/* check GetFavourite
now yaha fav me us file location me jitne data hai vo parsed hai (as in the GetFavourite function)
*/     // yaha includes(Id) direct use kr skte hai kyuki filter ka to use nhi kr rhe and Id favourites ka obj hai
      if (favourites.includes(Id)){
        
      //  console.log("Home is already marked favourite");
       // callback will be the function 
        callback("Home is already marked favourite");
      }
      else{
        favourites.push(Id);
        // if data nhi hai then push it in the file path as string and after all this done , call callback
        /* now yaha writeFile ke andar callback kya kr rha? so writeFile bhi ek asynchronous function hai so it take time and Agar callback na ho to tumhe kaise pata chalega ki file save hui ya nahi and isiliye callback me constroller me error hai so if koi error aaye to console me show kr de
        */
        fs.writeFile(FavouriteDataPath , JSON.stringify(favourites) , callback);
      }

      })
       
  }
  // callback basically ek function/ method hai which can be pass in other files in this method to perform some operation inside this method
  static GetFavourite(callback){
      // now yaha 'FavouriteDataPath' is variable me jo path store hai vo read kr rhe hai
      /*
      fs.readFile(path, callback)
      this is the syntax of readFile so (err,data is a callback) with execute after the file being read.
      Callback function (file read hone ke baad kya karna hai)
      */
    fs.readFile(FavouriteDataPath ,(err,data)=>{
      /*if (!err) {
      // Yani parsed data ko jis function ne fetchAll() etc call kiya tha, uske paas bhej do
      callback(JSON.parse(data));
}      else {
        //return emptry array
    callback([]);
}
       */
      callback(!err ? JSON.parse(data):[]);
    });
  }
      
};