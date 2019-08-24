const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , dotenv = require('dotenv').config()
    , nodemailer = require('nodemailer')

    const app = new express()

    app.use(bodyParser.json())
    app.use(cors())
    app.use( express.static( __dirname + `/../build` ) );


    app.post('/api/sendEmail', (req, res) => {
        nodemailer.createTestAccount((err, account) => {
            let transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.MY_EMAIL,
                    pass: process.env.MY_LOCK
                }
            });

            let mailOptions = {
                from: `${req.body.name} <${req.body.from}>`, 
                to: process.env.MY_EMAIL,
                subject: req.body.subject, 
                html:`<div><p>Number: ${req.body.number} <br/> Email: ${req.body.from}<br/><br/>${req.body.message}</p></div>`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                res.send('done')
            });
        });
    })

    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../build/index.html'));
    });

    const SERVER_PORT = process.env.SERVER_PORT

    app.listen(SERVER_PORT, _ => {
        console.log(`All these worlds and all these people. Yet here we are ${SERVER_PORT}`)
    })