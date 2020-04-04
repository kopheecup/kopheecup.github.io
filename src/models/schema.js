/* database schema */
const mongoose = require("mongoose");

const assetSchema = mongoose.Schema(
  {
    "name": String,
    "date": String,
    "description": String,
    "img":
      {
        data: Buffer,
        contentType: String
      }
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

mongoose.model("asset", assetSchema);
mongoose.model("activity", activitySchema);
