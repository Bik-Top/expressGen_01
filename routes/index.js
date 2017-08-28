var express = require('express');
var router = express.Router();
var fs = require('fs');


getJson = (req, res, next, id) => {
    fs.readFile("db/comments.json", "utf8", function (err, data) {
        let users = JSON.parse(data);
        if (id >= 1) {
            res.render('home', {title: "home " + id, user: users[id - 1]});
        }
        else {
            res.render('index', {title: "home", page: users,});
        }
    });
};

// req.setHeader("Content-Type", "application/json");

router.get('/', function (req, res, next) {
    getJson(req, res, next)
});

router.get('/home/:id', function (req, res, next) {
    var id = req.params.id; // получаем id
    getJson(req, res, next, id);


    // отправляем пользователя
    // if(id >= 1){
    //     res.render('home', { title: "home "+id, user:  users[id-1]} );
    // }
    // else{
    //     res.status(err.status || 500);
    //     res.render('error');
    // }
})
/*
router.get('/:id', function (req, res, next) {
    var id = req.params.id; // получаем id
    getJson(req, res, next, id);


    // отправляем пользователя
    // if(id >= 1){
    //     res.render('home', { title: "home "+id, user:  users[id-1]} );
    // }
    // else{
    //     res.status(err.status || 500);
    //     res.render('error');
    // }
});*/


module.exports = router;
