const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  read: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model('Notification', NotificationSchema);
