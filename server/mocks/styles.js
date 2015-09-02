module.exports = function(app) {
  var express = require('express');
  var stylesRouter = express.Router();
  var data = require('../data');

  var idCount = 0;  

  var styles = data.bikes.map(function(bike) {
    return {
      id: idCount++,
      name: bike.style
    };
  });

  stylesRouter.get('/', function(req, res) {
    res.send({
      'styles': styles
    });
  });

  app.use('/api/styles', stylesRouter);
};
