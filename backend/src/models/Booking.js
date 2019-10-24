const mongoose = require('mongoose');


const BookingSchema = new mongoose.Schema({
    date: String,
    approved:  Boolean, // desse jeito é inicializado como nulon 
    user: {
        type : mongoose.Schema.Types.ObjectId,  //reference to user that created it 
        ref  : 'User',                          //reference to which model the info belongs
    },
    spot: {
        type : mongoose.Schema.Types.ObjectId,  //reference to user that created it 
        ref  : 'Spot',                          //reference to which model the info belongs
    }
});

module.exports = mongoose.model('Booking', BookingSchema);