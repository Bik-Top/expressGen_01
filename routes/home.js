var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/home', function(req, res, next) {
    var id = req.params.id; // получаем id
    var content = fs.readFileSync("db/comments.json", "utf8");
    var users = JSON.parse(content);

    // отправляем пользователя
    if(id >= 1){
        res.render('home', { title: "home "+id, user:  users[id-1]} );
    }
    else{
        res.status(err.status || 500);
        res.render('error');
    }
    next();
});

module.exports = router;
