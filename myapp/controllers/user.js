import user from "../models/user.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken"

export const signup =async (req,res) => {
    try{
        const{name,email,password}=req.body;

        const existingUser=await User.findOne({email})
        if(existingUser){
            return res.json({
                message:"User already exists"
            })
        }
        const user =  await User.create({
            name,
            email,
            password
        })
        res.json({
            message:"User signup",
            user

        })

    }catch(error){
        res.json({
            errors:error.message
        })
    }
    
    // console.log("signup...");
}


export const login = async (req,res) => {
    try{
        const{email,password}=req.body;
        const user = await User.findOne({email})
        if(!user || user.password!==password){
            return res.json({
                message:"Invalid credentials"
            })
        }
        const token =jwt.sign({
            userId:user._id
        },
        process.env.JWT_SECRET
    )
        res.json({
            message:"User loggedin!!",
            token
        })
        
    }catch(error){
        res.json({
            errors:error.message
        })
    }

}