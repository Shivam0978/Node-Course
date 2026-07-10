

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

 // Constructor ek special method hota hai jo automatically tab call hota hai jab hum object banate hain.

 // constructor ke andar jo jo hai use parameter kehte hai they automatically calls when we write new Home
  constructor(houseName, houseAddress, price, city, photoURL,description,contact) {

    // yaha this.Housename etc etc object ki property hai
    /* new Home("Villa")
    houseName = "Villa"
    this.HouseName = "Villa"
    
    */
    this.HouseName = houseName;
    this.HouseAddress = houseAddress;
    this.City = city;
    this.price = price;
    this.photoURL = photoURL;
    this.contact = contact;
    this.description = description;
  }
  // it is also a method runs when we write Home.save()
  save() {
    //giving random id
    this.id = Math.random().toString();
    
    // fetchAll function dekho and Home.fetchAll means it is defined in Home as static
    // now yaha homes file se jo data parsed hue hai vo hai
    Home.fetchAll((homes) => {
     // array ke last me current obj(data) add krdo
     // this = jis object ne current method ko call kiya hai.
      homes.push(this);
     
    // Ab modified array ko file me dobara save kar do.
      fs.writeFile(homeDataPath, JSON.stringify(homes, null, 2), (error) => {

        // if there is an error in writing file then it will be logged in console
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
  /* static method hai i.e ise class ke name se call krenge ( Home.findById)
   homeId :- kis id ke liye ghar chahiye and callback
   homeId :- iske house ki unique id hogi jisko render krna h
   callback  :-jb house mil jayega tb is method ko return kr dega

  */
 // this method is to find a particular home
  static findById(homeId,callback){
    // pehle mere pass sare ghar ki list aa jayegi and then usme se jo id wala ghr chahiye vo extract ho jayega
   
    // homes me jitne bhi houses honge fetchAll unhe le aayega yaha this is for Home class
    this.fetchAll(homes =>{
      // yha find ek ek krke home me id find krega which is equal to the id given and jo home match hoga use return kr dega 
      // find(home (ek function hai) => home.id (this.id which has been saved in home)=== homeId (parameter passed in the function)) 
      const homeFound = homes.find(home => home.id === homeId);
      //callback is not a special keyword, its just a variable storing a function
      /*
      callback use kiya jata hai jb ye function kisi aur file ya function me use kiya ja rha ho and iska output mujhe us function ya file me chahiye. yaha if callback (homeFound) nhi hota to function apna output baahar ke kisi file ya method ko nhi de pata 
      */
     // yaha tm is function ko controller me use kroge homeId load krne ke liye
     // now jo obj mila use return krdo (assigning callback as homeFound)
      callback(homeFound)

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