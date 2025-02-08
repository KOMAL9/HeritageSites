const HeritageSite = require("../models/HeritageSite");

// Get all heritage sites
const getAllHeritageSites = async (req, res) => {
  try {
    const sites = await HeritageSite.find();
    res.json(sites);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a single heritage site by ID
const getHeritageSiteById = async (req, res) => {
  try {
    const site = await HeritageSite.findById(req.params.id);
    if (!site) return res.status(404).json({ message: "Site not found" });
    res.json(site);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

// Create a new heritage site
const createHeritageSite = async (req, res) => {
  const newSite = new HeritageSite(req.body);
  try {
    const savedSite = await newSite.save();
    res.status(201).json(savedSite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing heritage site
const updateHeritageSite = async (req, res) => {
  try {
    const updatedSite = await HeritageSite.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSite)
      return res.status(404).json({ message: "Site not found" });
    res.json(updatedSite);
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
};

// Delete a heritage site
const deleteHeritageSite = async (req, res) => {
  try {
    const deletedSite = await HeritageSite.findByIdAndDelete(req.params.id);
    if (!deletedSite)
      return res.status(404).json({ message: "Site not found" });
    res.json({ message: "Site deleted" });
  } catch (err) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

module.exports = {
  getAllHeritageSites,
  getHeritageSiteById,
  createHeritageSite,
  updateHeritageSite,
  deleteHeritageSite,
};
