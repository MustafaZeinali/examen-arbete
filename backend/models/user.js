
import mongoose from "mongoose";

const TheUsers = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        }
    }
)

export const User = mongoose.model('User',TheUsers);