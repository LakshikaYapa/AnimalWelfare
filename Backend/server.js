const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes); 

app.get("/", (req, res) => {
    res.send("PawCare backend is working!");
});

connectDB();

app.listen(5000, () => {
    console.log("PawCare backend server is running");
});