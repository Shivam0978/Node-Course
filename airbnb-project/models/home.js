

//                 //## Adding Home detail ##\\
// const fs = require('fs');
// const path = require('path');
// const rootDir = require('../utils/pathUtil');

// module.exports = class Home {
//   constructor(houseName, houseAddress, price, city, photoURL) {
//     this.HouseName = houseName;
//     this.HouseAddress = houseAddress;
//     this.City = city;
//     this.price = price;
//     this.photoURL = photoURL;
//   }
  
//   save() {
//     //giving random id
//     this.id = Math.random().toString();
    
//     Home.fetchAll((homes) => {
     
//       homes.push(this);
     
//       const homeDataPath = path.join(rootDir, 'data', 'homes.json');
//       fs.writeFile(homeDataPath, JSON.stringify(homes, null, 2), (error) => {

//         // if there is an error in writing file then it will be logged in console
//         if (error) {
//           console.log('File writing denied', error);
//         }
//       });
//     });
//     console.log(this);
//   }
  
//   static fetchAll(callback) {
//     const homeDataPath = path.join(rootDir, 'data', 'homes.json');

//     fs.readFile(homeDataPath, (err, data) => {
//       if (err || !data) {
//         callback([]);
//         return;
//       }

//       const homes = JSON.parse(data);
//       callback(homes);
//     });
//   }

// };



//                 //## Showing real home data ##\\

// // So that on every homeId some data will be there
// const fs = require('fs');
// const path = require('path');
// const rootDir = require('../utils/pathUtil');

// //despite har function me use krne ke, ise global bana diya
//  const homeDataPath = path.join(rootDir, 'data', 'homes.json');

// module.exports = class Home {

//  // Constructor ek special method hota hai jo automatically tab call hota hai jab hum object banate hain.

//  // constructor ke andar jo jo hai use parameter kehte hai they automatically calls when we write new Home
//   constructor(houseName, houseAddress, price, city, photoURL,description,contact) {

//     // yaha this.Housename etc etc object ki property hai
//     /* new Home("Villa")
//     houseName = "Villa"
//     this.HouseName = "Villa"
    
//     */
//     this.HouseName = houseName;
//     this.HouseAddress = houseAddress;
//     this.City = city;
//     this.price = price;
//     this.photoURL = photoURL;
//     this.contact = contact;
//     this.description = description;
//   }
//   // it is also a method runs when we write Home.save()
//   save() {
//     //giving random Id
//     this.Id = Math.random().toString();
    
//     // fetchAll function dekho and Home.fetchAll means it is defined in Home as static
//     // now yaha homes file se jo data parsed hue hai vo hai
//     Home.fetchAll((homes) => {
//      // array ke last me current obj(data) add krdo
//      // this = jis object ne current method ko call kiya hai.
//       homes.push(this);
     
//     // Ab modified array ko file me dobara save kar do.
//       fs.writeFile(homeDataPath, JSON.stringify(homes, null, 2), (error) => {

//         // if there is an error in writing file then it will be logged in console
//         if (error) {
//           console.log('File writing denied', error);
//         }
//       });
//     });
//     console.log(this);
//   }
  
//   // now yaha 
//   static fetchAll(callback) {
  
// // reading the file at location 'homeDatapath' and (err, data) is a callback
//     fs.readFile(homeDataPath, (err, data) => {
//       // if there is error or no data then sent empty array
//       if (err || !data) {
//         // assigning callback value as empty so homes = []
//         callback([]);
//         return;
//       }
//       //jsne fetchAll call kiya hai (here: homes) use ye data de do
//       const homes = JSON.parse(data);

//       // assigning callback as homes 
//       callback(homes);
//     });
//   }
//   /* static method hai i.e ise class ke name se call krenge ( Home.findById)
//    homeId :- kis id ke liye ghar chahiye and callback
//    homeId :- iske house ki unique id hogi jisko render krna h
//    callback  :-jb house mil jayega tb is method ko return kr dega

//   */
//  // this method is to find a particular home
//   static findById(homeId,callback){
//     // pehle mere pass sare ghar ki list aa jayegi and then usme se jo id wala ghr chahiye vo extract ho jayega
   
//     // homes me jitne bhi houses honge fetchAll unhe le aayega this is for Home class
//     this.fetchAll(homes =>{
//       // yha find ek ek krke home me id find krega which is equal to the id given and jo home match hoga use return kr dega 
//       // now yaha find(callback) ye use hua h so pehle to fetchAll ne homes me sare data store kr diye now find function is same as filter so it also return a calklback in which the callback has same value as in homes so home.Id = homes.Id 
//       const homeFound = homes.find(home => home.Id === homeId);
//       //callback is not a special keyword, its just a variable storing a function
//       /*
//       callback use kiya jata hai jb ye function kisi aur file ya function me use kiya ja rha ho and iska output mujhe us function ya file me chahiye. yaha if callback (homeFound) nhi hota to function apna output baahar ke kisi file ya method ko nhi de pata 
//       */
//      // yaha tm is function ko controller me use kroge homeId load krne ke liye
//      // now jo obj mila use return krdo (assigning callback as homeFound)
//       callback(homeFound)

