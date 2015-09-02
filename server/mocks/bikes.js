module.exports = function(app) {
  var express = require('express');
  var bikesRouter = express.Router();

  var idCount = 0;
  var bikes = [{
    id: idCount++,
    brand: "Specialized",
    model: "Tricross",
    isNew: false,
    style: "Cyclocross",
    condition: "fair"
  }, {
    id: idCount++,
    brand: "Specialized",
    model: "Sirrus",
    isNew: true,
    style: "Fitness"
  }];

  bikesRouter.get('/', function(req, res) {
    var result = bikes;
    
    if('isNew' in req.query) {
      result = bikes.filter(function(bike) {
        return bike.isNew.toString() === req.query.isNew;
      });
    }

    res.send({
      'bikes': result
    });
  });

  app.use('/api/bikes', bikesRouter);
};
