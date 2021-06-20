'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.login; //add gmail id to config
const gmailPassword = functions.config().gmail.pass;    //add gmail password to config

admin.initializeApp();

//.onDataAdded is watched for changes in database
exports.ContactFormBackend = functions.region('asia-south1').database.ref('/Website-ContactUs/{pushID}').onCreate((snaphot, context) => {

  //here we catch a new data, added to firebase database, it stored in a snap variable
  const createdData = snaphot.val();

  //here we send new data using function for sending emails
  goMail(createdData);
});

var goMail = function (message) {

  var email = message.email;
  var name = message.name;
  var phnum = message.phone;
  var subject = message.subject;
  var text = message.message;

  var outputtext = "Hey you got a query. Details are provided below \n\n\n" + "Name:" + name + "\n" + "Email: " + email + "\n" + "Phone Number: " + phnum + "\n" + "Subject:" + subject + "\n" + "Message: " + text;

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
    subject: 'Website Query || Contact Us',
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
  });

};