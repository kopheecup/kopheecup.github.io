const express = require('express');
var users = express.Router();

const controller = require('../controllers/userControllers.js');


// Guest login

users.get('/guest', controller.guestLogin);

// Heartbeat

users.get('/heartbeat', controller.heartbeat);


module.exports = users;
