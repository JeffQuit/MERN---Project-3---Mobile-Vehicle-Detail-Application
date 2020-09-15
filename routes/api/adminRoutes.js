const router = require("express").Router();
// const admin_controller = require('../../controllers/quoteController');
// const router = express.Router();
const admin_controller = require("../../controllers/userController");

router.route("/logout").get(admin_controller.signOutUser);

router.route("/login").post(admin_controller.loginUser);

router.route("/signup").post(admin_controller.signUpUser);
/*
router.route('/bookings').get(appointment_controller.findAll).put(appointment_controller.update).delete(appointment_controller.remove);
*/

module.exports = router;
