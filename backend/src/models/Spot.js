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
}, 
    {
    toJSON: {
        virtuals: true
    },
} 
);


// one mongo virtual
SpotSchema.virtual('thumbnail_url').get( function() {
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);