var express=require('express');
var router=express.Router();
var mysql=require('mysql');
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'klo',
  database:'haazriLogin',
});
//GET user listing
router.get('/',function(req,res,next)
{
  var userName=req.body.userName;
  var password=req.body.password;
  connection.query("SELECT * FROM login WHERE userName= ? AND password= ?",[userName,password],function(err,row,fields)
  {
    if(err)console.log(err);
    if(row.length>0)
    {
      res.send({'success':true,'message':row[0].userName});
    }
    else {
      res.send({'success':false,'message':'User not found, please try again'});
    }
  });
});

module.exports=router;
