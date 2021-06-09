'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const express = require('express');
const app = express();
app.use(express.json({ limit: '5mb' }));
// const nodemailer = require('nodemailer');
// const SMTPTransport = require('nodemailer/lib/smtp-transport');
// const gmailEmail = functions.config().gmail.login; //add gmail id to config
// const gmailPassword = functions.config().gmail.pass;    //add gmail password to config

// //.onDataAdded is watched for changes in database
// exports.ContactFormBackend = functions.region('asia-south1').database.ref('/messages/{pushID}').onCreate((snaphot, context) =>{

//     //here we catch a new data, added to firebase database, it stored in a snap variable
//     const createdData = snaphot.val();

//     //here we send new data using function for sending emails
//     console.log(createdData);
//     goMail(createdData);
// });

// var goMail = function (message) {

//     var email = message.email;
//     var name = message.name;
//     var phnum = message.phone;
//     var subject = message.subject;
//     var text = message.message;

//     var outputtext = "Hey you got a query. Details are provided below \n\n\n" + name + "\n" + email + "\n" + phnum + "\n" + subject + "\n" + text;

//     //transporter is a way to send your emails
//     const transporter = nodemailer.createTransport({
// 		host: "smtp.gmail.com",
// 		port: 465,
// 		secure: true,
// 		auth: {
// 			user: gmailEmail, // this should be YOUR GMAIL account
// 			pass: gmailPassword // this should be your password
// 		}
// 	});

//         // setup email data with unicode symbols
//         //this is how your email are going to look like
//         const mailOptions = {
//             to: 'neemtreeagrosolutions@gmail.com',
//             from: gmailEmail,
//             subject: 'Message From Website',
//             text: outputtext,
//           };

//         // eslint-disable-next-line consistent-return
//         //call of this function send an email, and return status
//         transporter.sendMail(mailOptions,(err, info) => {
//             if(err) {
//                 console.log(err);
//                 response.json({ message: "message not sent: an error occured; check the server's console log" });
//             }
//             else {
//                 // response.json({ message: `message sent: ${info.messageId}` });
//                 response.json({ message: `Thank You For Reaching Us We'll Contact You Soon` });
//             }
//         });

//     };

// //certificate verification

// get by id
app.get('/:id', async (req, res) => {
  const snapshot = await db
    .collection('CertificateIDs')
    .doc(req.params.id)
    .get();
  if (snapshot.exists) {
    const ID = snapshot.id;
    const certificateData = snapshot.data();
    res.status(200).send(JSON.stringify({ id: ID, ...certificateData }));
  } else res.sendStatus(404);
});

//  getting all certificates
// db.collection('CertificateIDs').get().then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       console.log(doc.data());
//     });
//   });

exports.verifyCertificate = functions.region('asia-south1').https.onRequest(app);
