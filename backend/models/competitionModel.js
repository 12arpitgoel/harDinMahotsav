const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const competitionSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    guidelines: {
        type:String,
        required:true
    },
    lastSubmissionDate:{
        type:Date,
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
    submissionType:{
        type:String,
        required:true // video, images, text
    },
    submissions:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "Submission",
            required: true,
        }
    ]
});

module.exports = mongoose.model("Competition", competitionSchema);
