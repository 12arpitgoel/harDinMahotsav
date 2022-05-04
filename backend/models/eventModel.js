const { type } = require("express/lib/response");
const mongoose = require("mongoose");

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
        type: mongoose.Schema.ObjectId,
        ref: "Competition",
        required: true,
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
  content:{
      type:String,
      required:true
  }
//  ,liveEvent:{
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
});

module.exports = mongoose.model("Event", eventSchema);
