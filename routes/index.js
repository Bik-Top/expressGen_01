var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  let content = fs.readFileSync("db/comments.json", "utf8");
  let users = JSON.parse(content);
    if(users){
        res.render('index', {title:  "home",  page: users, } );
    }
    else{
        res.status(err.status || 500);
        res.render('error');
    }

    next()
});

module.exports = router;
