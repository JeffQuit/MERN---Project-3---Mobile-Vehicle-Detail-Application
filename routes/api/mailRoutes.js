const router = require("express").Router();
const cors = require("cors"); //needed to disable sendgrid security
const sgMail = require("@sendgrid/mail"); //sendgrid library to send emails
require("dotenv").config();
const mail_controller = require("../../controllers/mailController");

// router.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
//   );
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });

// Define API routes here

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!
// router.use(cors());

// router.get("/", (req, res) => {
//   //Get Variables from query string in the search bar
//   const { sender, topic, text, name, phone, vehicle } = req.query;
//   //Sendgrid Data Requirements
//   const msg = {
//     to: sender, //recipient
//     from: "jonathan213kim@gmail.com",
//     subject: topic,
//     text: `
// 	From:\n
// 	Name: ${name}\n
// 	Email: ${sender}\n
// 	Phone: ${phone}\n
// 	Vehicle: ${vehicle}\n
// 	Main Message: ${text}.`,
//   };

//   //Send Email
//   sgMail.send(msg).then(
//     () => {},
//     (error) => {
//       console.error(error);

//       if (error.response) {
//         console.error(error.response.body);
//       }
//     }
//   );
// });

router.route("/send").get(mail_controller.sendMail);

// router.route("/login").post(admin_controller.loginUser);

// router.route("/signup").post(admin_controller.signUpUser);

module.exports = router;
