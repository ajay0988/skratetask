const Meeting = require("../models/meeting")
const User = require("../models/user")
const mongoose = require("mongoose")
// create new meeting

exports.createMeeting = async (req, res, next) => {
    console.log(req.body)


    const { uid1, uid2, date } = req.body

    const meeting = await Meeting.create({
        uid1, uid2, date
    })
    return res.status(200).json({
        MUID: meeting._id

    })

}

// get all meeting details

exports.getAllMeetings = async (req, res, next) => {

    const meetings = await Meeting.find({}).select('-__v')
    var meetlist = []
    meetings.forEach(async (v) => {
        var meet={}
        
        meet["_id"] = v._id
        
        var username1 = await User.findOne({ _id: v.uid1.toString() })
        username1 = username1.username
        var username2 = await User.findOne({ _id: v.uid2.toString() })
        username2 = username2.username

        meet["user1"]=username1
        meet["user2"]=username2
        // meet={_id,username1,username2}
        // console.log(username1,username2)
        meetlist.push(meet)
    })


res.status(200).json({
    meetings: meetlist
})
}