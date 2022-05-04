const express = require("express");

const {
    createEvent,
    getEvents,
    getEventDetails,
    getRecommended,
    getCompetionDetails
} = require("../controllers/eventController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/admin/event/new").post(isAuthenticatedUser,authorizeRoles("admin","organization"),createEvent);

router.route("/events").get(isAuthenticatedUser,getEvents);

router.route("/event/:id").get(isAuthenticatedUser,getEventDetails);
router.route("/competition/:id").get(isAuthenticatedUser,getCompetionDetails);

router.route("/events/recommended").get(isAuthenticatedUser,getRecommended);

module.exports = router;
