
const router = require('express').Router();

const quote_controller = require('../../controllers/quoteController');
const admin_controller = require('../../controllers/adminController');



router.route("/logout").get(admin_controller.signOutUser);

router.route("/login").post(admin_controller.loginUser);


router.route('/signup').post(admin_controller.signUpUser);

router.route('/bookings')
        .get(quote_controller.findAll)
        .put(quote_controller.update)
        // .delete(quote_controller.remove);



module.exports = router;
