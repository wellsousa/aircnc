
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    /*
     approved: {
         type: Boolean,
         default: false
     }
    */
    approved: Boolean, //null

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    spot:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);