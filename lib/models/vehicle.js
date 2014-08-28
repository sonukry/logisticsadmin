var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var VehicleSchema = new Schema({
  make: String,
  model: String,
  registrationNumber: String,
  engineNumber: String,
  chassisNumber: String,
  type: String,
  fleet: {
    _id: String,
    name: String
  },
});

var Vehicle = mongoose.model('Vehicle', VehicleSchema);

module.exports = Vehicle;