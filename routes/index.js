var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld',function(req,res){
	res.render('hello',{ title : 'helloworld'});
});

router.get('/userlist',function(req,res){
	//	res.render('hello',{ title : 'helloworld'});
	
	var db=req.db; 
	var collection=db.get('usercollection');
	collection.find({},{},function(e,docs){
		res.render('userlist',{
			"userlist":docs
		});
	});

});

module.exports = router;