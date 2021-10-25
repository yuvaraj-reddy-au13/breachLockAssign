const mongoose = require('mongoose');

require('dotenv').config();


const slotLength = process.env.SLOTLENGTH || 6

const carSchema = mongoose.Schema({
    carName : {
        type : String,
        required : true
    },

    carNumber : {
        type : String,
        required : true
    },

    carColour : {
        type : String,
        required : true,
    },

    slotNumber : {
        type : Number,
        required : true,
        maxLength : [slotLength, 'Parking Space is full!!'],
        default : 0
    }


})


const Car = mongoose.model('Car', carSchema)

module.exports = Car;