const express = require('express');
const router = express.Router()
const bcryptjs = require('bcryptjs')

const User = require('../models/userSchema');

router.post('/', (req, res) => {
    User.find({email : req.body.email})
            .then(user => {
                if(user.length > 1) {
                    res.status(401).json({
                        message : "Email Already Exists"
                    })
                } else {
                    bcryptjs.hash(req.body.password, 10, (err, hash) => {
                        if(err) {
                            return res.status(500).json({
                                error : err
                            })
                        }else{
                            const user = new User({
                                name : req.body.name,
                                email : req.body.email,
                                password : hash
                            })

                            user.save()
                                .then(result => {
                                    console.log(result)
                                    res.status(201).json({
                                        message : "User Created"
                                    })
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        error : err
                                    })
                                })
                        }
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    error : err
                })
            })
})


module.exports = router ;