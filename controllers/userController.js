const User=require("../models/user")


// register a USer

exports.registerUser=async(req,res,next)=>{
        console.log(req.body)

        
        const {username}=req.body
        if (username.length<6 || username.length>20){
            return res.status(500).json({
                message: "username's length must be grater than or equal to 6 and less than 20"
            })
        }
        // console.log(username.length)

        const user=await User.create({
            username
        })
        return res.status(200).json({
            UID : user._id

        })
    
    
    }
// get all users
    exports.getAllUsers=async(req,res,next)=>{

        const users=await User.find().select('-__v')
        return res.status(200).json({
            users
           

        })
    
    }
