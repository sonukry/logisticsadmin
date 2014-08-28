var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DriverSchema = new Schema({
  name: String,
  addr: String,
  contact: String,
  gender: String,
  fleet: {
    _id: String,
    name: String
  },
  license: {
    number: String,
    issueDate: String,
    expiryDate: String
  }
});

var Driver = mongoose.model('Driver', DriverSchema);

module.exports = Driver;