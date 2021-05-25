const Order = require("../models/order");
const User = require("../models/user");

module.exports.getOrder = async (req, res) => {
    try{
        const orderData = await Order.find({});
        res.status(200).send(orderData);
    } catch(error) {
        res.status(400).send("Error in fetch data", error);
    }
};


module.exports.postOrder = async (req, res) => {
    try{
        const _id = req.params.id;
        console.log(_id);
        const user = await User.findOne(_id);
        console.log(user);

        const order = new Order();
        order.products.productId = req.body.productId;
        order.products.quantity = req.body.quantity;
        order.products.drink = req.body.drink;
        order.userId = req.params.id;
        order.shippingAddress = req.body.shippingAddress;
        order.paymentMethod = req.body.paymentMethod;
        order.totalAmount = req.body.totalAmount;

        const orderSave = order.save();
        if(orderSave) console.log("New Order is Added");

        user.ordersId.push(order._id);
        const orderComplete = await user.save();
        if(orderComplete) console.log("User Id is Added fro this Order");
        res.status(200).send(orderComplete);
    } catch(error) {
        res.status(400).send("Error in fetch data", error);
    }
};