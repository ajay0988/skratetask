// importing requried modules
const mongoose=require("mongoose")



// create the user schema
const UserSchema= new mongoose.Schema({
    username: {
        type: String,
        requried: [true,"PLease tell your username"],
        maxLength: [20,"username do not exceed 20"],
        minLength:[6,"username must be equal or greater than 6"],
        unique: true,
        trim: true
    }
})

// export the userschema
module.exports=mongoose.model('User',UserSchema)
