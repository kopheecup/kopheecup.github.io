const express = require('express');
var routes = express.Router();

const assetRoutes = require('./assetRoutes.js');
const userRoutes = require('./userRoutes.js');

routes.use('/assets', assetRoutes);
routes.use('/users', userRoutes);

module.exports = routes;
