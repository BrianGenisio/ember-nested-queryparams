module.exports = function(app) {
  var _ = require('lodash');
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

    if('styles' in req.query) {
      var styles = req.query.styles.map(function(style) {
        return style.toLowerCase();
      });

      result = result.filter(function(bike) {
        return _.contains(styles, bike.style.toLowerCase());
      });
    }

    res.send({
      'bikes': result
    });
  });

  app.use('/api/bikes', bikesRouter);
};
