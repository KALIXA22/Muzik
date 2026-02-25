const Song = require("../models/song");

const uploadSong = async (req, res) => {
   const{title,artist}=req.body;

      const song=await Song.create({
         title,
         artist,
         audioUrl:req.file.path,
         uploadedBy:req.userId
      });
   res.status(201).json({message:"Song uploaded successfully",song});
}
module.exports={uploadSong};