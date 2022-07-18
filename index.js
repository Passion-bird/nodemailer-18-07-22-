const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'ellaidhurai.97@gmail.com',
            pass: 'pxjtezahkrzqyokc'
        }
    });

//send out email

var mailOptions = {
    from: 'ellaidhurai.97@gmail.com',
    to: 'skiganesh@gmail.com',
    subject: 'Test mail',
    text: 'hello this mail is came from nodejs.Good morning!'

};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent" + info.response);
    }
});
