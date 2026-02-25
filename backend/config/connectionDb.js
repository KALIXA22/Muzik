const mongoose=require('mongoose');

const connectDb=async()=>{
  try{
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log("MongoDb connected successfully");
  }catch(error){
    console.error("MongoDb connection failed:",error.message);
    process.exit(1);
  }
}
module.exports=connectDb;