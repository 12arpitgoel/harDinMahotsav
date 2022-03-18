const express = require("express");

const {
    createEvent,
    getEvents
} = require("../controllers/eventController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/admin/createEvent").post(isAuthenticatedUser,authorizeRoles("admin"),createEvent);

router.route("/getEvents").get(isAuthenticatedUser,getEvents);

module.exports = router;
