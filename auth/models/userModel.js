import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please gives name!"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please gives email"],
  },
  password: {
    type: String,
    required: [true, "Please gives password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.model.user || mongoose.model("user", userSchema);

export default User;
