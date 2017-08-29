var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
    console.log('###### home HOME ######  ');
    const getUrl = req.originalUrl.slice(1);

    res.render('home', { page: 'home', title: getUrl, user: user } );
});



module.exports = router;
