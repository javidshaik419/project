var mongoose = require('mongoose');

require('../models/userModel')

function dbConnection() {

    mongoose.connect('mongodb://localhost:27017/techies').then(() => {
        console.log("Database connected successfully");

    })
        .catch((error) => {
            console.log("Error in connecting to Database");
        });

}
module.exports = {
    dbConnection
}
