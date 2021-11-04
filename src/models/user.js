const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    typeID: String,
    ID: String,
    firstName: String,
    lastName: String,
    address: String,
    email: String,
    phone: String,
    celphone: String,
    webLink: String,
    profile: String,
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'car'
    }]
});

module.exports = mongoose.model('user', userSchema, 'Users');