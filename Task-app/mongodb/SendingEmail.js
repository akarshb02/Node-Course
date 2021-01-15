const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.api);

sgMail.send({
    to: "akarsh226@gmail.com",
    from: "akarshb02@gmail.com",
    subject: "this is my first testing mail",
    text: "hope it wil be delevered"
})

const welcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'akarshb02@gmail.com',
        subject: "thanks for joining in..!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })


}

module.exports = {
    welcomeEmail
}
