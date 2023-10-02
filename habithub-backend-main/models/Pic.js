// dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('../utils')

// pic Schema
const picSchema = new mongoose.Schema({
    buffer64: {
        type: String,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    }
})

// create mongoose model
const picModel = mongoose.model('Pic', picSchema)

// export 
module.exports = picModel