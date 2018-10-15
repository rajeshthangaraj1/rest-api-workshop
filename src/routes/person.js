let express = require('express')
let router =express.Router()
<!--query string-->
router.get('/person',(req,res)=>{
  if(req.query.name)
  {
     res.send(`you have requested a person ${req.query.name}`);
  }
  else
  {
    res.send('you have requested a person');
  }


})

<!--params string-->
router.get('/person/:name',(req,res)=>{
   res.send(`you have requested a person ${req.params.name}`);

})

<!--error-->
router.get('/person/error',(req,res)=>{
   throw new Error('This is forced error');

})

module.exports = router
