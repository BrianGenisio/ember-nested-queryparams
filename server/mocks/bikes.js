module.exports = function(app) {
  var express = require('express');
  var bikesRouter = express.Router();

  var idCount = 0;
  var bikes = [{
    id: idCount++,
    brand: "Specialized",
    model: "Tricross",
    isNew: false,
    style: "Cyclocross"
  }, {
    id: idCount++,
    brand: "Specialized",
    model: "Sirrus",
    isNew: true,
    style: "Fitness"
  }];

  bikesRouter.get('/', function(req, res) {
    res.send({
      'bikes': bikes
    });
  });

  bikesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  bikesRouter.get('/:id', function(req, res) {
    res.send({
      'bikes': {
        id: req.params.id
      }
    });
  });

  bikesRouter.put('/:id', function(req, res) {
    res.send({
      'bikes': {
        id: req.params.id
      }
    });
  });

  bikesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/bikes', bikesRouter);
};
