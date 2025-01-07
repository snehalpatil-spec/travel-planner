//creating a schema for the user
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TravelplanSchema = new Schema({
    
});
const User = mongoose.model('Travelplan', TravelplanSchema);

module.exports = Travelplan;