const Meeting = require("../models/meeting")
const User = require("../models/user")


exports.createMeeting = async (req, res, next) => {
    console.log(req.body)

    // check for existence of users
    const { uid1, uid2, date } = req.body

    try {
       const  user1 = await User.findOne({ _id: uid1 })
        const user2 = await User.findOne({ _id: uid2 })
        console.log(user1,user2)
        if (user1===null || user2==null) {
            return res.status(404).json({
                success: false,
                message: "requested users not present"
            })
        }
        const meeting = await Meeting.create({
            uid1, uid2, date
        })
        return res.status(200).json({
            UID: meeting._id

        })
    } catch (error) {
        if (error.name==="CastError")
        return res.status(500).json({
            message: error.message
        })

    }
}

// get all meeting details

exports.getAllMeetings = async (req, res, next) => {

    const meetings = await Meeting.find({}).select('-__v')
    var meetlist = []
    meetings.forEach(async (v) => {
        var meet = {}

        meet["_id"] = v._id

        var username1 = await User.findOne({ _id: v.uid1.toString() })
        username1 = username1.username
        var username2 = await User.findOne({ _id: v.uid2.toString() })
        username2 = username2.username

        meet["user1"] = username1
        meet["user2"] = username2
        // meet={_id,username1,username2}
        console.log(meet)
        // console.log(username1, username2)
        meetlist.push(meet)
        console.log(meetlist.length)
    })
// console.log(meetlist.length)

    res.status(200).json({
        meetings: meetlist
    })
}