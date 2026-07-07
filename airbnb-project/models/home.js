

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

// So that 
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

module.exports = class Home {
  constructor(houseName, houseAddress, price, city, photoURL) {
    this.HouseName = houseName;
    this.HouseAddress = houseAddress;
    this.City = city;
    this.price = price;
    this.photoURL = photoURL;
  }
  
  save() {
    //giving random id
    this.id = Math.random().toString();
    
    Home.fetchAll((homes) => {
     
      homes.push(this);
     
      const homeDataPath = path.join(rootDir, 'data', 'homes.json');
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
    const homeDataPath = path.join(rootDir, 'data', 'homes.json');

    fs.readFile(homeDataPath, (err, data) => {
      if (err || !data) {
        callback([]);
        return;
      }

      const homes = JSON.parse(data);
      callback(homes);
    });
  }
  
};
