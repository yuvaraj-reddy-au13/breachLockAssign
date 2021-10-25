const express = require('express');
const router = express.Router()

const Car = require('../models/carSchema');

router.post('/', (req, res) => {
    Car.deleteOne({carNumber : req.body.carNumber})
            .then(result => {
                console.log('deleted : ', result)
                res.status(201).json({
                    message : "a car is Unparked" + result
                })
            } )
            .catch(err => {
                res.status(404).json({
                    error : err
                })
            })
})


module.exports = router;