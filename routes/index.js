var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  let content = fs.readFileSync("db/comments.json", "utf8");
  let users = JSON.parse(content);
  res.render('index', { page: "home", title: users} );
});

/*router.get('/:id', function(req, res, next) {
    var id = req.params.id; // получаем id
    var content = fs.readFileSync("db/comments.json", "utf8");
    var users = JSON.parse(content);
    var user = null;

    console.log('id ', id)
    // отправляем пользователя
    if(user){
        res.send(user);
    }
    else{
        res.status(404).send();
    }
  res.render('index_id', { page: "home", title: users} );
});*/

module.exports = router;
