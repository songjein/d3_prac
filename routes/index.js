var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dom_basic', function(req, res, next) {
  res.render('dom_basic', { title: 'Express' });
});

router.get('/svg', function(req, res, next) {
  res.render('svg', { title: 'Express' });
});

router.get('/d3_basic', function(req, res, next) {
  res.render('d3_basic', { title: 'Express' });
});

router.get('/d3_basic2', function(req, res, next) {
  res.render('d3_basic2', { title: 'Express' });
});
module.exports = router;
