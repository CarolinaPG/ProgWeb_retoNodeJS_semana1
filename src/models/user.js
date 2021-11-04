const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'car'
    }]
});

module.exports = mongoose.model('user', userSchema, 'Users');