//     })

//   }
// };


                         //## Adding save logic ##\\
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const Favourite = require('./favourites');


 const homeDataPath = path.join(rootDir, 'data', 'homes.json');

module.exports = class Home {

 
  constructor(houseName, houseAddress, price, city, photoURL,description,contact) {

   
    this.HouseName = houseName;
    this.HouseAddress = houseAddress;
    this.City = city;
    this.price = price;
    this.photoURL = photoURL;
    this.contact = contact;
    this.description = description;
  }
  
  save() {
   // pehle sare ghar ka data read kro
    Home.fetchAll((homes) => {
      // if Id present hai then edit-home ka case hai because usme Id bhi assign kiya hai
      // this = newHome (kyuki save bhi Home class me hi hai)  this = jis object ne method call kiya
      if(this.Id){
        // now yaha hm new home nhi add kr rhe existing home ko hi change kr rhe honge
        // now ab homes me ek ek home dhundh rhe, here home is the callback of map having same data as homes
        homes = homes.map(home =>{
          // jis home me kisi ka Id Home.Id ke equal aa gya
          if(home.Id=== this.Id){
            // dekho ab ye tbhi execute hoga jb if(this.Id) true ho yaani value postEditHome se aayi ho cause ab starting me Id nhi mil rhi and thus ab this postEditHome ke newHome ko hi represent kr rha
            /* so return this says ki if homes me kisi bhi home ka id newHome (this) ke id se match hota hai to 'this' ko return krdo
            i.e us new array ko return krdo so map to vhi home lekr aaya tha jiska id match ho rha now vo home this se replace ho jayega and this contain the new edited data . 
            */ 

            return this ; 
          }
          return home;
        })
      }

      // else add-home ka case hai cause ab usme Id assign nhi hai 
      else{
         this.Id = Math.random().toString(); // yaha Id assign ho rhi
         homes.push(this);    // and then data pushed to homes
      }
  
     // writing to dono case me hogi so it is outsite the condition
   
      fs.writeFile(homeDataPath, JSON.stringify(homes, null, 2), (error) => {

      
        if (error) {
          console.log('File writing denied', error);
        }
      });
    });
    console.log(this);
  }
  
  // now yaha 
  static fetchAll(callback) {
  
// reading the file at location 'homeDatapath' and (err, data) is a callback
    fs.readFile(homeDataPath, (err, data) => {
      // if there is error or no data then sent empty array
      if (err || !data) {
        // assigning callback value as empty so homes = []
        callback([]);
        return;
      }
      //jsne fetchAll call kiya hai (here: homes) use ye data de do
      const homes = JSON.parse(data);

      // assigning callback as homes 
      callback(homes);
    });
  }
  
  static findById(homeId,callback){
    
    this.fetchAll(homes =>{
      
      const homeFound = homes.find(home => home.Id === homeId);
     
      callback(homeFound)

    })

  }
  static deleteById(homeId ,callback) {

     // fetching the data of all homes using fetchAll method
      this.fetchAll(homes=>{
        // if deleteById me jo homeId hai usse home ki koi bhi Id match ho jati hai to use delete kr dena hai else kuch nhi krna
        homes = homes.filter(home =>home.Id !== homeId);
        // yha filter homes me filter kr rha like jis home ki id match nhi ho rhi use homes me hi rakho else ko hata do
        // so when we click on delete for a particular id then that Id will be removed and so the house will too
        // now ab remaining data ko fir se homes.json me likhe rhe and after that callback is passed 
        // REMEMBER yaha callback(homes) nhi likha hai ki callback me homes ka data pass hoga yha callback execute ho rha i.e callback ki jagah koi bhi function hoga vo execute hoga
        
        fs.writeFile(homeDataPath,JSON.stringify(homes),callback);
        // so that favourite me se bhi vo id delete ho jaye
       
      })
  }
};


/*
main jb bhi callback define kru mujhe function me uski value bhi assign pdegi

       what is assgning means?
suppose tmne callback(homeFound) assign kr diya
means let say tmne findById kahi use kiya and usme homeId and second parameter kuch aur diya like koi function eg homeData to ab ye homeData = homeFound hai so now homeFound ke sare data homeData me hai main homeData.Housename krke bhi same chij extract kr skta hu which i can from homeFound.Housename

Ye mat sochna ki JavaScript ne naya object copy kar diya.

Actually hua ye hai:

homeData
        │
        ▼
     Object
    {
      HouseName:"Villa"
    }
        ▲
        │
homeFound

Dono same object ko point (reference) karte hain.

Isliye agar object change karoge:

homeData.HouseName = "Flat";

to

console.log(homeFound.HouseName);

Output bhi hoga:

Flat

Aur jab humne Home.fetchAll((homes)=>{}) likha to kya homes hi callback hai?

Answer hai:

❌ Nahi. homes callback nahi hai.

✅ (homes) => { ... } poora function callback hai.

Aur homes us callback function ka parameter hai.
*/