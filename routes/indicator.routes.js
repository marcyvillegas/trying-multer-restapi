const express = require('express');
const router = require('express-promise-router')(); // same as express.Router(); but installled this packge that will let us not write try and catch
const Indicator = require('../models/indicator.model');
const IndicatorController = require('../controllers/indicator.controllers');

router.route('/') 
    .get(IndicatorController.index)
    .post(IndicatorController.newIndicator)

router.route('/:indicatorId') 
    .get(IndicatorController.getIndicator)
    .put(IndicatorController.replaceIndicator)
    .patch(IndicatorController.updateIndicator)

module.exports = router;

