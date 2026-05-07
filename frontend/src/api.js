import axios from "axios"

const apiBaseURL = import.meta.env.VITE_API_URL || "http://localhost:5000";
export const api = axios.create({
    baseURL: apiBaseURL,
});

const SPOTIFY_BASE_URL = "https://api.spotify.com/v1";
const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";