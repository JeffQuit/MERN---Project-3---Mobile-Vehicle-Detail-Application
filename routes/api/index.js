const router = require("express").Router();
const adminRoutes = require("./adminRoutes");
const quoteRoutes = require("./quoteroutes");
const mailRoutes = require("./mailRoutes");

// API Routes
router.use("/admin", adminRoutes);
router.use("/mail", mailRoutes);
router.use("/quotes", quoteRoutes);

module.exports = router;
