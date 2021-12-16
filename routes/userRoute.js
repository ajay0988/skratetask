const express = require("express")
const { registerUser,getAllUsers } = require("../controllers/userController")
const router = express.Router()


// create API's for user
router.route("/users/new").post(registerUser)

router.route("/users/all").get(getAllUsers)
// export the user routes
module.exports = router