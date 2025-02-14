import mongoose, { Schema } from "mongoose";


const postSchema = new Schema ( {
    Image : {
        type : String,
        required: true
    },
    title : 
    {
        type : String,
        required : true
    },
    description : 
    {
        type : String,
        required : true
    },
    views : {
        type : Number,
        default : 0
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
}, { timestamps : true})


export const Post  = mongoose.model("Post",postSchema);