
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
        profile:{
            type: String,
            required: false,
        }
    }
)

export const User = mongoose.model('User',TheUsers);