let express = require('express');
let router = express.Router();
let fs = require('fs');


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

router.get('/home', function(req, res, next) {
    const getUrl = req.originalUrl.slice(1);

    res.render('form_user', { page: 'form_user', name: 'name', email: 'email', body: 'body' } );
});

router.post('/home', function(req, res, next) {
    var userName = req.body.name;
    var userEmail = req.body.email;
    var userBody = req.body.body;
    var user = {name: userName, email: userEmail, body: userBody};

    res.render('home', { page: 'form_user', user: user  } );
});



router.get('/home/:id', function (req, res, next) {
    let id = req.params.id; // получаем id
    getJson(req, res, next, id);

});



module.exports = router;
