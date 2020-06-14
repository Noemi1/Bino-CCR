const { Router } = require('express');
const UserController = require('./controllers/UserController');
const RoutesController = require('./controllers/RoutesController');
const NotificationController = require('./controllers/NotificationController');

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/routes', RoutesController.store);
routes.get('/routes', RoutesController.index);
routes.get('/notifications', NotificationController.index);

module.exports = routes;
