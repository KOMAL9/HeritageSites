const mongoose = require("mongoose");
const HeritageSite = require("../models/HeritageSite");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleHeritageSites = [
  {
    name: "Machu Picchu",
    location: "Peru",
    type: "Cultural",
    description: "An Incan citadel set high in the Andes Mountains.",
    scientific_importance:
      "Archaeological discoveries revealing Incan civilization.",
    conservation_efforts: "Ongoing restoration and preservation by UNESCO.",
    images: [
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSe9h0DlZ1N4Y05WESiOwVYBJ1IscIc6TmSU_NFQFAs7RSYGHjHAb-NYs4xGLvpQ_Ox0Gn_RDIX-23CLR6LUeRf5_oOz7G-iD1r4BVbsQ",
    ],
    coordinates: { lat: -13.1631, lng: -72.545 },
    established_date: "1983-12-09",
  },
  {
    name: "Great Barrier Reef",
    location: "Australia",
    type: "Natural",
    description: "The world's largest coral reef system.",
    scientific_importance:
      "Unique marine biodiversity and climate change research.",
    conservation_efforts:
      "Coral bleaching monitoring and marine conservation projects.",
    images: [
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTFB6QZIIO1f4FUwlWJRiex1P5fBElWyjk7-nnB-2gr9aNr5zmwWZA6TL0YwYjThWrnDJXvelq8QxV8Yh3ECZerdLZuaf9H5IOO-aMRgw",
    ],
    coordinates: { lat: -18.2871, lng: 147.6992 },
    established_date: "1981-10-26",
  },
];

const seedDB = async () => {
  await HeritageSite.deleteMany();
  await HeritageSite.insertMany(sampleHeritageSites);
  console.log("Sample data inserted!");
  process.exit();
};

seedDB();
