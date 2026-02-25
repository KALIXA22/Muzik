const express=require('express');
const router=express.Router();

const auth=require("../middleware/authMiddleware");
const upload=require("../middleware/uploadMiddleware");
const {uploadSong}=require("../controller/songController");

router.post("/upload",auth,upload.single("file"),uploadSong);

module.exports=router;