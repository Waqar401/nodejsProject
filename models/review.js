const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    username: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    isApplied: {
        type: Boolean,
    },
})
const Review = mongoose.model("Review", reviewSchema)

module.exports = Review;