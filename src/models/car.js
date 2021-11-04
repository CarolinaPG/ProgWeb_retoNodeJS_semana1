const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carSchema = new Schema({
    
});

module.exports = mongoose.model('car', carSchema, 'Cars');