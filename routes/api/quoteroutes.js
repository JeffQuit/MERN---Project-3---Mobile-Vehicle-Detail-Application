const router = require('express').Router();
const quoteController = require('../../controllers/quoteController');

router.route('/').post(quoteController.create);

module.exports = router;
