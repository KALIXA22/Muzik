const express=require("express");
const cors=require('cors');

const authRoutes=require("./routes/authRoutes");
const songRoutes=require("./routes/songRoutes");


const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/uploads",express.static("uploads"));

app.use("/auth",authRoutes);
app.use("/songs",songRoutes);

app.get("/",(req,res)=>{
    res.send("Music App Backend is running");
});


module.exports=app;
