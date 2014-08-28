var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TripSchema = new Schema({
  summary: String,
  startingPlace: String,
  destination: String,
  vehicle: {
    _id: String,
    registrationNumber: String
  },
  driver: {
    _id: String,
    name: String
  }
});

var Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;