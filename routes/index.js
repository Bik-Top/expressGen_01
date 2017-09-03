let express = require('express');
let router = express.Router();
let fs = require('fs');

// users список данных
let Users = JSON.parse(fs.readFileSync("db/comments.json", "utf8"));
let user = null;

// req.setHeader("Content-Type", "application/json");
router
    .get('/', function (req, res, next) {
        res.render('index', {title: "home", page: Users,});
    })
    .get('/home/:id', function (req, res, next) {
        var _user = Users.find(function (Users) {
            return Math.round(Users.id, 10) === Number(req.params.id)
        });
        user = _user;
        res.render('home', {page: 'home', user: _user});
    })
    .get('/home/edit/:id', function (req, res, next) {
        res.render('form_user', {title: "form_user", page: 'form_user', user: user, _status: true});
    })
    .post('/home/edit/:id', function (req, res, next) {


        var userName = req.body.name;
        var userEmail = req.body.email;
        var userBody = req.body.body;

        var _user = {id: req.params.id, postId: 777, name: userName, email: userEmail, body: userBody};









       // if(!req.body) return res.sendStatus(400);



        fs.writeFileSync("db/comments.json", JSON.stringify(

            Users.map(function(i, k){
                return  Math.round(i.id, 10) === Math.round(req.params.id, 10) ? _user  : i ;
            })

        ));

        res.redirect('/');

    });







router.put('/home/edit/:id', function (req, res, next) {
    res.send('edit');
    // res.render('form_user', {title: "form_user", page: 'form_user', user: user, _status: true});
});


/*

router.put('/home/edit/:id', function (req, res, next) {
    res.send('edit');
    // res.render('form_user', {title: "form_user", page: 'form_user', user: user, _status: true});
});
router.delete('/home/delete/:id', function (req, res) {
    res.send('delete');
});


// рисуем форму изменения пользователя по id
router.get('/home', function (req, res, next) {
     res.render('form_user', {title: "form_user", page: 'form_user', user: user, _status: true});
});

// получение отправленных данных
router.post('/home/submit', function (req, res, next) {

    var userId = Math.max.apply(Math,Users.map(function(o){return o.id;}))+1;
    var userName = req.body.name;
    var userEmail = req.body.email;
    var userBody = req.body.body;

    var _user = {id: userId, name: userName, email: userEmail, body: userBody};

    if(!req.body) return res.sendStatus(400);
    user = _user;
    users.push(user);

    fs.writeFileSync("db/comments.json", JSON.stringify(Users));

    res.redirect('/');

});*/


module.exports = router;
