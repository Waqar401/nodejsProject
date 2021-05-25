const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    subDescription: {
        type: String,
        required: true,
    },
    width: {
        type: String,
        required: true,
    },
    productsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }],
})
const Category = mongoose.model("Category", categorySchema)

module.exports = Category;