/* database schema */
const mongoose = require("mongoose");

const assetSchema = mongoose.Schema(
  {
    "name": String,
    "date": String,
    "description": String,
    "imgURL": String
  });

const userSchema = mongoose.Schema(
  {
  "password": String,
  "email": String,
  "firstname": String,
  "lastname": String,
});

const activitySchema = mongoose.Schema(
  {
  "sid": String,
  "uid": String,
  "heartbeat": Date
})

mongoose.model("assets", assetSchema);
mongoose.model("users", userSchema);
mongoose.model("activity", activitySchema);
