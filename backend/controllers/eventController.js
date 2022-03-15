const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const Event = require("../models/eventModel");
const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apifeatures");

exports.createEvent = catchAsyncErrors(async (req,res,next)=>{

  const { name, description, media, eventDate, competitions } = req.body;

  const myCloud = await cloudinary.v2.uploader.upload(media, {
    folder: "event",
  });

  for (let i = 0; i < competitions.length; i++) {
    const result = await cloudinary.v2.uploader.upload(competitions[i].media, {
      folder: "event",
    });

    competitions[i].media={
      public_id: result.public_id,
      url: result.secure_url,
      // public_id:"1234",
      // url:competitions[i].media
    };
  } 


  const event = await Event.create({
    name,
    description,
    media: {
      public_id: myCloud.result.public_id,
      url: myCloud.secure_url,
    },
    eventDate,
    competitions,
    user:req.user.id
  });

  res.status(201).json({
    success: true,
    event,
  });

});

exports.getEvents = catchAsyncErrors(async (req,res,next)=>{
  const resultPerPage = 10;
  const eventsCount = await Event.countDocuments();

  const apiFeature = new ApiFeatures(Event.find(), req.query)
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

// Update Event -- Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let event = await Event.findById(req.params.id);

  if (!event) {
    return next(new ErrorHander("Event not found", 404));
  }

  const { name, description, media, eventDate, competitions } = req.body;

  if (media !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }
    req.body.images = imagesLinks;
  }

  if (media !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }
    req.body.images = imagesLinks;
  }

  

  const myCloud = await cloudinary.v2.uploader.upload(media, {
    folder: "event",
  });

  for (let i = 0; i < competitions.length; i++) {
    const result = await cloudinary.v2.uploader.upload(competitions[i].media, {
      folder: "event",
    });

    competitions[i].media={
      public_id: result.public_id,
      url: result.secure_url,
      // public_id:"1234",
      // url:competitions[i].media
    };
  } 


  

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    // useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    event,
  });
});