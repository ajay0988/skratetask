const app=  require("./app")
const dotenv=require("dotenv")

const { connectDatabase } = require("./config/mongoconnection")

// handle uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`)
    console.log("Shutting Down the server due to Ucaught Execption ")
      process.exit(1)   
  })    

  // give the path of config file
dotenv.config({path:"./config/config.env"})
  
// connect to database
connectDatabase()

// start the server
const server=app.listen(process.env.PORT || 4000,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
  }) 


//   handle unhandledrejection 
  process.on("unhandledRejection",(err)=>{
    console.log(`Error : ${err.message}`)
    console.log("Shutting Down the server due to unhandled promise rejection")
    server.close(()=>{
      process.exit(1) 
    })
  })    