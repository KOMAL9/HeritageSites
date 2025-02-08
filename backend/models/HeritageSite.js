const mongoose = require("mongoose");

const HeritageSiteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  type: {
    type: String,
    enum: ["Cultural", "Natural", "Mixed"],
    required: true,
  },
  description: { type: String, required: true },
  scientific_importance: { type: String, required: true },
  conservation_efforts: { type: String },
  images: { type: [String] },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  established_date: { type: Date, required: true },
});

module.exports = mongoose.model("HeritageSite", HeritageSiteSchema);
