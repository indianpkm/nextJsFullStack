import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a username"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    number: {
        type: Number,
        unique:true
    },
    experience:{
        type:String,
    },
    skills:{
        type:Array,
    },
    about:{
        type:String
    },
    image: { 
      type: String,
      default:'https://res.cloudinary.com/dlqdntqxh/image/upload/v1692176241/y22ritzqc1wztnvtrwq0.jpg'
    },
})

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;