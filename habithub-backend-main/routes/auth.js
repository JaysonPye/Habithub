require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require('./../models/User')
const Utils = require('../utils')
const jwt = require('jsonwebtoken')

// POST /auth/signin
router.post('/signin', (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            message: "please provide email and password"
        })
    }

    User.findOne({email: req.body.email})
        .then(user => {
            if(user == null){
                return res.status(400).json({
                    message: "Account doesn't exist"
                })
            }
 
            if (Utils.verifyPassword(req.body.password, user.password)) {
                const userObject = {
                    _id:user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    firstTime: user.firstTime,
                    colourScheme: user.settings.colourScheme
                }

                const accessToken = Utils.generateAccessToken(userObject)

                res.json({
                    accessToken: accessToken,
                    user: userObject
                })
            } else {
                return res.status(400).json({
                    message: "password / email incorrect"
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "problem signing in",
                err: err
            })
        })
})

// GET /auth/validate
router.get('/validate', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, tokenData) => {
        if (err) {
            return res.sendStatus(403)
        } else {
            res.json(tokenData)
        }
    })
})

// POST password reset request
router.post('/reset', (req, res) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if (user != null){
            const dataObj = {
                _id: user._id,
                email: req.body.email
            }
            const resetToken = Utils.generateResetToken(dataObj)

            const text = `Reset your password: https://habithub-app.netlify.app/password-reset?token=${resetToken}`
            const html = Utils.getEmailHtml(`https://habithub-app.netlify.app/password-reset?token=${resetToken}`, user.firstName)

            Utils.sendEmail(req.body.email, "Password reset request", text, html)
        }
        res.json({
            message: "password reset request received"
        })
    })
    .catch(err => {
        res.status(500).json({
            message: "problem resetting password",
            err: err
        })
    })
})

router.post('/reset/:token', (req, res) => {
    if (req.body.password == null || req.body.password == "") {
        res.status(400).json({
            message: "password required"
        })
    }

    var tokenData = Utils.authenticateResetToken(req.params.token)
    if (tokenData === false) {
        res.status(401).json({ message: "unauthorised" }).send()
        return
    }

    req.body.password = Utils.hashPassword(req.body.password)

    User.findByIdAndUpdate(tokenData._id,  req.body)
    .then(user => {
        res.status(200).json({
            message: "password updated successfully",
            email: tokenData.email
        }).send()
    })
    .catch(err => {
        res.status(500).json({
            message: "Problem updating password",
            err: err
        }).send()
    })
})



module.exports = router