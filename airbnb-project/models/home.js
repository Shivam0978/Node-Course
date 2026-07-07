

                          //## Reading Data from files ##\\

// so that after refreshing, data will be remain on the home page   
/* 
but here is a small error , writing files takes time and so the function fetchAll will be executed before that , for that we use 'callback' */             
// all modules necessary for writing files
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
    // sbse pehle fetchAll() method ko call kr rhe hai taaki homes me jo purane homes hai vo retrieve ho jaye , now yaha homes callback se aa rha hai,jo function niche define hai
    Home.fetchAll((homes) => {
      // ab homes me purane homes aa gaye hai , ab hum new home ko push karenge homes array me
      homes.push(this);
      // ab hum homes array ko json file me write karenge , so that data will be remain on the home page after refreshing
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
