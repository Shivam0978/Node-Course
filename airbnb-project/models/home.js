

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



                //## Showing real home data ##\\

// So that on every homeId some data will be there
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

//despite har function me use krne ke, ise global bana diya
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
    //giving random id
    this.id = Math.random().toString();
    
    Home.fetchAll((homes) => {
     
      homes.push(this);
     
     
      fs.writeFile(homeDataPath, JSON.stringify(homes, null, 2), (error) => {

        // if there is an error in writing file then it will be logged in console
        if (error) {
          console.log('File writing denied', error);
        }
      });
    });
    console.log(this);
  }
  
  static fetchAll(callback) {
  

    fs.readFile(homeDataPath, (err, data) => {
      if (err || !data) {
        callback([]);
        return;
      }

      const homes = JSON.parse(data);
      callback(homes);
    });
  }
  /* static method hai i.e ise class ke name se call krenge ( Home.findById)
   homeId :- kis id ke liye ghar chahiye and callback
   homeId :- iske house ki unique id hogi jisko render krna h
   callback  :-jb house mil jayega tb is method ko return kr dega

  */
  static findById(homeId,callback){
    // pehle mere pass sare ghar ki list aa jayegi and then usme se jo id wala ghr chahiye vo extract ho jayega
   
    // homes me jitne bhi houses honge fetchAll unhe le aayega
    this.fetchAll(homes =>{
      // yha find ek ek krke home me id find krega which is equal to the id given and jo home match hoga use return kr dega
      const homeFound = homes.find(home => home.id === homeId);
      //callback is not a special keyword, its just a variable storing a function
      /*
      callback use kiya jata hai jb ye function kisi aur file ya function me use kiya ja rha ho and iska output mujhe us function ya file me chahiye. yaha if callback (homeFound) nhi hota to function apna output baahar ke kisi file ya method ko nhi de pata 
      */
     // yaha tm is function ko controller me use kroge homeId load krne ke liye
     // callback bhi home ko return krega
      callback(homeFound)

    })

  }
};
