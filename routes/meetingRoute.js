const express = require("express")
const { createMeeting ,getAllMeetings} = require("../controllers/meetingController")
const router = express.Router()


// create API's for user
router.route("/meetings/new").post(createMeeting)
router.route("/meetings/all").get(getAllMeetings)
// router.route("/users/all").get(getAllUsers)
// export the user routes
module.exports = router