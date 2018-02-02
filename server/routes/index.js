var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/api/regist', function(req, res, next) {
  var username=req.body.username;
  var psw=req.body.psw;
  var result={
  	code:1,
  	message:"注册成功"
  }
  if(username && psw){
  	res.json(result)
  }else{
  	result.code=100;
  	result.message="注册失败";
  	res.json(result)
  }
  
});

module.exports = router;
