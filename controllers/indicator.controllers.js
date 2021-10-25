const Indicator = require('../models/indicator.model')
const Product = require('../models/products.model')

module.exports = {
    index: async(req, res) => {
        const indicator = await Indicator.find({});
        res.status(200).json(indicator);        
    },

    newIndicator: async (req, res) => {
        const newIndicator = new Indicator(req.body);
        const indicator = await newIndicator.save()
        res.status(201).json(indicator);
    },

    getIndicator: async (req, res) => {
        const { indicatorId } = req.params;
    
        const indicator = await Indicator.findById(indicatorId);
        res.status(200).json(indicator);
    },

    replaceIndicator: async (req, res) => {
        //Requires that req.body must contain all the fields
        const { indicatorId } = req.params;
        const newIndicator = req.body;
        
        const result = await Indicator.findByIdAndUpdate(indicatorId, newIndicator);
        console.log('result', result);
        res.status(200).json({success: true});
    },

    updateIndicator: async (req, res) => {
        //req.body must contain  some of the the fields 
        const { indicatorId } = req.params;
        const newIndicator = req.body;
        
        const result = await Indicator.findByIdAndUpdate(indicatorId, newIndicator);
        console.log('result', result);
        res.status(200).json({success: true});
    }
}