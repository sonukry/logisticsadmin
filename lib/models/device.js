var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DeviceSchema = new Schema({
  uuid: String,
  manufacturer: String,
  warranty: String,
  softwareVersion: String
});

var Device = mongoose.model('Device', DeviceSchema);

module.exports = Device;