const express = require("express")
const { getOrder, postOrder } = require("../controllers/order")

const router = express.Router();

router.get("/order", getOrder);
router.post("/order/:id", postOrder);

module.exports = router;