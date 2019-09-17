const express = require("express");
const router = express.Router();
// @route   GET api/admin/admins/test
// @desc    Tests admin route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Admin Works" }));

module.exports = router;
