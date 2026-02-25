const mongoose=require("mongoose");

const songSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    artist:{
        type:String,
        default:"Unknown"
    },
    audioUrl:{
        type:String,
        required:true
    },
    uploadedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
},{timestamps:true});

module.exports=mongoose.model("Song",songSchema);