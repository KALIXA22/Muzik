const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

let accessToken = '';
let tokenExpirationTime = 0;

const getAccessToken = async () => {
  const currentTime = Date.now();
  if (accessToken && currentTime < tokenExpirationTime) {
    return accessToken;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Spotify Client ID or Client Secret is missing in .env');
  }

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');

  const response = await axios.post('https://accounts.spotify.com/api/token', params, {
    headers: {
      'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  accessToken = response.data.access_token;
  tokenExpirationTime = Date.now() + response.data.expires_in * 1000;
  return accessToken;
};

const getNewReleases = async (req, res) => {
  try {
    const token = await getAccessToken();
    const response = await axios.get('https://api.spotify.com/v1/browse/new-releases?limit=12', {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    const tracks = response.data.albums.items.map(album => ({
      id: album.id,
      title: album.name,
      artist: album.artists.map(a => a.name).join(', '),
      album: album.name,
      cover: album.images[0].url,
      release_date: album.release_date,
      type: 'album'
    }));

    res.json(tracks);
  } catch (error) {
    if (error.response) {
      console.error('Spotify API Error Response:', error.response.data);
      console.error('Spotify API Error Status:', error.response.status);
    } else {
      console.error('Spotify API Error:', error.message);
    }
    res.status(500).json({ error: 'Failed to fetch from Spotify' });
  }
};

const searchTracks = async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Query parameter q is required' });

  try {
    const token = await getAccessToken();
    const response = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=track&limit=12`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    const tracks = response.data.tracks.items.map(track => ({
      id: track.id,
      title: track.name,
      artist: track.artists.map(a => a.name).join(', '),
      album: track.album.name,
      cover: track.album.images[0].url,
      preview_url: track.preview_url,
      duration: Math.floor(track.duration_ms / 1000), // in seconds
      type: 'track'
    }));

    res.json(tracks);
  } catch (error) {
    if (error.response) {
      console.error('Spotify Search Error Response:', error.response.data);
    } else {
      console.error('Spotify Search Error:', error.message);
    }
    res.status(500).json({ error: 'Failed to search Spotify' });
  }
};

module.exports = { getNewReleases, searchTracks };
