const functions = require("firebase-functions");

exports.handleDocDeletion = functions.firestore.document('customers/{customerId}').onDelete(async (snapshot, context) => {
    const customerId = context.params.customerId;
    functions.logger.log("customerId is ", customerId);

    const customerDataBeforeDeletion = snapshot.data();

    // Your logic goes here.......
});