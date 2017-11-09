let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const ROLE_TYPES = ['user', 'admin'];

let UserSchema = new Schema({
    name:{
        type: String,
        required: 'Your name is required'
    },
    email: {
        type: String,
        required: 'Your email address is required'
    },
    Created_date: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        enum: ROLE_TYPES,
        default: ['user']
    }
});

module.exports = mongoose.model('Users', UserSchema);
