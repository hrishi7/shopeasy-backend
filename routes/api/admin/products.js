const express = require("express");
const router = express.Router();
// @route   GET api/admin/products/test
// @desc    Tests admin product route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Admin Products Works" }));

module.exports = router;
