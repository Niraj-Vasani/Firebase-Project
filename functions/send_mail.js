const functions = require("firebase-functions");
const fromEmail = functions.config().sendmail.user;
const password = functions.config().sendmail.pass;
const nodemailer = require('nodemailer');

function setupSMTP(transporterCallback) {
    let smtpTransporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true,
        port: 465,
        auth: {
            user: fromEmail,
            pass: password
        }
    });
    transporterCallback(smtpTransporter);
}

exports.sendMail = functions.https.onCall((data, context) => {
    const toEmail = data.toEmail;   // "nirajvasani@yopmail.com"
    const ccEmail = data.ccEmail;   // "hemanshuparmar@yopmail.com"

    const mailOptions = {
        from: `Radix Web<${fromEmail}>`,
        to: toEmail,
        cc: ccEmail,
        subject: "Functions Demo Mail",
        // html: yourHtmlTemplate
        text: "Hi from radixdt2261"
    };


    setupSMTP(function (smtpTransporter) {
        return smtpTransporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                functions.logger.log('Email Trigger Error', erro);
                return false;
            } else {
                isEmailTriggered = true;
                functions.logger.log('Email has been Triggered', info);
                smtpTransporter.close();
                return true;
            }
        }
        )
    });

    return `Hello ${firstName} ${lastName}!!!!!!`;
});
