const { Router } = require('express');
const UserController = require('./controllers/UserController');
const RoutesController = require('./controllers/RoutesController');

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/routes', RoutesController.store);
routes.get('/routes', RoutesController.index);

module.exports = routes;
