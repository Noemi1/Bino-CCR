const User = require('../models/User');

module.exports = {
  async store(request, response) {
    const { name, truckModel, tellphone } = request.body;

    const userExists = await User.findOne({ tellphone });

    if (userExists) {
      return response.json({ error: 'User already exists' });
    }

    const user = await User.create({
      name,
      truckModel,
      tellphone,
    });

    return response.json(user);
  },
};
