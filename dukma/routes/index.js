var express = require('express');
var router = express.Router();

// 1. 홈페이지
router.get('/', function(req, res, next) {
  res.render('home.html');
});

// 2. 계정 (로그인, 회원가입)
const account=require('./account/account.js');
router.use('/account',account);

module.exports = router;
