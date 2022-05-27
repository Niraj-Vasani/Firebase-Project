const functions = require("firebase-functions");

exports.handleDocUpdation = functions.firestore.document('customers/{customerId}').onUpdate(async (change, context) => {
    const customerId = context.params.customerId;
    functions.logger.log("customerId is ", customerId);

    const customerDataBefore = change.before.data();
    const customerDataAfter = change.after.data();

    // Your logic goes here.......
});