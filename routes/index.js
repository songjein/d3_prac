var express = require('express');
var router = express.Router();

/* GET home page. */
// chapter 1 
// chapter 1 
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

// chapter 2
// chapter 2
router.get('/bargraph', function(req, res, next) {
  res.render('bargraph', { title: 'Express' });
});

router.get('/scatter', function(req, res, next) {
  res.render('scatter', { title: 'Express' });
});

router.get('/scatter_update', function(req, res, next) {
  res.render('scatter_update', { title: 'Express' });
});

module.exports = router;
