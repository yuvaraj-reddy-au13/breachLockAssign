const express = require('express');
const router = express.Router();

const Car = require('../models/carSchema')

router.get('/', (req, res) => {
    Car.find()
            .then(cars => {
                res.status(201).json({
                    message : cars
                })
            })
            .catch(err => {
                res.status(404).json({
                    error : err
                })
            })
})

module.exports = router;