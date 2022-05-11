const express = require("express");

const {
    getCompetionDetails,
    newSubmission,
    updateLike,
    getComments,
    createComment
} = require("../controllers/competitionController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();
router.route("/submission/createComment").post(isAuthenticatedUser,createComment);
router.route("/submission/:id/comments").get(isAuthenticatedUser,getComments);
router.route("/submission/:id/like").get(isAuthenticatedUser,updateLike);
router.route("/submission").post(isAuthenticatedUser,newSubmission);
router.route("/:id").get(isAuthenticatedUser,getCompetionDetails);



module.exports = router;
