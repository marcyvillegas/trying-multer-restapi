const mongoose = require('mongoose'); //pacakge that will help us connect to mongodb easily

const ProductSchema = mongoose.Schema({
    Product_Img:{
        type: String,
        required: true
    },
    Product_Type:{
        type:  String,
        required: true 
    },
    Product_Name:{
        type:  String,
        required: true 
    },
    Retail_Price:{
        type:  Number,
        required: true 
    },
    Unit_Price:{
        type:  Number,
        required: true 
    },
    Item_Sold:{
        type:  Number,
        required: true 
    },
    Stock:{
        type:  Number,
        required: true 
    },
    Category:  { 
        type: String,
        required: true
    },
    Date_added: {
        type: Date,
        default: Date.now
    },
    Indicator:  { // reference to the indicator 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Indicator"
    },
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product; 