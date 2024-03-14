import mongoose from "mongoose";

function convertToLockalDate (timeZone){
    const utcDate = new Date(timeZone)
    const offsetMinutes = utcDate.getTimezoneOffset()
    const lockalTime = new Date(utcDate.getTime() - offsetMinutes * 60 *1000)
    return lockalTime.toDateString()
}
//new Date(new Date.getTime()-60*60*1000)
const postSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required:true,
        },
        quantity:{
            type: Number,
            required : false,
            default:0
        },
        price: {
            type: Number,
            required : false,
        },
        Image: {
            type: String,
            required: false,
        },
        createdAt: {
            type: Date,
            default: Date.now , 
        }

    },
    {
        timestamps: true
    }
)
// should be big P
export const Content = mongoose.model("Content" , postSchema);

// this method is for node js 
// module.exports = Product;