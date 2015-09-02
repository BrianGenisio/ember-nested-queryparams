module.exports = function(app) {
  var express = require('express');
  var data = require('../data');
  var bikesRouter = express.Router();

  bikesRouter.get('/', function(req, res) {
    var result = data.bikes;
    
    if('isNew' in req.query) {
      result = result.filter(function(bike) {
        return bike.isNew.toString() === req.query.isNew;
      });
    }

    res.send({
      'bikes': result
    });
  });

  app.use('/api/bikes', bikesRouter);
};
