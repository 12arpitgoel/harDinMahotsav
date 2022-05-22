const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const Event = require("../models/eventModel");
const Comment = require("../models/commentModel");
const Competition = require("../models/competitionModel");
const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apifeatures");
const ContentBasedRecommender = require('content-based-recommender');
const { translateString, translateEvent } = require("../utils/languageTranslate");
const mongoose = require("mongoose");

exports.createEvent = catchAsyncErrors(async (req, res, next) => {
  let content = "";
  const { name, description, media, eventDate, competitions: stringifyCompetitions } = req.body;
  content = name + " " + description + " ";
  let competitions = JSON.parse(stringifyCompetitions)
  const myCloud = await cloudinary.v2.uploader.upload(media, {
    folder: "event",
  });

  let compArray = [];
  for (let i = 0; i < competitions.length; i++) {
    const result = await cloudinary.v2.uploader.upload(competitions[i].media, {
      folder: "event",
    });
    competitions[i].media = {
      public_id: result.public_id,
      url: result.secure_url,
      // public_id:"1234",
      // url:competitions[i].media
    };

    const comp = await Competition.create({ ...competitions[i] });
    compArray.push(comp.id);

    content += competitions[i].name + " " + competitions[i].description + " category-" + competitions[i].submissionType + " ";
  }

  content += await translateString(content);
  const event = await Event.create({

    name,
    description,
    media: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
    eventDate,
    competitions: compArray,
    user: req.user.id,
    content
  });

  res.status(201).json({
    success: true,
    event,
  });

});

exports.getEvents = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 100;
  const eventsCount = await Event.countDocuments();
  const parQuery = await Event.find().populate("competitions").populate('user')
  const apiFeature = new ApiFeatures(Event.find().populate("competitions").populate('user').sort({"eventDate":-1}), req.query)
    .search()
  // .filter();
  let events = await apiFeature.query;

  let filteredEventssCount = events.length;

  apiFeature.pagination(resultPerPage);

  events = await apiFeature.query;
  res.status(200).json({
    success: true,
    events,
    eventsCount,
    resultPerPage,
    filteredEventssCount,
  });
})


exports.getRecommended = catchAsyncErrors(async (req, res, next) => {
  const recommender = new ContentBasedRecommender({
    minScore: 0.1,
    maxSimilarDocs: 100
  })

  const documents = await Event.aggregate([
    {
      $match: {
        "content": { $ne: null }
      }
    },
    {
      "$project": {
        "_id": 0,
        "id": "$_id",
        "content": "$content"
      }
    },
    
  ]);

  await recommender.train(documents);
  const map = new Map();

  req.user.visited.forEach(id => {
    let simArr = recommender.getSimilarDocuments(id, 0, 100);
    simArr.forEach(obj => {
      let val = map.get(obj.id);
      if (!val) {
        map.set(obj.id, obj.score);
      }
      else {
        map.set(obj.id, Math.max(val, obj.score));
      }
    })
  })

  let ids = Array.from(map.keys());
  let recs = await Event.aggregate([
    {
      "$match": { _id: { "$in": ids } }
    },
    {
      "$lookup":{
        from:"users",
        localField:"user",
        foreignField:"_id",
        as : "user"
      }
    },
    { "$addFields": {
      "user": {
          "$arrayElemAt": [ "$user", 0 ]
      }
  }}
  ]);

  recs = recs.map(rec => {
    for (let id of ids) {
      if (id.toString() == rec._id.toString()) {
        return {
          ...rec,
          score: map.get(id)
        }
      }
    }
  })

  recs.sort((a, b) => {
    return b.score - a.score
  });
  res.status(200).json({
    success: true,
    recs
  });
})

// Update Event -- Admin

// exports.updateEvent = catchAsyncErrors(async (req, res, next) => {
//   let event = await Event.findById(req.params.id);

//   if (!event) {
//     return next(new ErrorHander("Event not found", 404));
//   }

