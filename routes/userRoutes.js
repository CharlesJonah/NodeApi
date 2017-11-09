let users = require('../controllers/userController');

const routes = require('express').Router();

//user routes
        routes
            .post('/register', users.create_new_user);

module.exports = routes;
