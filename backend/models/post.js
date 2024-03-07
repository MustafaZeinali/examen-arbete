import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true , "please enter a product name"]
        },
        quantity:{
            type: Number,
            required : true,
            default:0
        },
        price: {
            type: Number,
            required : true,
        },
        Image: {
            type: String,
            required: false,
        }

    },
    {
        timestamps: true
    }
)
// should be big P
export const Product = mongoose.model("product" , postSchema);

// this method is for node js 
// module.exports = Product;