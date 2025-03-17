import mongoose from 'mongoose'
import { User } from '../models/user.model.js'
import { ApiError } from '../utils/ApiError.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const { name, password, email } = req.body;

        // Check if user already exists (OUTSIDE TRANSACTION)
        const existedUser = await User.findOne({ email }); // Removed session
        if (existedUser) {
            throw new ApiError(409,  "User already exists");
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user inside a transaction
        const user = new User({
            email,
            name,
            password: hashedPassword
        });

        await user.save({ session });
    

        // Token Generation
        const token = jwt.sign(
            { _id: user._id, email: user.email },
            process.env.JWT_SECRET_KEY,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        // Commit transaction
        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user:{
                _id:user._id,
                email:user.email,
                name:user.name,
                password:user.password
            },
            token,
        });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
};


export const login= async(req,res,next)=>{
    try{
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            throw new ApiError(404,'User not found')
        }
        const isPasswordValid =await bcrypt.compare(password,user.password)
        if(!isPasswordValid){
            throw new ApiError(400,'Invalid Password')
        }
        const token = jwt.sign({
            _id: user._id
        },
    
    process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRES_IN
    })
    res.status(201).json({
        message:'User signed in successfully',
        success:true,
        token,
        user
    })

    }
    catch(err){
        next(err)
    }
}