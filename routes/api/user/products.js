const express = require("express");
const router = express.Router();
// @route   GET api/user/products/test
// @desc    Tests users product route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Products Works" }));

module.exports = router;
