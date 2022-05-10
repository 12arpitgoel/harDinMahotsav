const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    comment:{
        type:String,
        required:true
    },
    postId:{
        type: mongoose.Schema.ObjectId,
        ref: "Comment",
        required: true,
    },
    repliedTo:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    }
});

module.exports = mongoose.model("Comment", commentSchema);
