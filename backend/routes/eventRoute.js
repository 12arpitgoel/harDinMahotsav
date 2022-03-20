const express = require("express");

const {
    createEvent,
    getEvents,
    getEventDetails
} = require("../controllers/eventController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/admin/event/new").post(isAuthenticatedUser,authorizeRoles("admin"),createEvent);

router.route("/events").get(isAuthenticatedUser,getEvents);

router.route("/event/:id").get(isAuthenticatedUser,getEventDetails);

module.exports = router;
