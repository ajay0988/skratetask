const mongoose = require("mongoose")



// create the user schema
const meetingSchema = new mongoose.Schema({
    uid1: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    uid2: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: String,
        required: true
    }
   
})

// export the userschema
module.exports = mongoose.model('Meeting', meetingSchema)