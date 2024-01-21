import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema(
    {
      email: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: false,
      },
      credits: {
        type: Number,
        default: 10, // Set the default value to 10 credits
      },
    },
    { timestamps: true }
  );
  
  export default mongoose.models.User || mongoose.model("User", userSchema);