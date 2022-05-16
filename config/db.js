const mongoose = require("mongoose")
/*
create a connection the mongo data base
the normall way using await mongoose.connect(process.env.MONGO_URI) will use the default of the monogoose event which is a promise
so we used async as we do not want to priotize any databse operation higher that the normal event, then try and catch block
try to connect the mongoose module emit event Process.env.MONGO_URI and we us .connect fuction to listen to it and if connecting successful 
then we set the some config connection Options variables  on successful connection as below to emelinate the errors and warning
      useNewUrlParser:true,
      useUnifiedTopology: true,
      useFindAandModify: FontFaceSetLoadEvent
if err 
catch the error and display the error on the console and the when the process of the connection exits with error return exit code 1 in the callback function
       
*/
const connectDB = async() => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI, { //to element warnings
      useNewUrlParser:true,
      useUnifiedTopology: true,
      //useFindAandModify: false, in this mongo version not anymore supported
    }) 
  }catch(err){
    console.error(err)
    process.exit(1)

  }
}
console.log("DB connected")
// export the module to be used in other modules files
module.exports = connectDB