require("dotenv").config();
var mailgun = require('mailgun-js')({apiKey: process.env.API_KEY, domain: process.env.DOMAIN});

const data = {
    from: 'Excited User <aldeberan.emporium@gmail.com>',
    to: 'aldeberan.emporium@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, (error, body) => {
    if (error){
        console.log(error);
    }
    console.log(body);
});
