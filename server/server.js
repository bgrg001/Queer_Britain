const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const mongoose = require("mongoose");
const bp = require("body-parser");
app.use(bp.json());

// importing my data model

mongoose.connect(process.env.DATABASE_URL);

const Place = require("./Models/Place");
const { parse } = require("dotenv");

app.get("/", function (request, response) {
  response.json("You are looking at my root route");
});

// get endpoint that gets my data from the database

// post endpoint that creates a new item in my database

// delete endpoint that destroys DAT

// put endpoint that updates my data

//request is all the think you are passing to the server from client, response is from server to client

app.get("/places", async function (request, response) {
  const places = await Place.find(request.query);
  response.json(places);
});

app.delete("/places/:id", async function (request, response) {
  const deletePlaces = await Place.findByIdAndDelete(request.params.id);
  response.json(deletePlaces);
});

// app.js + update ID, runs the function, request is the call from the front end, response is what we send back. We are
// then creating a variable called update likes then we are saying go to place and update based on the ID, and the params is the
// is the question and equals
app.put("/places", async function (request, response) {
  console.log(request.query._id, request.query.likes);
  const updateLikes = await Place.findByIdAndUpdate(request.query._id, {
    likes: parseInt(request.query.likes),
  });
  response.json(updateLikes);
});

app.listen(PORT, () => console.log("App is listening of Port" + PORT));
