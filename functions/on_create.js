const functions = require("firebase-functions");

exports.handleDocCreation = functions.firestore.document('customers/{customerId}').onCreate(async (snapshot, context) => {
    const customerId = context.params.customerId;
    functions.logger.log("customerId is ", customerId);

    const customerData = snapshot.data();

    // Your logic goes here.......
});