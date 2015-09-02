module.exports = function(app) {
  var _ = require('lodash');
  var express = require('express');
  var stylesRouter = express.Router();
  var data = require('../data');

  var idCount = 0;  

  var styles = data.bikes.map(function(bike) {
    return bike.style;
  });

  styles = _.uniq(styles);

  styles = styles.map(function(style) {
    return {
      id: idCount++,
      name: style
    };
  });

  stylesRouter.get('/', function(req, res) {
    res.send({
      'styles': styles
    });
  });

  app.use('/api/styles', stylesRouter);
};