//   const { name, description, media, eventDate, competitions } = req.body;

//   if (media !== undefined) {
//     // Deleting Images From Cloudinary
//     for (let i = 0; i < event.images.length; i++) {
//       await cloudinary.v2.uploader.destroy(event.images[i].public_id);
//     }
//     req.body.images = imagesLinks;
//   }

//   if (media !== undefined) {
//     // Deleting Images From Cloudinary
//     for (let i = 0; i < event.images.length; i++) {
//       await cloudinary.v2.uploader.destroy(event.images[i].public_id);
//     }
//     req.body.images = imagesLinks;
//   }



//   const myCloud = await cloudinary.v2.uploader.upload(media, {
//     folder: "event",
//   });

//   for (let i = 0; i < competitions.length; i++) {
//     const result = await cloudinary.v2.uploader.upload(competitions[i].media, {
//       folder: "event",
//     });

//     competitions[i].media={
//       public_id: result.public_id,
//       url: result.secure_url,
//       // public_id:"1234",
//       // url:competitions[i].media
//     };
//   } 




//   event = await Event.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//     // useFindAndModify: false,
//   });

//   res.status(200).json({
//     success: true,
//     event,
//   });
// });

// Get Event Details
exports.getEventDetails = catchAsyncErrors(async (req, res, next) => {
  const event = await Event.findById(req.params.id).populate("competitions").populate('user');

  if (!event) {
    return next(new ErrorHander("Event not found", 404));
  }
  await User.findByIdAndUpdate(req.user.id, { $addToSet: { visited: event.id } });

  res.status(200).json({
    success: true,
    event,
  });
});


// update favorite
exports.updateFavorite = catchAsyncErrors(async (req, res, next) => {
  const userId=req.user.id;
  const event=await Event.findOneAndUpdate(
    {_id:req.params.id},
    [
      { 
        $set: { 
            favorites: { 
                $cond: [ { $in: [ userId, "$favorites" ] }, 
                        { $setDifference: [ "$favorites", [ userId ] ] }, 
                        { $concatArrays: [ "$favorites", [ userId ] ] } 
                ] 
            }
        }
      }
   ],
   { new: true }
  )
   console.log(event);
  res.status(200).json({
    success: true,
    event,
  });
});

// Get Admin Toxic Comments
exports.getToxicComments = catchAsyncErrors(async (req, res, next) => {
  
  const comments=await Comment.find({"toxic":{$eq:true}}).populate("user");


  if (!comments) {
    return next(new ErrorHander("Comments not found", 404));
  }

  res.status(200).json({
    success: true,
    comments,
  });
});





// By Aniket from here onwards...




exports.getEventTranslation = catchAsyncErrors(async (req, res, next) => {

  const event = await Event.findById(req.params.id).populate("competitions").populate('user');
  // console.log(req.params.id, event)
  if (!event) {
    return next(new ErrorHander("Event not found", 404));
  }

  const arr = Object.keys(event.toJSON());
  // console.log(arr)
  let translatedEvent = {};
  for (let i of arr) {
     
    if (i == "name" || i == "description") {
     
      translatedEvent[i] = "";
      let translation = await translateString(event[i]);
      translatedEvent[i] = translation;
    }
    else if (i == "competitions") {
      translatedEvent[i] = [];
      for (let j in event[i]) {
        let compArr = Object.keys(event[i][j].toJSON());
        translatedEvent[i][j] = {};
        for (let k of compArr) {
          translatedEvent[i][j][k] = "";
          translatedEvent[i][j][k] = event[i][j][k];
          if (k == "name" || k == "description" || k == "guidelines") {
            let translation = await translateString(event[i][j][k]);
            translatedEvent[i][j][k] = translation;
          }
        }
      }
    }
  }
  if (!translatedEvent) {
    return next(new ErrorHander("TransLation Not Found", 404));
  }
  res.status(200).json({
    success: true,
    translatedEvent,
  });
});