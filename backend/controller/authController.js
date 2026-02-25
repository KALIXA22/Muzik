const User=require("../models/user");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const register=async(req,res)=>{
    const {username,email,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);

    await User.create({
        username,
        email,
        password:hashedPassword
    });
    res.status(201).json({message:"User registered successfully"});
}

const login=async(req,res)=>{
    const {email,password}=req.body;

    const user=await User.findOne({email});
    if(!user) return res.status(404).json({message:"User not found"});

    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(401).json({message:"Invalid credentials"});

    const token=jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:"7d"}
    );

    res.json({token});
};

module.exports={
    register,
    login
};