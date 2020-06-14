const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  truckModel: {
    type: String,
    required: true,
  },
  tellphone: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
