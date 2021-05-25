const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    reviewsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
        // required: true,
    }],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;