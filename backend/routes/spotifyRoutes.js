const express = require('express');
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { getNewReleases, searchTracks } = require("../controller/spotifyController");

// All spotify routes require authentication
router.get("/new-releases", auth, getNewReleases);
router.get("/search", auth, searchTracks);

module.exports = router;
