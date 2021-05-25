// compass = mongodb+srv://Waqar:<password>@test.ok0cr.mongodb.net/test
//const dbName = 'NxBRestaurantDB';
//const pass = 'VgW4liSfY9ZNatwp';

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const productRouter = require("./routes/product"); // for Route Product
const orderRouter = require("./routes/order"); // for Route Order
const userRouter = require("./routes/user"); // for Route User
app.use(express.json()) // for parsing application/json
require("./db/config");

app.use(productRouter);
app.use(orderRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
