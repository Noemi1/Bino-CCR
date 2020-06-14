const Route = require('../models/Route');
const User = require('../models/User');

module.exports = {
  async index(request, response) {
    const { user_id } = request.headers;

    const user = await User.findOne({ _id: user_id });

    if (!user) {
      return response.status(400).json({ error: 'User not found' });
    }

    const routes = await Route.find({ user: user._id });

    return response.json(routes);
  },
  // async show(request, response) {
  //   const { id } = request.params;
  //   const { user_id } = request.headers;

  //   const user = await User.findOne({ _id: user_id });

  //   if (!user) {
  //     return response.status(400).json({ error: 'User not found' });
  //   }
  //   const route = await Route.findOne({ _id: id });

  //   if (!route) {
  //     return response.status(400).json({ error: 'Route not found' });
  //   }

  //   if (route.user !== user_id) {
  //     return response
  //       .status(401)
  //       .json('You can only view routes that you have created.');
  //   }

  //   return response.json(route);
  // },
  async store(request, response) {
    const { user_id } = request.headers;
    const {
      locationLatitude,
      locationLongitude,
      destinationLatitude,
      destinationLongitude,
    } = request.body;

    const user = await User.findOne({ _id: user_id });

    if (!user) {
      return response.status(400).json({
        error: 'User not found',
      });
    }

    const location = {
      type: 'Point',
      coordinates: [locationLongitude, locationLatitude],
    };
    const destination = {
      type: 'Point',
      coordinates: [destinationLongitude, destinationLatitude],
    };

    const route = await Route.create({
      user,
      location,
      destination,
    });
    return response.json(route);
  },
};
