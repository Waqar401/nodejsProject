const User = require("../models/user");

module.exports.getUser = async (req, res) => {
    try{
        const userData = await User.find({});
        res.status(200).send(userData);
    } catch(error) {
        res.status(400).send("Error in fetch data", error);
    }
};

module.exports.postUser = async (req, res) => {
    try{
        const user = new User(req.body);
        const userSave = user.save();
        res.status(200).send(userSave);
    } catch(error) {
        res.status(400).send("Error in fetch data", error);
    }
};