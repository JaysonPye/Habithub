const express = require('express')
const router = express.Router()
const Habit = require('./../models/Habit')
const Utils = require('../utils')
    // const { rawListeners } = require('../models/User')

// GET - get all habits
// NOTE this route is for dev purposes only
router.get('/', (req, res) => {
    Habit.find()
        .then((habits) => {
            res.json(habits)
        })
        .catch(() => {
            res.send("problem getting habits", err)
        })
})

// GET - Habit by id
router.get('/habit/:id', Utils.authenticateToken, (req, res) => {
    Habit.findById(req.params.id)
        .then(habit => {
            res.json(habit)
        })
        .catch(() => {
            res.send("problem getting habit", err)
        })
})

// GET - Habits for user
// category completed should be split into two arrays
router.get('/user/:id', Utils.authenticateToken, (req, res) => {
    // make sure a user can only get their own data
    if (req.user._id != req.params.id) {
        return res.status(401).json({
            message: "Not authorised"
        })
    }

    Habit.find({ userID: req.params.id })
        .then(habits => {
            var midnightToday = new Date(Date.now())
                // overthinking things here:
                // const hours = midnightToday.getHours() - midnightToday.getHours()
            midnightToday.setHours(00)
            midnightToday.setMinutes(00)
            midnightToday.setSeconds(00)
            midnightToday.setMilliseconds(000)

            // set streak to 0 if last completed before yesterday
            // this might be passing by reference
            // var midnightYesterday = midnightToday
            // midnightYesterday.setDate(midnightToday.getDate() - 1)
            var midnightYesterday = new Date(Date.now() - 1000 * 60 * 60 * 24)
            midnightYesterday.setHours(00)
            midnightYesterday.setMinutes(00)
            midnightYesterday.setSeconds(00)
            midnightYesterday.setMilliseconds(00)
            habits.forEach(habit => {
                if (habit.lastCompleted < midnightYesterday && habit.streak > 0) {
                    updateStreak(habit._id)
                    habit.streak = 0
                }
            })

            if (req.query.category && req.query.category == 'completed') {
                let completed = []
                let uncompleted = []
                habits.forEach(habit => {
                    // check if habit.lastCompleted > time 00:00:00 today
                    const diff = habit.lastCompleted >= midnightToday
                    var newHabit
                        // if lastCompleted is greater than midnightToday, completed = true
                    if (diff) {
                        newHabit = {
                            _id: habit._id,
                            title: habit.title,
                            description: habit.description,
                            streak: habit.streak,
                            lastCompleted: habit.lastCompleted,
                            totalDays: habit.totalDays,
                            userID: habit.userID,
                            icon: habit.icon,
                            completed: true
                        }
                    } else {
                        newHabit = {
                            _id: habit._id,
                            title: habit.title,
                            description: habit.description,
                            streak: habit.streak,
                            lastCompleted: habit.lastCompleted,
                            totalDays: habit.totalDays,
                            userID: habit.userID,
                            icon: habit.icon,
                            completed: false
                        }
                    }
                    if (newHabit.completed) completed.push(newHabit)
                    else uncompleted.push(newHabit)
                })
                const habitsData = {
                    completed: completed,
                    uncompleted: uncompleted
                }
                res.json(habitsData)
            } else {
                res.json(habits)
            }
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({
                message: "problem getting habits",
                error: err
            })
        })
})

