var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const getUrl = req.originalUrl.slice(1);

  res.render('test', { page: 'test', title: getUrl  } );
});


module.exports = router;
