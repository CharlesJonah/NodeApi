let users = require('../controllers/userController');

const routes = require('express').Router();

//user routes
        routes
            .post('/register', users.create_new_user)
            .get('/get-users', users.get_all_users)
            .get('/get-oneuser/:username', users.get_one_user);

module.exports = routes;
