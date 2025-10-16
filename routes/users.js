const express = require("express");
const { getUsersList } = require("../controllers/users");
const router = express.Router();
router.route("/userslist").get(getUsersList);

module.exports = router;
