var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var FleetSchema = new Schema({
  name: String,
  area: String,
  vehicles: [],
  drivers: [],
  trips: [],
  devices: []
});

var Fleet = mongoose.model('Fleet', FleetSchema);

module.exports = Fleet;