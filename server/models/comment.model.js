import mongoose, { Schema } from "mongoose";

const commentShcema = new  Schema({
    content : {
        type : String,
        required : true
    },
    post : {
        type : Schema.Types.ObjectId,
        ref : "Post"
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
},
{
    timestamps : true
}
)


export const Comment = mongoose.model("Comment",commentShcema);