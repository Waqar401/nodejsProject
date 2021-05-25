const mongoose = require("mongoose");
const Product = require("./product");

const orderSchema = new mongoose.Schema({
    products: [{
        ProductId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        drink: {
            type: String,
        },
        quantity: {
            type: Number,
            default: 1,
        },
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    shippingAddress: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
    },
    totalAmount: {
        type: Number,
    },

})
const Order = mongoose.model("Order", orderSchema)

module.exports = Order;