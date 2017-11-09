let mongoose = require('mongoose');
let Users = mongoose.model('Users');

exports.create_new_user = function(request, response) {
    let newUser = new Users(request);
    newUser.save((error,user)=> {
        if(error){
            response.send(error);
        }
        response.json(user);
    })

};
