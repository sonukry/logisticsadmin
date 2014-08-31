'use strict';

var path = require('path'),
    auth = require('../config/auth');

module.exports = function(app) {
  // User Routes
  var users = require('../controllers/users');
  app.post('/auth/users', users.create);
  app.get('/auth/users/:userId', users.show);

  // Check if username is available
  // todo: probably should be a query on users
  app.get('/auth/check_username/:username', users.exists);

  // Session Routes
  var session = require('../controllers/session');
  app.get('/auth/session', auth.ensureAuthenticated, session.session);
  app.post('/auth/session', session.login);
  app.del('/auth/session', session.logout);

  // Fleet Routes
  var fleets = require('../controllers/fleets');
  
  app.get('/api/fleets', fleets.get);
  app.post('/api/fleets', fleets.post);
  
  app.get('/api/fleets/:id/drivers', fleets.getDrivers);
  app.post('/api/fleets/:id/drivers', fleets.addDriver);
  
  app.get('/api/fleets/:id/vehicles', fleets.getVehicles);
  app.post('/api/fleets/:id/vehicles', fleets.addVehicle);
  
  app.get('/api/fleets/:id/trips', fleets.getTrips);
  app.post('/api/fleets/:id/trips', fleets.addTrip);
  
  app.get('/api/fleets/:id/devices', fleets.getDevices);
  app.post('/api/fleets/:id/devices', fleets.addDevice);
  
  
  app.get('/api/fleets/:id', fleets.getById);
  
  // Driver Routes
//  var drivers = require('../controllers/drivers');
//  app.get('/api/drivers', drivers.get);
//  app.get('/api/drivers/:id', drivers.getById);
//  app.post('/api/drivers', drivers.post);
  
  // Vehicle Routes
//  var vehicles = require('../controllers/vehicles');
//  app.get('/api/vehicles', vehicles.get);
//  app.get('/api/vehicles/:id', vehicles.getById);
//  app.post('/api/vehicles', vehicles.post);
  
  // Trip Routes
  var trips = require('../controllers/trips');
  app.get('/api/trips', trips.get);
  app.get('/api/trips/:id', trips.getById);
  app.post('/api/trips', trips.post);
  
  // Angular Routes
  app.get('/partials/*', function(req, res) {
    var requestedView = path.join('./', req.url);
    res.render(requestedView);
  });

  app.get('/*', function(req, res) {
    if(req.user) {
      res.cookie('user', JSON.stringify(req.user.user_info));
    }

    res.render('index.html');
  });

};