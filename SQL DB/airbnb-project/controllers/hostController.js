
                   //## Adding database(mySQL) ##\\


const Home = require('../models/home');
exports.getAddHome = (req,res,next)=>{                   

  res.render('host/AddHome',  
    {pageTitle: 'Add Home',
    currentPage:'add-home',

  }) ;
}


exports.getEditing = (req,res,next)=>{                   

  res.render('host/edit-home',{pageTitle: 'Edit Home',currentPage:'host-home'}) ;
}

exports.getEditHome = (req,res,next)=>{

  
  const homeId = req.params.homeId;
  const editing = req.query.editing ==='true';

  
 Home.findById(homeId).then(([homes]) =>{
      //Database ek array of rows return karta hai.Kyuki ID unique hoti hai, maximum ek hi record milega.
      //Database hamesha rows ko array ke form me return karta hai.
      /* now yha homes me vo ek id as array store ho jayegi and every id is unique so homes[0] will be the only 1 element store in the array with we assign to home 
       */
      const home = homes[0];

    if(!home){
      console.log("Home not found for editing");
    
       return res.redirect("/host/host-homes-list");
    }
  
    console.log(homeId, editing,home); 

 
    
    res.render('host/edit-home',

    {pageTitle: 'Edit Home',
    currentPage:'host-home',
   
    home:home,
    
    editing:editing,
  
  }) ;

  })

  
  
}

exports.getHostHomes = (req,res,next)=>{      
  
 // yaha Home class ke fetchAll method ko call kiya hai aur usme ek callback function pass kiya hai jisme registerHomes ko render kiya hai
    Home.fetchAll().then(([registerHomes,fields])=>{
    res.render('host/host-homes-list',
      {registerHomes : registerHomes , 
        pageTitle: 'Host Home List' ,
         currentPage: 'host-home'})
});

      }

exports.postHomeEntry = (req,res,next)=>{         
 
 //console.log('Home is successfully registered for: ',req.body);

 const newHome = new Home(
  
   req.body.HouseName,
   req.body.HouseAddress,
   req.body.price,
   req.body.City,
   req.body.photoURL,
   req.body.description,
   req.body.contact,
  
 );
 newHome.save();
 
 res.render('host/registered', {pageTitle: 'Registration',currentPage:'register'});

 // if you dont want register page then res.redirect('host/host-homes-list');
}

exports.postEditHome = (req,res,next)=>{         
 
 //console.log('Home is successfully registered for: ',req.body);
               // destructuring
 const{ Id , HouseName,HouseAddress,price,City,contact,description,photoURL,

 } = req.body;

 const newHome = new Home(
   HouseName,HouseAddress,price, City,photoURL,description,contact
 );

 newHome.Id = Id;
 newHome.save();
 
 res.redirect('/host/host-homes-list');
}

exports.postDeleteHome = (req,res,next)=>{
 
  const homeId = req.params.homeId;
  console.log("came to delete page",homeId)
 
  // DELETE FROM homes WHERE ID=?', [homeId] ye deleteById me hai which deletes the home which matches homeId
 Home.deleteById(homeId).then(() =>{
      res.redirect("/host/host-homes-list");
    
 }).catch(error=>{
  console.log('Error while deleting',error);
   res.redirect("/host/host-homes-list");

 })
 
    }
    