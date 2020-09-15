// const passport = require("passport");
// const db = require("../models");
const sgMail = require("@sendgrid/mail"); //sendgrid library to send emails

exports.sendMail = function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  //Get Variables from query string in the search bar
  const { sender, topic, text, name, phone, vehicle } = req.query;
  //Sendgrid Data Requirements
  const msg = {
    to: sender, //recipient
    from: "techjkim@gmail.com",
    subject: topic,
    text: `
	From:\n
	Name: ${name}\n
	Email: ${sender}\n
	Phone: ${phone}\n
	Vehicle: ${vehicle}\n
	Main Message: ${text}.`,
  };
  //Send Email
  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};
