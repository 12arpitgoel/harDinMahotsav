const express = require("express");

const {
    createEvent,
    getEvents,
    getEventDetails,
    getRecommended,
    getEventTranslation,
    updateFavorite,
    getFavourites,
} = require("../controllers/eventController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/admin/event/new").post(isAuthenticatedUser,authorizeRoles("admin","organization"),createEvent);

router.route("/events").get(isAuthenticatedUser,getEvents);
router.route("/event/:id/translate").get(isAuthenticatedUser,getEventTranslation);
router.route("/event/:id").get(isAuthenticatedUser,getEventDetails);
router.route("/event/:id/favorite").get(isAuthenticatedUser,updateFavorite);


router.route("/events/recommended").get(isAuthenticatedUser,getRecommended);
router.route("/events/favourite").get(isAuthenticatedUser,getFavourites);

module.exports = router;
