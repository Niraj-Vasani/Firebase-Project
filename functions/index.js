const functions = require("firebase-functions");

exports.helloWorld1 = functions.https.onRequest((request, response) => {
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;

  functions.logger.info("Hello ", firstName, " ", lastName);
  response.send(`Hello ${firstName} ${lastName} from Firebase!`);
});

exports.helloWorld2 = functions.https.onCall((data, context) => {
  const firstName = data.firstName;
  const lastName = data.lastName;

  functions.logger.log("Hello ", firstName, " ", lastName);
  return `Hello ${firstName} ${lastName}!!!!!!`;
});


// 4 triggers
const on_create = require("./on_create");
exports.onCreateCustomer = on_create.handleDocCreation;

const on_update = require("./on_update");
exports.onUpdateCustomer = on_update.handleDocUpdation;

const on_delete = require("./on_delete");
exports.onDeleteCustomer = on_delete.handleDocDeletion;

const on_write = require("./on_write");
exports.onWriteCustomer = on_write.handleDocWrite;


// send mail function
const send_mail = require("./send_mail");
exports.sendMailToCustomer = send_mail.sendMail;
