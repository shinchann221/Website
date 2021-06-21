'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const goMail = require('./mail');

admin.initializeApp();

//.onDataAdded is watched for changes in database
exports.ContactFormBackend = functions.region('asia-south1').database.ref('/Website-ContactUs/{pushID}').onCreate((snaphot) => {

  //here we send new data using function for sending emails
  goMail(snaphot.val(),'Website Query || Contact Us');
});

exports.CorporateOrderBackend = functions.region('asia-south1').database.ref('/Website-Corporate-Order/{pushID}').onCreate((snaphot) => {

  //here we send new data using function for sending emails
  goMail(snaphot.val(),'Website Query || Corporate Order');
});

exports.ntkisanBackend = functions.region('asia-south1').database.ref('/Website-NT-Kisan/{pushID}').onCreate((snaphot) => {

  //here we send new data using function for sending emails
  goMail(snaphot.val(),'Website Query || NT-Kisan');
});