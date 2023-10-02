const express = require('express')
const router = express.Router()
const User = require('./../models/User')
const Pic = require('./../models/Pic')
const Utils = require('../utils')

// GET user profile pic
// keeping this separate because it's very hefty data
router.get('/:id', Utils.authenticateToken, (req, res) => {
    Pic.findOne({ userID: req.params.id })
    .then(pic => {
        if (pic == null) {
            res.status(404).json({
                message: "User does not have a profile picture"
            })
        }
        else {
            res.json({
                pic: pic
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "Couldn't get profile picture",
            error: err
        })
    })
})

// update profile picture
// NOTE - should be verifying file type before accepting
router.post('/:id', Utils.authenticateToken, (req, res) => {
    // make sure a user can only update their own pic
    if(req.user._id != req.params.id){
        return res.status(401).json({
            message: "Not authorised"
        })
    }

    var buffer64 = Utils.fileToBase64(req.files.profilepic.data)
    var picObject = {
        "buffer64": buffer64,
        "mimetype": req.files.profilepic.mimetype
    }

    Pic.findOne({ userID: req.params.id })
    .then(pic => {
        if (!pic) {
            const newPic = new Pic({
                buffer64: picObject.buffer64,
                mimetype: picObject.mimetype,
                userID: req.params.id
            })

            newPic.save()
            .then(pic => {
                res.status(201).json({
                    "buffer64": pic.buffer64,
                    "mimetype": pic.mimetype
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'problem updating profile picture',
                    error: err
                })
            })
        } else {
            Pic.findByIdAndUpdate(pic._id, picObject, {new: true})
            .then(pic => 
                res.json({
                    "buffer64": pic.buffer64,
                    "mimetype": pic.mimetype
                })
            )
            .catch(err => {
                res.status(500).json({
                    message: 'problem updating profile picture',
                    error: err
                })
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: 'problem updating profile picture',
            error: err
        })
    })
})

//export
module.exports = router