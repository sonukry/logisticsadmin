var Vehicle = require('../models/vehicle');

module.exports = {
  get: function(req, res) {
    
    res.set("Connection", "close");
    
    Vehicle.find({}, { __v: 0 }, function (err, docs) {
      if (err) {
        res.status(500);
      } else {
        res.json(200, docs);
      }
    });
  },
  getById: function(req, res) {
    
    res.set("Connection", "close");
    
    Vehicle.find({ _id: req.params.id }, { __v: 0 }, function (err, doc) {
      if (err) {
        res.status(500);
      } else {
        res.json(200, doc);
      }
    });
  },
  post: function(req, res) {
    
    res.set("Connection", "close");
    
    var vehicle = new Vehicle(req.body.vehicle);
    
    vehicle.save(function(err) {
      if(err) {
        res.status(500);
      } else {
        res.json(201, vehicle);
      }
    });    
  }
};