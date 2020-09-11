const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors"); //needed to disable sendgrid security
const sgMail = require("@sendgrid/mail"); //sendgrid library to send emails
require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!
app.use(cors());

// Welcome page of the express server:

app.get("/", (req, res) => {
  //Get Variables from query string in the search bar
  const { sender, topic, text, name, phone, vehicle } = req.query;
  //Sendgrid Data Requirements
  const msg = {
    to: sender, //recipient
    from: "jonathan213kim@gmail.com",
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
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
