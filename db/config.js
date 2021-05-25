const mongoose = require("mongoose");

//Set up default mongoose connection
var mongoDB =
  "mongodb+srv://Waqar:VgW4liSfY9ZNatwp@test.ok0cr.mongodb.net/NxBRestaurantDB?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// //Get the default connection
var db = mongoose.connection;

db.on("error", () => {
  console.log("Db is Not Connected");
});

db.on("open", () => {
  console.log("Db is  Connected");
});
