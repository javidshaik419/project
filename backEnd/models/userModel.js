let mongoose = require('mongoose');
let userRegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,

    },
    mobile: {
        type: Number,
        required: true,

    },

    role: {
        type: String,
        required: true,

    },
    loginTime: {
        type: String,

    },
    logoutTime: {
        type: String,

    }


});
module.exports = mongoose.model('register', userRegisterSchema);



