exports.PageNotFound= (req,res,next)=>{
  console.log("404 Error!");
  res.status(404).render('404',{pageTitle: 'page not found', currentPage: '404'}) 
}