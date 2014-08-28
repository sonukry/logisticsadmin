var Driver = require('../models/driver');

module.exports = {
  get: function(req, res) {
    
    res.set("Connection", "close");
    
    Driver.find({}, { __v: 0 }, function (err, docs) {
      if (err) {
        res.status(500);
      } else {
        res.json(200, docs);
      }
    });
  },
  getById: function(req, res) {
    
    res.set("Connection", "close");
    
    Driver.find({ _id: req.params.id }, { __v: 0 }, function (err, doc) {
      if (err) {
        res.status(500);
      } else {
        res.json(200, doc);
      }
    });
  },
  post: function(req, res) {
    
    res.set("Connection", "close");
    
    var driver = new Driver(req.body.driver);
    
    driver.save(function(err) {
      if(err) {
        res.status(500);
      } else {
        res.json(201, driver);
      }
    });    
  }
};