const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    email: String,
    // tentar mecher noschena 
});

module.exports = mongoose.model('User', UserSchema);