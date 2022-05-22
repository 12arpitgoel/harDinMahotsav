const express = require("express");

const {
    createEvent,
    getEvents,
    getEventDetails,
    getRecommended,
    getEventTranslation,
    updateFavorite,
    getToxicComments
} = require("../controllers/eventController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/admin/event/new").post(isAuthenticatedUser,authorizeRoles("admin","organization"),createEvent);
router.route("/admin/toxicComments").get(isAuthenticatedUser,authorizeRoles("admin"),getToxicComments);

router.route("/events").get(isAuthenticatedUser,getEvents);
router.route("/event/:id/translate").get(isAuthenticatedUser,getEventTranslation);
router.route("/event/:id").get(isAuthenticatedUser,getEventDetails);
router.route("/event/:id/favorite").get(isAuthenticatedUser,updateFavorite);


router.route("/events/recommended").get(isAuthenticatedUser,getRecommended);

module.exports = router;
