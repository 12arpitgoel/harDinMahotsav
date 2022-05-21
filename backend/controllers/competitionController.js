const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const Event = require("../models/eventModel");
const Submission = require("../models/submissionModel");
const Competition = require("../models/competitionModel");
const Comment = require("../models/commentModel");
const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apifeatures");
const { toxicityDetector } = require("../utils/toxicityDetector");

// Get Competion Details
exports.getCompetionDetails = catchAsyncErrors(async (req, res, next) => {
  const competition = await Competition.findById(req.params.id).populate({
    path:"submissions",
    populate:{
      path:"user"
    }
  });

  if (!competition) {
    return next(new ErrorHander("Competition not found", 404));
  }

  res.status(200).json({
    success: true,
    competition,
  });
});

exports.newSubmission = catchAsyncErrors(async (req,res,next)=>{
  
  const { name, description, file,  competitionId } = req.body;
  const myCloud = await cloudinary.v2.uploader.upload(file, {
    folder: "submissions",
  });


  const submission = await Submission.create({
    name,
    description,
    media: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
    user:req.user.id,
  });

  await Competition.updateOne(
      { _id: competitionId },
      { $push: { submissions: submission.id } }
    )
  res.status(201).json({
    success: true,
    submission,
  });

});

// update Like
exports.updateLike = catchAsyncErrors(async (req, res, next) => {
  const userId=req.user.id;
  const submission=await Submission.findOneAndUpdate(
    {_id:req.params.id},
    [
      { 
        $set: { 
            likes: { 
                $cond: [ { $in: [ userId, "$likes" ] }, 
                        { $setDifference: [ "$likes", [ userId ] ] }, 
                        { $concatArrays: [ "$likes", [ userId ] ] } 
                ] 
            }
        }
      }
   ],
   { new: true }
  ).populate("user")

  res.status(200).json({
    success: true,
    submission,
  });
});


// Get Comments
exports.getComments = catchAsyncErrors(async (req, res, next) => {
  const submission = await Submission.findById(req.params.id).populate({
    path:"comments",
    match:{toxic:{$eq:false}},
    populate:[
      {
        path:"replies",
        match:{toxic:{$eq:false}},
        populate:{
          path:"user"
        }
      },
      {
        path:"user"
      }
    ]
  });

  if (!submission) {
    return next(new ErrorHander("Comments not found", 404));
  }

  res.status(200).json({
    success: true,
    comments:submission.comments,
  });
});

// Create Comment
exports.createComment = catchAsyncErrors(async (req, res, next) => {
  const { comment, postId, repliedTo,  submissionId } = req.body;
  
  let toxic=await toxicityDetector(comment);
  let obj={
    comment,
    repliedTo,
    postId,
    user:req.user.id,
    toxic
  };
  
  const comm = await Comment.create(obj);
  
  
  if(!postId){
    await Submission.updateOne(
      { _id: submissionId },
      { $push: { comments: comm.id } }
    );
  }
  else{
    const rep=await Comment.updateOne(
      { _id: postId },
      { $push: { replies: comm.id } }
    )
  }

  if(toxic){
    return next(new ErrorHander("Comment maybe inappropriate, currently in review", 400));
  }

  res.status(200).json({
    success: true,
    comments:"Comment is added",
  });

  // this.getComments(req,res,next);
});