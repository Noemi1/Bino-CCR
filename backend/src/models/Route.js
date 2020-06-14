const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const RouteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
  destination: {
    type: PointSchema,
    index: '2dsphere',
  },
});
module.exports = mongoose.model('Route', RouteSchema);
