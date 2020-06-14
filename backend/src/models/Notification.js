const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  ready: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model('Notification', NotificationSchema);
