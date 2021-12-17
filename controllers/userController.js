const User = require("../models/user")


// register a USer

exports.registerUser = async (req, res, next) => {
    console.log(req.body)


    const { username } = req.body
    if (username.length < 6 || username.length > 20) {
        return res.status(500).json({
            message: "username's length must be grater than or equal to 6 and less than 20"
        })
    }
    // console.log(username.length)
   
    try {
        const user = await User.findOne({ username })
        // console.log(user)
        if (user) {
            return res.status(404).json({
                success: false,
                message: "username already exist"
            })
        }
        const createduser = await User.create({
            username
        })

        return res.status(200).json({
            UID: createduser._id

        })
    } catch (error) {

        if (error.code===11000)
        return res.status(500).json({
            message: error.message
        })
    }


}
// get all users
exports.getAllUsers = async (req, res, next) => {

    const users = await User.find().select('-__v')
    return res.status(200).json({
        users


    })

}
