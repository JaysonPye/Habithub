// dependencies
require("dotenv").config()
const bodyParser = require("body-parser")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const port = process.env.PORT|| 3000
const fileUpload = require("express-fileupload")

// db connection ----------------------------------------
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useFindAndModify: false
})
    .then(() =>{
        console.log("db connected")
    })
    .catch((err) => {
        console.log("db connection failed", err)
    })

// express app ------------------------------------------
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('*', cors())
app.use(fileUpload())


// routes -----------------------------------------------
app.get('/', (req, res) =>{
    res.send({
        message: "you found the homepage"
    })
})

// auth
const authRouter = require('./routes/auth')
app.use('/auth', authRouter)

// user
const userRouter = require('./routes/user')
app.use('/user', userRouter)

//pic
const picRouter = require('./routes/pic')
app.use('/pic', picRouter)

//habit
const habitRouter = require('./routes/habit')
app.use('/habit', habitRouter)


// run app (listen) -----------------------------------
app.listen(port)