const router = require("express").Router();
require("dotenv").config();
const mail_controller = require("../../controllers/mailController");

router.route("/send").get(mail_controller.sendContactMail);
router.route("/book").get(mail_controller.sendBookedMail);
router.route("/client").get(mail_controller.sendClientMail);

module.exports = router;
