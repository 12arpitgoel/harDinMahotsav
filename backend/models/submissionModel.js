const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const submissionSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    medias:[
        {
            mediaType:{
                type:String, //image,video
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
            }
        },
    ],
    text:{
        type:String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Submission", submissionSchema);
