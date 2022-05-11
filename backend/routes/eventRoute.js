const express = require("express");

const {
    createEvent,
    getEvents,
    getEventDetails,
    getRecommended,
    getEventTranslation,
} = require("../controllers/eventController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/admin/event/new").post(isAuthenticatedUser,authorizeRoles("admin","organization"),createEvent);

router.route("/events").get(isAuthenticatedUser,getEvents);
router.route("/event/:id/translate").get(isAuthenticatedUser,getEventTranslation);

router.route("/event/:id").get(isAuthenticatedUser,getEventDetails);



router.route("/events/recommended").get(isAuthenticatedUser,getRecommended);

module.exports = router;
