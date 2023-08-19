const asyncHandler = require("express-async-handler");
const Review = require("../models/reviewModel");
//@desc Get all reviews
//@route GET /api/reviews
const getReviews = asyncHandler(async (req, res) => {
  console.log("The request body is :");
  const reviews = await Review.find({});
  console.log(reviews)
  res.status(200).json(reviews);
});

//@desc Create New review
//@route POST /api/reviews
const createReview = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { title, content } = req.body; //destructuring
  if (!title || !content) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const review = await Review.create({
    title,
    content
  });

  // io.emit('reviewAdded', review);

  res.status(201).json(review);
});

//@desc Get review
//@route GET /api/reviews/:id
const getReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review) {
    res.status(404);
    throw new Error("review not found");
  }
  res.status(200).json(review);
});

//@desc Update review
//@route PUT /api/reviews/:id
const updateReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);l
  if (!review) {
    res.status(404);
    throw new Error("review not found");
  }

  const updatedreview = await Review.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedreview);
});

//@desc Delete review
//@route DELETE /api/reviews/:id
const deleteReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review) {
    res.status(404);
    throw new Error("review not found");
  }

  await Review.deleteOne({ _id: req.params.id });
  res.status(200).json(review);
});

module.exports = {
  getReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
};