const mongoose = require('mongoose'); //pacakge that will help us connect to mongodb easily

const IndicatorSchema = mongoose.Schema({
    Low_Stock_Indicator:{
        type:  Number,
        required: true 
    },
    High_Stock_Indicator:{
        type:  Number,
        required: true 
    },
    New_Date_Indicator:{
        type:  Number,
        required: true 
    }
})

module.exports = mongoose.model('Indicator', IndicatorSchema);