const moogoes=require("mongoose")

// create the function for database connection
exports.connectDatabase=()=>{

    moogoes.connect(process.env.DB_URI,{useNewUrlParser:true ,useUnifiedTopology:true}).then(
        (data)=>{
            console.log(`Mongodb connected to server : ${data.connection.host}`)
        }
    )
}
