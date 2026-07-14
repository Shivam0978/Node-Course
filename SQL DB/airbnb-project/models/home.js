

                              //## Adding Database(mySQL)##\\
// const fs = require('fs');
// const path = require('path');
// const rootDir = require('../utils/pathUtil');
// const Favourite = require('./favourites');


//  const homeDataPath = path.join(rootDir, 'data', 'homes.json');
                      // now we dont require any file handling operation in project

// importing utils database.js as a local module
const db = require('../utils/databaseUtil');
module.exports = class Home {


  constructor(houseName, houseAddress, price, city, photoURL,description,contact,Id) {

   
    this.HouseName = houseName;
    this.HouseAddress = houseAddress;
    this.City = city;
    this.price = price;
    this.photoURL = photoURL;
    this.contact = contact;
    this.description = description;
    this.Id = Id;
  }
  
  save() {
    if (this.Id) {
      // updating the home after edit and save
      //Ye query database me pehle se existing home ki details update karti hai.
      /*
      UPDATE homes → homes table ko update karo.
      SET → ye columns ki value change karo.
WHERE ID=? → sirf usi row ko update karo jiski ID match karti ho, and replace them with ?
       */
        return db.execute('UPDATE homes SET HouseName=? ,HouseAddress=? ,City=? ,price=? ,photoURL=? ,contact=?,description=? WHERE ID=?', [this.HouseName,this.HouseAddress,this.City,this.price,this.photoURL,this.contact,this.description,this.Id]);
    }

   
    /* yaha return function ka result waapas bhej rha hai

    db.execute() ek Promise return karta hai.
    Isliye return likhna zaroori hai taaki jis jagah function call hoga, waha .then() aur .catch() use kar saken.
    INSERT is a SQL command jiska mtlb 'Table me naya record add karo' and then columns ke name and unki value. and value me string ko '' isme likhna hota hai
    */

    /*
    now we usually dont use this type of code because here we directly execute and insert the data user input to add home and this type of code is vulnurable to SQL injection
    */
  //   return db.execute(`INSERT INTO homes (HouseName,HouseAddress,City,price,photoURL,contact,description) VALUES ('${this.HouseName}','${this.HouseAddress}','${this.City}',${this.price},'${this.photoURL}',${this.contact},'${this.description}')`)
  // }

  /*
    Yaha ? ko placeholder (Abhi value mat likho. Baad me array se value le lena) kehte hain
    Maan lo object me values hain:

this.HouseName = "Villa";
this.HouseAddress = "MG Road";
this.City = "Delhi";
this.price = 5000;
this.photoURL = "abc.jpg";
this.contact = "9876543210";
this.description = "Beautiful house";

To MySQL automatically placeholders replace karega.

1 st ?  → Villa

2 nd ?  → MG Road

3 rd ? → Delhi

4 th ? → 5000
Final query internally kuch aisi ban jayegi:

INSERT INTO homes
(HouseName,HouseAddress,City,price,photoURL,contact,description)

VALUES  
('Villa','MG Road','Delhi',5000,'abc.jpg','9876543210','Beautiful house')
                   {in the form of array}
Tumhe manually quotes (' ') lagane ki zarurat nahi padti.

   
   */
   else{
       return db.execute('INSERT INTO homes (HouseName,HouseAddress,City,price,photoURL,contact,description) VALUES (?,?,?,?,?,?,?)', [this.HouseName,this.HouseAddress,this.City,this.price,this.photoURL,this.contact,this.description]);
    }
    
  }
  // now ab ye callback nhi return krega it will return promise
  static fetchAll() {

                            // using new code

                       //(just one uncomment)

// // now we can run any query related to mySQL DB 
// //Ye code MySQL database se saare homes fetch karne ke liye use ho raha hai
// /*
// db → Ye tumhara database connection object hai.
// .execute() → Database me SQL query execute karta hai.
// 'SELECT * FROM homes' →
// SELECT → Data nikalne ke liye.
// * → Sare columns.
// FROM homes → homes table se.
// */ 
// db.execute('SELECT * FROM homes')

// /*
// Database se data lane me thoda time lag sakta hai.

// execute() ek Promise return karta hai.

// Agar query successfully execute ho jati hai, tab .then() chalega.

// result ke andar database ka response aata hai.
//  */

// // .then(result=>{
// //   console.log('Getting from DB',result);
// // })

// /*
// upar wale code ko run krke ye observe kiye hoge ki do array aa rhi hai otput me one of which is our data and second us data ke datatypes and some other info in which we are not interested 
// so now we define this data as rows and field in which the rows are the actual data we need and field contains the other info for that data
// */
// .then(([rows ,fields])=>{
//   console.log('Getting from DB',rows);
// })

// /*
// Agar query chalate waqt koi problem aa jaye, jaise:

// Table exist nahi karti
// Database connect nahi hua
// SQL query galat hai

// to .catch() execute hoga.
// */
// .catch(error=>{
//   console.log('Error while reading home records',error)
// })


                      // START
return db.execute('SELECT * FROM homes')

// now ab yaha hame .then and .catch hatana pdega kyuki basically execute ek promise return krta hai so now ab jis function ya file me ye method use ho rha hoga vo decide krega ki rows ka and data ka kya krna hai so there we use .then and .catch

/*.then(([rows ,fields])=>{
  console.log('Getting from DB',rows);
})

.catch(error=>{
  console.log('Error while reading home records',error)
})*/

  }
  
  static findById(homeId){
    
    // WHERE:-database se ek specific information fetch krne ke liye
    // here the code is saying ~ data fetch kro homes me se sare column ka (SELECT * FROM) and sirf vo row laao jiska id homeId ke equal ho
    return db.execute('SELECT * FROM homes WHERE ID=?', [homeId]);
  }
  static deleteById(homeId) {
 // just the above thing but now that particular home column will be deleted
    return db.execute('DELETE FROM homes WHERE ID=?', [homeId]);
  }
};

