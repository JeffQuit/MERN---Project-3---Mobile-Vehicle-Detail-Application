const router = require('express').Router();
const adminRoutes = require('./adminRoutes');
const quoteRoutes = require('./quoteroutes');

// API Routes
router.use('/admin', adminRoutes);
router.use('/quotes', quoteRoutes);

module.exports = router;
