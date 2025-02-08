const express = require("express");
const {
  getAllHeritageSites,
  getHeritageSiteById,
  createHeritageSite,
  updateHeritageSite,
  deleteHeritageSite,
} = require("../controllers/heritageController");

const router = express.Router();

router.get("/", getAllHeritageSites);
router.get("/:id", getHeritageSiteById);
router.post("/", createHeritageSite);
router.put("/:id", updateHeritageSite);
router.delete("/:id", deleteHeritageSite);

module.exports = router;
