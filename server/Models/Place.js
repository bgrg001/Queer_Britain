// data model

const mongoose = require("mongoose");

const { Schema } = mongoose;

const placeSchema = new Schema({
  location: String,
  name: String,
  description: String,
  image: String,
  link: String,
  likes: Number,
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
