const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

const Place = require("./Models/Place.js");

async function seed() {
  await Place.create({
    location: "South London",
    name: "The London Stags RFC",
    description:
      "South London's largest LGBTQ+ rugby club, providing both contact and touch rugby.",
    link: "https://www.thelondonstagsrfc.com/",
    likes: 0,
  });
}
seed();