// PUT update habit by id
// NOTE - should update this to only allow title/description
// definitely not userID
// streak should be reset or +1 (own route or here) OR -1
// totalDays should just be updated when streak +1
router.put('/habit/:id', Utils.authenticateToken, (req, res) => {
    // find the habit
    Habit.findById(req.params.id)
        .then(habit => {
            // if habit.userID != req.user._id, return bad
            if (habit.userID != req.user._id) {
                res.status(401).json({
                    message: "Not authorised"
                })
            } else {
                // do not allow userID to be changed
                if (req.body.userID) req.body.userID = undefined
                    // update icon if category is changed
                if (req.body.category) req.body.icon = Utils.getBXIcon(req.body.category)
                if (req.body.streak || req.body.streak === 0) {
                    if (req.body.streak > 0) {
                        // if updating streak, update related fields
                        req.body.streak = habit.streak + 1
                        req.body.lastCompleted = new Date(Date.now())
                        req.body.totalDays = habit.totalDays + 1
                        if (req.body.streak > habit.bestStreak) {
                            req.body.bestStreak = req.body.streak
                        } else {
                            req.body.bestStreak = undefined
                        }
                    } else if (req.body.streak < 0) {
                        // technically this could cause some best streak problems
                        // but we're going to ignore that for now
                        req.body.streak = habit.streak - 1
                        req.body.lastCompleted = new Date(Date.now() - 1000 * 60 * 60 * 24)
                        req.body.totalDays = habit.totalDays - 1
                        req.body.bestStreak = undefined
                    } else { // req.body.streak == 0
                        // if removing streak, do not allow update of related fields
                        // but set lastCompleted to yesterday
                        req.body.lastCompleted = new Date(Date.now() - 1000 * 60 * 60 * 24)
                        if (req.body.totalDays) req.body.totalDays = undefined
                        if (req.body.bestStreak) req.body.bestStreak = undefined
                    }
                } else {
                    // if streak is not set, do not allow update of related fields
                    if (req.body.lastCompleted) req.body.lastCompleted = undefined
                    if (req.body.bestStreak) req.body.bestStreak = undefined
                    if (req.body.totalDays) req.body.totalDays = undefined
                }

                Habit.findByIdAndUpdate(req.params.id, req.body, { new: true })
                    .then(habit => {
                        res.json(habit)
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: "problem updating habit",
                            error: err
                        })
                    })
            }

        })
        .catch(err => {
            res.status(500).json({
                message: "problem finding habbit",
                error: err
            })
        })

})

// POST - Create new habit
// this endpoint is trusting the call to not submit dodgy data 
// e.g no title, no days etc.
router.post('/user/:id', Utils.authenticateToken, (req, res) => {
    // make sure a user can only add their own habit
    if (req.user._id != req.params.id) {
        return res.status(401).json({
            message: "Not authorised"
        })
    }

    // set the last update to yesterday so that the habit will not
    // be completed today
    const yesterday = new Date(Date.now() - 1000 * 60 * 60 * 24)
    const icon = Utils.getBXIcon(req.body.category)

    const newHabit = new Habit({
        title: req.body.title,
        description: req.body.description,
        userID: req.params.id,
        streak: 0,
        totalDays: 0,
        lastCompleted: yesterday,
        bestStreak: 0,
        totalGoal: req.body.totalGoal,
        category: req.body.category,
        icon: icon
    })

    newHabit.save()
        .then(habit => {
            res.status(201).json(habit)
        })
        .catch(err => {
            res.status(500).json({
                message: "problem creating habit",
                error: err
            })
        })
})

// DELETE a habit
router.delete('/habit/:id', Utils.authenticateToken, (req, res) => {
    Habit.findById(req.params.id)
        .then(habit => {
            // check that it's the owner of the habit first
            if (habit.userID != req.user._id) {
                return res.status(401).json({
                    message: "Not authorised"
                });
            }

            // delete the habit
            Habit.deleteOne({ _id: req.params.id })
                .then(() => {
                    res.json({
                        message: "Habit successfully deleted"
                    })
                })
                .catch(err => {
                    res.status(400).json({
                        message: "Problem deleting habit",
                        error: err
                    })
                })
        })
        .catch(err => {
            res.status(400).json({
                message: "Problem finding habit",
                error: err
            })
        })
})


// somehow this happens asynchronously but I don't know how to work around that - EW
function updateStreak(habitID) {
    const updateObj = {
        streak: 0
    }
    Habit.findByIdAndUpdate(habitID, updateObj, { new: true })
        .then(habit => {
            return habit
        })
        .catch(err => {
            console.log(err)
            return err
        })
}

// export 
module.exports = router