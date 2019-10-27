const mongoose = require('mongoose');


const SpotSchema = new mongoose.Schema({
    thumbnail : String, //image - just url
    company   : String,
    price: Number,
    techs     : [String],
    user      : {
        type : mongoose.Schema.Types.ObjectId,  //reference to user that created it 
        ref  : 'User',                          //reference to which model the info belongs
    }
});

module.exports = mongoose.model('Spot', SpotSchema);