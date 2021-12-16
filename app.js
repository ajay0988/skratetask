const express = require("express")
const app =express()
app.use(express.json())




app.use("",require("./routes/userRoute"))
app.use("",require("./routes/meetingRoute"))



// export the app
module.exports = app