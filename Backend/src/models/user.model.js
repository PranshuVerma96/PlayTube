import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken';
import bcrpyt from 'bcrypt';

const userSchema = new Schema(
  {
    username: {
      type: String,
      requried: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, // ager app isko search me user karte he tabi index true kiya he
    },
    email: {
      type: String,
      requried: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      requried: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // cloudinary url
      requried: true,
    },
    coverImage: {
      type: String, // cloudinary url
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save" , function (next){
  if(!this.isModified('password')){
    return next();
  }
  this.password = bcrpyt.hash(this.password,10,)
  next();
})

// custom method 
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrpyt.compare(password , this.password);
}
userSchema.methods.generteAccessTokent = function(){}
userSchema.methods.generteRefreshTokent = function (){}
userSchema.methods.generteRefreshToken = function(){
 return jwt.sign({
    _id : this._id,
    email : this.email,
    username : this.username,
    fullname : this.fullname
  },
)
}
export const User = mongoose.model("User", userSchema);
