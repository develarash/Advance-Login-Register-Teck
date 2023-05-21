require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/dbConfig");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3500;

connectDB();

app.use(express.json());

app.use("/register", require("./routes/api/register"));

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
  app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
});
