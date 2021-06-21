const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.login; //add gmail id to config
const gmailPassword = functions.config().gmail.pass;    //add gmail password to config

var goMail = function (message,email_subject) {

    var outputtext = 'Hey you got a query. Details are provided below \n\n\n' + 'message: ' + message;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: gmailEmail,
            pass: gmailPassword
        }
    });
    const mailOptions = {
        to: 'neemtreeagrosolutions@gmail.com',
        from: gmailEmail,
        subject: email_subject,
        text: outputtext,
    };

    // eslint-disable-next-line consistent-return
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            response.json({ message: "message not sent: an error occured; check the server's console log" });
        }
        else {
            response.json({ message: `Thank You For Reaching Us We'll Contact You Soon` });
        }
    })
}
module.exports = goMail;