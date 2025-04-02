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
  established_date: { type: String, required: true },
  recent_developments: { type: String },
  tags: { type: [String], required: true },
  moreInfo: { type: [String] }, // 🔹 New field added for additional details
});

module.exports = mongoose.model("HeritageSite", HeritageSiteSchema);
