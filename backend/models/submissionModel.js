const mongoose = require("mongoose");

const submissionSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    media:{
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    comments:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "Comment",
            required: true,
        }
    ],
    likes:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Submission", submissionSchema);
