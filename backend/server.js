require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");

const heritageRoutes = require("./routes/heritageRoutes");

const app = express();
app.use(express.json());
app.use(cors());
connectDB();


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));


app.use("/api/heritage-sites", heritageRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
