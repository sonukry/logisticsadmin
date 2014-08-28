'use strict';

var mongoose = require('mongoose'),
    config = require('../config/config'),
    User = require('../models/user');
exports.mongoose = mongoose;

var mongoOptions = { db: { safe: true } };

// Connect to Database
exports.db = mongoose.connect(config.db, mongoOptions, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + config.db + '. ' + err);
  } else {
    console.log ('Successfully connected to: ' + config.db);
    
    User.find({ username: 'shubham'}, function(err, doc) {
      if(doc.length == 0) {
        
        var admin = new User({
          email: 'admin@abc.com',
          username: 'admin',
          password: 'admin'
        });

        admin.save(function(err) {});
      }
    });
  }
});
