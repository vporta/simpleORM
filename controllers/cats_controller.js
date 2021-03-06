/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var cat = require('../models/cat.js');

router.get('/', function(req,res) {
	res.redirect('/cats')
});

router.get('/cats', function(req,res) {
	cat.all(function(data){
		var hbsObject = {cats : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

router.post('/cats/create', function(req,res) {
	cat.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], function(data){
		res.redirect('/cats')
	});
});

router.put('/cats/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	cat.update({'sleepy' : req.body.sleepy}, condition, function(data){
		res.redirect('/cats');
	});
});
// =================================
router.delete('/cats/delete/:id', function(req, res) {
	var conditon = 'id = ' + req.params.id;

	cat.update(condition, function(data){
		res.redirect('/cats');
	});
})

module.exports = router;
