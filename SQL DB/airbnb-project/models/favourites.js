


                //## Adding database (mySQL) ##\\


const db = require('../utils/databaseUtil');

module.exports = class Favourite {
  static ensureTable() {
    return db.execute(`
      CREATE TABLE IF NOT EXISTS favourites (
        id INT AUTO_INCREMENT PRIMARY KEY,
        homeId INT NOT NULL UNIQUE
      )
    `);
  }

  static AddtoFavourite(Id) {
    return Favourite.GetFavourite()
      .then((favourites) => {
        if (favourites.includes(Number(Id))) {
          return Promise.resolve();
        }

        return db.execute('INSERT INTO favourites (homeId) VALUES (?)', [Id]);
      });
  }

  static GetFavourite() {
    
    return Favourite.ensureTable()
    /*Sabse pehle ye check karta hai ki favourites table exist karti hai ya nahi.
    Agar table nahi hogi to bana dega.
*/
      .then(() => db.execute('SELECT homeId FROM favourites'))
      .then(([rows]) => rows.map((row) => row.homeId));
      /*
      Favourite.ensureTable()
        │
        ▼
Table ready
        │
        ▼
SELECT homeId FROM favourites
        │
        ▼
[
  {homeId:3},
  {homeId:5},
  {homeId:8}
]
        │
        ▼
rows.map(row => row.homeId)
        │
        ▼
rows=[3,5,8]
       */
  }

  static deleteById(delHomeId) {
    return Favourite.ensureTable()
      .then(() => db.execute('DELETE FROM favourites WHERE homeId=?', [delHomeId]));
  }
};