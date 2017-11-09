let mongoose = require('mongoose');
let Users = mongoose.model('Users');


exports.create_new_user = (request, response) => {
    let newUser = new Users(request.body);
    newUser.save((error,user)=> {
        if(error){
            response.send(error);
        }
        response.json(user);
    });
};

exports.get_all_users = (request, response) => {
    Users.find({}, (error, users)=> {
        if(error) {
            response.send(error);
        }
        response.json(users)
    });
};

exports.get_one_user = (request, response) => {
    Users.find({}, { name: request.params.username}, (error, user)=>{
        if(error) {
            response.send(error)
        }
        response.json(user)
    });
};
