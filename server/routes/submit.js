var express = require('express');
var router = express.Router();
var SuperPower = require('../models/superpower');
var Heroe = require('../models/hero');
//posts a new favorite pet
router.post('/', function (req, res) {
  var hero = new Heroe(req.body);
  hero.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});
//gets all the powers
router.get('/', function (req, res) {
  SuperPower.find({}, function (err, powers) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    console.log('powers', powers);
    res.send(powers);
  });
});



module.exports = router;
