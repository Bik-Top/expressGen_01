let express = require('express');
let router = express.Router();
let fs = require('fs');

// users список данных
let users = JSON.parse(fs.readFileSync("db/comments.json", "utf8"));
let user = null;

// req.setHeader("Content-Type", "application/json");

router.get('/', function (req, res) {
    res.render('index', {title: "home", page: users,});
});

// получение одного пользователя по id
router.get('/home/:id', function (req, res) {

    var _user = users.find(function (users) {
        return users.id === Number(req.params.id)
    });

    user = _user;
    res.render('home', {page: 'form_user', user: _user});
});

// рисуем форму изменения пользователя по id
router.get('/home', function (req, res) {

     res.render('form_user', {title: "form_user", page: 'form_user', user: user});
});

// получение отправленных данных
router.post('/home', function (req, res) {

    var userId = Math.max.apply(Math,users.map(function(o){return o.id;}))+1;
    var userName = req.body.name;
    var userEmail = req.body.email;
    var userBody = req.body.body;

    var _user = {id: userId, name: userName, email: userEmail, body: userBody};

    if(!req.body) return res.sendStatus(400);
    user = _user;
    users.push(user);

    fs.writeFileSync("db/comments.json", JSON.stringify(users));

    res.redirect('/');

});


module.exports = router;
