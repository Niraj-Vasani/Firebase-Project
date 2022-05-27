const functions = require("firebase-functions");

exports.handleDocWrite = functions.firestore.document('customers/{customerId}').onWrite(async (change, context) => {
    const customerId = context.params.customerId;
    functions.logger.log("customerId is ", customerId);

    const isExistedBefore = change.before.exists;
    const isExistingAfter = change.after.exists;

    const customerDataBefore = change.before.data();
    const customerDataAfter = change.after.data();

    if (!isExistedBefore) {
        // Newly created document (onCreate trigger).
    } else if (isExistedBefore && isExistingAfter) {
        // Existing document (onUpdate trigger).
    } else if (isExistedBefore && !isExistingAfter) {
        // Deleted document (onDelete trigger).
    }
});