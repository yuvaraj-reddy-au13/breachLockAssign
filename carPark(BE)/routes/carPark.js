const express = require('express');
const router = express.Router()

const Car = require('../models/carSchema.js')

require('dotenv').config();


const slotLength = process.env.SLOTLENGTH || 6


router.post('/', (req, res) => {
    Car.find({slotNumber : req.body.slotNumber})
            .then(slot  => {
                if(slot.length <= slotLength){
                    const car = new Car({
                        carName : req.body.carName,
                        carNumber : req.body.carNumber,
                        carColour : req.body.carColour,
                        slotNumber : req.body.slotNumber
                    })

                    car.save()
                        .then(result => {
                            console.log(result)
                            res.status(201).json({
                                message : "Car parked successfully"
                            })
                        })
                        .catch(err => {
                            res.status(500).json({
                                message : "car is not parked try again",
                                error : err
                            })
                        })
                }else {
                    return res.status(404).json({
                        message : "Car is Already Parked"
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    error : err
                })
            })
})


module.exports = router;