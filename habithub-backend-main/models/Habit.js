// dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// schema
const habitSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    streak: {
        type: Number
    },
    bestStreak: {
        type: Number
    },
    lastCompleted: {
        type: Date
    },
    totalDays: {
        type: Number
    },
    totalGoal: {
        type: Number
    },
    userID: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    icon: {
        type: String
    }
}, { timestamps: true })

// create mongoose model
const habitModel = mongoose.model('Habit', habitSchema)

// export
module.exports = habitModel
