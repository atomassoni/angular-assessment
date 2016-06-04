var express = require('express');
var router = express.Router();
var Heroe = require('../models/hero');


//gets all super heroes
router.get('/', function (req, res) {

  Heroe.find({}, function (err, heroes) {
    if (err) {
      res.sendStatus(500);
      console.log("power get", power);
      return;
    }
    console.log('heroes', heroes);
    res.send(heroes);
  });
});

router.delete('/:id', function (req, res) {
  Heroe.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.sendStatus(204);
  });
});

module.exports = router;
