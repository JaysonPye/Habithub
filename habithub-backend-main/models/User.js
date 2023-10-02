// dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('../utils')
require('mongoose-type-email')

// settings schema
const settingsSchema = new mongoose.Schema({
    colourScheme: {
        type: String
    }
}, { _id: false })

// user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    settings: {
        type: settingsSchema
    },
    firstTime: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })

// middleware
userSchema.pre('save', function(next){
    if (this.password && this.isModified()) {
        this.password = Utils.hashPassword(this.password)
    }
    next()
})

// create mongoose model
const userModel = mongoose.model('User', userSchema)

// export
module.exports = userModel