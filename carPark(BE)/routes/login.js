const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs')

const User = require('../models/userSchema');
const e = require('express');


router.post('/', (req, res) => {
    User.find({email : req.body.email})
            .then(user => {
                if(user.length < 1){
                    return res.status(404).json({
                        message : "User Not Found With This Email"
                    })
                } else {
                    bcryptjs.compare(req.body.password, user[0].password, (err, result) => {
                        
                        if(result) {
                            res.status(201).json({
                                message : "Login SuccessFull!!"
                            })
                        }else {
                            res.status(404).json({
                                    message : "invalid email or password"
                                })
                        }

                        if(err) {
                            return res.status(401).json({
                                error : err
                            })
                        }

                        if(!result) {
                            res.status(404).json({
                                message : "invalid email or password"
                            })
                        }

                        res.status(404).json({
                            message : "An Error Occured"
                        })
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