const express = require('express')
const router = express.Router()
const User = require('./../models/User')
const Pic = require('./../models/Pic')
const Habit = require('./../models/Habit')
const Utils = require('../utils')
const nodemailer = require('nodemailer')

// GET TEST
router.get('/test', (req, res) => {
    Utils.sendEmail()
    res.json({
        message: "at test"
    })
})

// GET - get all users
// NOTE this route could probably be removed - it only serves dev purposes
router.get('/', (req, res) => {
    User.find()
        .then((users) => {
            res.json(users)
        })
        .catch(() => {
            res.send("problem getting users", err)
        })
})

// POST create new user
router.post('/', (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message: "user content is empty"
        })
    }

    if (!req.body.settings) {
        req.body.settings = {
            "colourScheme": "light"
        }
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user != null) {
                return res.status(400).json({
                    error_code: "#1BE",
                    message: "email already in use"
                })
            }

            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                settings: req.body.settings,
                firstTime: true
            })

            newUser.save()
                .then(user => {
                    res.status(201).json({
                        "_id": user._id,
                        "firstName": user.firstName,
                        "lastName": user.lastName,
                        "email": user.email,
                    })
                })
                .catch(err => {
                    console.log("error creating user", err)
                    res.status(500).json({
                        message: "problem creating user",
                        error: err
                    })
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "problem creating account"
            })
        })
})

// GET User by id
router.get('/:id', Utils.authenticateToken, (req, res, next) => {
    // make sure a user can only get their own data
    if (req.user._id != req.params.id) {
        return res.status(401).json({
            message: "Not authorised"
        })
    }

    User.findById(req.params.id)
        .then(user => {
            res.json({
                "_id": user._id,
                "firstName": user.firstName,
                "lastName": user.lastName,
                "email": user.email,
                "settings": user.settings
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "Couldn't get user",
                error: err
            })
        })
})

// PUT update user by id
// NOTE - need to check if email matches previous email
router.put('/:id', Utils.authenticateToken, (req, res) => {
    if (req.params.id == null) return res.status(400).send("User ID must be supplied.")
    if (!req.body) return res.status(400).send("Invalid request")

    User.findOne({ email: req.body.email })
        .then(user => {
            // if user is found but it's the right user, proceed. 
            if (user != null && user._id != req.params.id) {
                return res.status(400).json({
                    error_code: "#1BE",
                    message: "email already in use"
                })
            }

            User.findByIdAndUpdate(req.params.id, req.body, { new: true })
                .then(user => res.json({
                    "_id": user._id,
                    "firstName": user.firstName,
                    "lastName": user.lastName,
                    "email": user.email,
                    "settings": user.settings
                }))
                .catch(err => {
                    res.status(500).json({
                        message: 'Problem updating user',
                        error: err
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                message: "problem updating account",
                error: err
            })
        })


})

// DELETE - delete a user
router.delete('/:id', Utils.authenticateToken, (req, res) => {
    if (req.user._id != req.params.id) {
        return res.status(401).json({
            message: "Not authorized"
        })
    }

    Pic.findOneAndDelete({ userID: req.params.id })
    .then(pic => {
        // we don't care about doing anything if it's deleted
    })
    .catch(err => {
        // we still want to continue if this fails
        console.log(err)
    })

    Habit.deleteMany({ userID: req.params.id })
    .then(habit => {
        // we don't care about doing anything if it's deleted
    })
    .catch(err => {
        // we still want to continue if this fails
        console.log(err)
    })

    User.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json({
                message: "User deleted successfully"
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "Couldn't delete user",
                error: err
            })
        })
})

// export
module.exports = router