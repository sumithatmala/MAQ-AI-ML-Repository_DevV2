const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: "smtp-hve.office365.com",
    host: "smtp-hve.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.APP_PASSWORD,
    },
    // tls: {
    //     ciphers: 'SSLv3',
    //     rejectUnauthorized: false,
    // }
});

const sendEmail = async (req, res) => {
    // console.log(req.body);
    // res.json(req.body.name)
    const { name, compName, email, phone, msg } = req.body;
    const mailTo = process.env.SEND_TO_EMAIL;
    // console.log(mailTo);

    const text = `Hi I am ${name},\n    ${msg}\nPlease reach me out at: ${email}, ${phone}`;

    transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: mailTo,
        cc: '',
        subject: `AI-ML website contact form by ${name}, ${compName}.`,
        text: text,
    }, (err, info) => {
        if (err) {
            console.error('Failed to send email:', err);
            res.status(err.responseCode).send(err)
        } else {
            const successMsg = { success: `Email sent to: ${mailTo}` }
            res.status(200).send(info);
            // console.log('Email sent:', info.response);
        }
    });

    //res.json({result:"ok"});
}

module.exports = sendEmail;