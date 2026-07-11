
                   //## Reading data from Files ##\\


const Home = require('../models/home');
exports.getAddHome = (req,res,next)=>{                   

  res.render('host/AddHome',  // host/edit-home
    {pageTitle: 'Add Home',
    currentPage:'add-home',
//  editing:false,
  }) ;
}

                 // for edit feature
/* maine yaha currentPage me tino me host-homes rakha hai kyuki
1) yaha currentPage me vhi honge jo navigation bar pr hai kyuki currentPage ko usi ke liye use kiya gya hai ki jb tk tm kisi ek page pr rho eg. Host Home to uska bg light rhe
2) all three have common main page host-homes
*/

exports.getEditing = (req,res,next)=>{                   

  res.render('host/edit-home',{pageTitle: 'Edit Home',currentPage:'host-home'}) ;
}

exports.getEditHome = (req,res,next)=>{

  // now taking the homeId dynamic parameter into a variable
  const homeId = req.params.homeId;

  // now taking the query parameter (editing = true) in a variable
  // abhi console me show kr rha true but vo string hai boolean nhi so we do ==='true' to make it boolean
  //req.query URL ke query parameters ko object ki form me deta hai.
  const editing = req.query.editing ==='true';

  // yha hm Home class ke findById ko call krr rhe jisme fetchAll pass hai jo sare homes ko read krta hai and data callback me pass krta hai and findById un data me se vo home dhundhta hai which id = homeId. findById ka callback yha home hai

  // ye isiliye kr rhe taaki jb edit pr click kre to data pehle se hi filled ho
  Home.findById(homeId,home=> {

    if(!home){
      console.log("Home not found for editing");
      //jb bhi response dena ho 'res' use krte h
       return res.redirect("/host/host-homes-list");
    }
    // checking everything 
    console.log(homeId, editing,home); 

    // else agar home mil gya to render kr denge
    
    res.render('host/edit-home',

    {pageTitle: 'Edit Home',
    currentPage:'host-home',
    // now ab home ki editing ki pageTitle and all saari details edit-home pr chali gyi hai 
    home:home,
    // editing variable ko ejs file ke andar bhej do.
    /*
    ab dekho yaha editing ek variable hai jisme editing ko sir ne bheja hai so now sir ne Addhome ko hi edit-home bna diya but maine alag page banaya hai edit-home ke liye (same path banane ke liye bass AddHome ka name edit-home krdo > hostRouter me add-home ki jagah edit-home > hostController me getAddHome ka path change > no getEditing and rest can be same)
    now ab yha editing isliye pass hua kyuki for editing = true mai ek naya page create kr skta hu just for this condition like if AddHome ko hi maine edit-home banaya hota to isse ek hi page ko do different UI se render kara skta tha
    */
   // it is called 'flag'
    editing:editing,
  
  }) ;

  })

  
  
}

exports.getHostHomes = (req,res,next)=>{      
  
 // yaha Home class ke fetchAll method ko call kiya hai aur usme ek callback function pass kiya hai jisme registerHomes ko render kiya hai
   Home.fetchAll((registerHomes)=>
    res.render('host/host-homes-list',
      {registerHomes : registerHomes , 
        pageTitle: 'Host Home List' ,
         currentPage: 'host-home'}));

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