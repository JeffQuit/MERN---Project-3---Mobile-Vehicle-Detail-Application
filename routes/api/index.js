const router = require("express").Router();
const adminRoutes = require("./adminRoutes");

// API Routes
router.use("/admin", adminRoutes);

module.exports = router;
