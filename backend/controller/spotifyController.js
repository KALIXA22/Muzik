const axios = require('axios');

/**
 * Controller using iTunes Search API as a robust, free alternative to Spotify.
 * This provides real-time music data and 30-second previews without requiring a Premium subscription.
 */

const getNewReleases = async (req, res) => {
  try {
    // Fetching Top Charts (equivalent to New Releases)
    const response = await axios.get('https://itunes.apple.com/search?term=music&limit=20&media=music&sort=recent');

    const tracks = response.data.results.map(item => ({
      id: item.trackId.toString(),
      title: item.trackName,
      artist: item.artistName,
      album: item.collectionName,
      cover: item.artworkUrl100.replace('100x100', '600x600'), // High quality cover
      preview_url: item.previewUrl,
      duration: Math.floor(item.trackTimeMillis / 1000),
      type: 'track'
    }));

    res.json(tracks);
  } catch (error) {
    console.error('API Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch music data' });
  }
};

const searchTracks = async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Query parameter q is required' });

  try {
    const response = await axios.get(`https://itunes.apple.com/search?term=${encodeURIComponent(q)}&limit=20&media=music`);

    const tracks = response.data.results.map(item => ({
      id: item.trackId.toString(),
      title: item.trackName,
      artist: item.artistName,
      album: item.collectionName,
      cover: item.artworkUrl100.replace('100x100', '600x600'),
      preview_url: item.previewUrl,
      duration: Math.floor(item.trackTimeMillis / 1000),
      type: 'track'
    }));

    res.json(tracks);
  } catch (error) {
    console.error('Search API Error:', error.message);
    res.status(500).json({ error: 'Failed to search music' });
  }
};

module.exports = { getNewReleases, searchTracks };
