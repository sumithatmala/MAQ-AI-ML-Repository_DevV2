const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.APP_PASSWORD,
    },
});

const sendEmail = async (req, res) => {
    // console.log(req.body);
    // res.json(req.body.name)
    const { name, compName, email, phone, msg } = req.body;
    const mailTo = "vushilb@maqsoftware.com"

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
            res.send(err)
        } else {
            const successMsg = { success: `Email sent to: ${mailTo}` }
            res.json(successMsg);
            // console.log('Email sent:', info.response);
        }
    });

    // res.json({result:"ok"});
}

module.exports = sendEmail;