import mongoose,{Schema} from "mongoose";
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        minLength: 2,
        maxLength: 10
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        minLength: 5,
        maxLength: 255,
        lowerCase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        requird:[true, 'Password is required'],
        minLength:6
    }
}, {timestamps: true})
export const User = mongoose.model('User',userSchema)