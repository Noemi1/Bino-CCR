const Notification = require('../models/Notification');
const User = require('../models/User');

module.exports = {
  async index(request, response) {
    const { user_id } = request.headers;

    const user = await User.findOne({ _id: user_id });

    if (!user) {
      return request.status(400).json({ error: 'User not found' });
    }

    const notifications = await Notification.find({
      user: user_id,
      read: false,
    });

    return response.json(notifications);
  },
};
