var Trips = require('../models/trip');

module.exports = {
  get: function(req, res) {
    
    res.set("Connection", "close");
    
    Trips.find({}, { __v: 0 }, function (err, docs) {
      if (err) {
        res.status(500);
      } else {
        res.json(200, docs);
      }
    });
  },
  getById: function(req, res) {
    
    res.set("Connection", "close");
    
    Trips.find({ _id: req.params.id }, { __v: 0 }, function (err, docs) {
      if (err) {
        res.status(500);
      } else {
        res.json(200, docs);
      }
    });
  },
  post: function(req, res) {
    
    res.set("Connection", "close");
    
    var trip = new Trips(req.body.trip);
    
    trip.save(function(err) {
      if(err) {
        res.status(500);
      } else {
        res.json(201, trip);
      }
    });    
  }
};