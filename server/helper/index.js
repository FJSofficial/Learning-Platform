const nodeMailer = require("nodemailer");

exports.sendEmail = emailData => {
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "faisal.qau2018@gmail.com",
            pass: "uet@2016"
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    return (
        transporter
            .sendMail(emailData)
            .then(info => console.log(`Message sent: ${info.response}`))
            .catch(err => console.log(`Problem sending email: ${err}`))
    );
};
