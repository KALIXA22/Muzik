const express = require("express");
const cors = require('cors');

const authRoutes = require("./routes/authRoutes");
const spotifyRoutes = require("./routes/spotifyRoutes");
const dotenv = require('dotenv').config();
const connectDb = require("./config/connectionDb")
connectDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes);
app.use("/api/spotify", spotifyRoutes);

app.get("/", (req, res) => {
    res.send("Music App Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


module.exports = app;

