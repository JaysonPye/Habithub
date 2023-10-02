//dependencies
require('dotenv').config()
let crypto = require('crypto')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const nodemailer = require('nodemailer')


class Utils {
    hashPassword(password) {
        const salt = crypto.randomBytes(16).toString('hex')
        const hash = crypto.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex')
        return [salt, hash].join('$')
    }

    verifyPassword(password, original) {
        const originalHash = original.split('$')[1]
        const salt = original.split('$')[0]
        const newHash = crypto.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex')
        return newHash === originalHash
    }

    generateAccessToken(user){
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '720min'})
    }

    generateResetToken(data){
        // this should really have it's own secret somehow
        return jwt.sign(data, process.env.RESET_TOKEN_SECRET, {expiresIn: '30min'})
    }

    authenticateToken(req, res, next){
        const authHeader = req.headers['authorization']        
        const token = authHeader && authHeader.split(' ')[1]
        if(token == null){
            return res.status(401).json({
                message: "Unauthorised"
            })
        } 
        
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) {
                return res.status(401).json({
                    message: "Unauthorised"
                })
            }
            req.user = user
            next()
        })
    }

    authenticateResetToken(token) {
        if (token == null) return false
        let returnData;
        jwt.verify(token, process.env.RESET_TOKEN_SECRET, (err, data) => {
            if (err) {
                console.log(err)
                return false
            }
            returnData = data
        })
        if (returnData == undefined) return false
        return returnData
    }

    // https://stackoverflow.com/questions/28834835/readfile-in-base64-nodejs
    fileToBase64(file) {
        return file.toString('base64')
    }

    // nodemailer documentation from W3 schools (n.d.)
    // https://www.w3schools.com/nodejs/nodejs_email.asp
    // app password generated based on suggestion by users Stephen Ostermiller and codtex at:
    // https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer
    sendEmail(toEmail, subject, text, html) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'habithub2023@gmail.com',
                pass: 'kwroukcqsqyyerjk'
            }
        })

        var mailOptions = {
            from: '"HabitHub Support" habithub2023@gmail.com',
            to: toEmail,
            subject: subject,
            text: text,
            html: html,
            attachments: [{
                filename: 'logo_web.png',
                path: './images/logo_web.png',
                cid: 'logo'
            }]
        }

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error)
            }
        })
    }

    getEmailHtml(link, name) {
        return `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8" />

                    <!-- Google fonts -->
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                    href="https://fonts.googleapis.com/css2?family=Merriweather&family=Questrial&display=swap"
                    rel="stylesheet"
                    />

                    <meta name="viewport" content="width=device-width" />

                    <style>
                        html {
                            box-sizing: border-box;
                            font-family: Garamond, serif;
                        }

                        .body {
                            padding: 22px;
                            background: #fcf4ed;
                            border-bottom: 25px solid #e8e9eb;
                        }

                        a.reset-link {
                            font-family: Garamond, serif;
                            font-size: 1.15em;
                            padding: 0.8em 1.3em;
                            border-radius: 2em;
                            background-color: #ea8462;
                            background: radial-gradient(#ea8462, #ea8462, #e4b363);
                            color: white;
                            text-decoration: none;
                            margin: 4em 0;
                        }

                        a.reset-link > span {
                            color: white;
                        }

                        a.reset-link:hover, 
                        a.reset-link:focus, 
                        a.reset-link:active {
                            background-color: #ef6461;
                        }

                        a.contact-link {
                            color: #ea8462;
                            text-decoration: none;
                        }

                        a.contact-link:hover,
                        a.contact-link:focus {
                            text-decoration: underline;
                        }

                        .reset-div {
                            margin: 2em 0;
                        }

                        .title {
                            width: 100%;
                            background-color: #ea8462;
                            border-bottom: 25px solid #e4b363;
                        }

                        h1 {
                            font-family: Garamond, serif;
                            color: white;
                            font-size: 26px;
                            margin: 0;
                            padding: 0.7em;
                            font-weight: lighter;
                        }

                        p {
                            font-family: Georgia, serif;
                            color: black;
                        }

                        .bold {
                            font-weight: bold;
                            margin-top: 1em;
                        }

                        .logo {
                            background: #fcf4ed;
                        }
                    </style>
                </head>
                <body>
                    <div class="logo">
                        <img src="cid:logo" height="75px">
                    </div>
                    <div class="title">
                        <h1>Your request to reset your password</h1>
                    </div>
                    <div class="body">
                        <p> Hi ${name}, </p>
                        <p> 
                            You requested an email to securely reset your password. 
                            </br>
                            Click the link below to proceed. 
                            This link will only be active for 30 minutes.
                        </p>
                        <div class="reset-div">
                            <a class="reset-link" href=${link}><span>Reset My Password</span></a>
                        </div>
                        <p>
                            Important: If it wasn't you who requested this password reset,
                            <a class="contact-link" href="https://habithub-app.netlify.app/contactUs">contact our support team</a> 
                            immediately. 
                        </p>
                        <p>Keep up the good habits!</p>
                        <p class="bold">The HabitHub team</p>
                    </div>
                </body>
            </html>
        `
    }

    getBXIcon(category) {
        let icon = "bx-list-check"
        const categories = [
            {
                cat: 'Organisation',
                icon: 'bxs-pencil'
            },
            {
                cat: 'Study',
                icon: 'bxs-graduation'
            },
            {
                cat: 'Cravings',
                icon: 'bxs-drink'
            },
            {
                cat: 'Health',
                icon: 'bx-plus-medical'
            },
            {
                cat: 'Sleep',
                icon: 'bxs-bed'
            },
            {
                cat: 'Work',
                icon: 'bx-briefcase'
            },
            {
                cat: 'Eat',
                icon: 'bxs-bowl-rice'
            },
            {
                cat: 'Self / Body',
                icon: 'bx-body'
            },
            {
                cat: 'Exercise / Sport',
                icon: 'bx-football'
            },
            {
                cat: 'Drinking',
                icon: 'bx-coffee'
            },
            {
                cat: 'Entertainment / Technology',
                icon: 'bx-mobile-alt'
            },
            {
                cat: 'Relationship',
                icon: 'bxs-heart'
            },
            {
                cat: 'Finance',
                icon: 'bx-dollar-circle'
            },
            {
                cat: 'Other',
                icon: 'bx-list-check'
            }
        ]

        categories.forEach(cat => {
            if (cat.cat == category) icon = cat.icon
        })
        return icon
    }

}

module.exports = new Utils()
