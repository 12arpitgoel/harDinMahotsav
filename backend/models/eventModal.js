const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const { v4:uuid } = require("/uuid");

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Event Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Event Description"],
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
  eventDate:{
    type: Date,
    required:true
  },
  competitions:[
      {
        id:{
            type:String,
            default:uuid()
        },
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        guidelines:[
            {
                type:String,
                required:true
            }
        ],
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
        category:{
            type:String,
            required:true // video, images, text
        },
        submissions:[
            {
                id:{
                    type:String,
                    default:uuid()
                },
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
            }
        ]
      }
  ],
//   liveEvent:{
//       name:{
//           type:String,
//           required:true
//       },
//       description:{
//           type:String,
//           required:true
//       },
//       link:{

//       }
//   },
  discuss:[
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        comment:{
            type:String,
            required:true
        },
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
    }
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Event", eventSchema);
