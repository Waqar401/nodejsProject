const mongoose = require("mongoose");
const Order = require("./order");
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    },
    ordersId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
    }]
})
const User = mongoose.model("User", userSchema)

module.exports = User;