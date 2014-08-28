var Fleet = require('../models/fleet'),
Driver = require('../models/driver'),
Vehicle = require('../models/vehicle'),
Trip = require('../models/trip');

module.exports = {
  get: function(req, res) {
    res.set("Connection", "close");
    
    var fields = {};
    
    if(req.query.fields) {
      var f = req.query.fields.split(',');
      
      for(var i = 0, l = f.length; i < l; i++) {
        fields[ f[i] ] = 1;
      }
    } else {
      fields = { __v : 0 };
    }
    
    Fleet.find({}, fields, function (err, docs) {
      if (err) {
        console.log(err);
        res.status(500);
      } else {
        res.json(200, docs);
      }
    });
  },
  getById: function(req, res) {
    res.set("Connection", "close");
    
    var fields = {};
    
    if(req.query.fields) {
      var f = req.query.fields.split(',');
      
      for(var i = 0, l = f.length; i < l; i++) {
        fields[ f[i] ] = 1;
      }
    } else {
      fields = { __v : 0 };
    }
    
    Fleet.find({ _id: req.params.id }, fields, function (err, docs) {
      if (err) {
        res.status(500);
      } else {
        res.json(200, docs);
      }
    });
  },
  post: function(req, res) {
    
    res.set("Connection", "close");
    
    var fleet = new Fleet(req.body.fleet);
    
    fleet.save(function(err) {
      if(err) {
        res.status(500);
      } else {
        res.json(201, fleet);
      }
    });    
  },
  addDriver: function(req, res) {
    res.set("Connection", "close");
  
    var id = req.params.id;
    var driver = new Driver(req.body.driver);
    
    Fleet.update({ _id: id }, { $push: { drivers: driver } }, { upsert: true }, function(err, doc) {
      if(err) {
        console.log(err)
        res.status(500);
      } else {
        res.json(200);
      }
    });
  },
  addVehicle: function(req, res)  {
    res.set("Connection", "close");
  
    var id = req.params.id;
    var vehicle = new Vehicle(req.body.vehicle);
    
    Fleet.update({ _id: id }, { $push: { vehicles: vehicle } }, { upsert: true }, function(err, doc) {
      if(err) {
        res.status(500);
      } else {
        res.json(200);
      }
    });    
  },
  addTrip: function(req, res)  {
    res.set("Connection", "close");
  
    var id = req.params.id;
    var trip = new Trip(req.body.trip);
    
    Fleet.update({ _id: id }, { $push: { trips: trip } }, { upsert: true }, function(err, doc) {
      if(err) {
        res.status(500);
      } else {
        res.json(200);
      }
    });    
  },
  getDrivers: function(req, res) {
    res.set("Connection", "close");
    
    Fleet.find({ _id: req.params.id }, { drivers: 1 }, function (err, docs) {
      if (err) {
        res.status(500);
      } else {
        res.json(200, docs[0]);
      }
    });
  },
  getVehicles: function(req, res) {
    res.set("Connection", "close");
    
    Fleet.find({ _id: req.params.id }, { vehicles: 1 }, function (err, docs) {
      if (err) {
        res.status(500);
      } else {
        res.json(200, docs[0]);
      }
    });
  },
  getTrips: function(req, res) {
    res.set("Connection", "close");
    
    Fleet.find({ _id: req.params.id }, { trips: 1 }, function (err, docs) {
      if (err) {
        res.status(500);
      } else {
        res.json(200, docs[0]);
      }
    });
  }
};