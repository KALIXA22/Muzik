// API Configuration for Backend Integration

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  // AUTH ENDPOINTS
  AUTH: {
    REGISTER: `${API_BASE_URL}/api/auth/register`,
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    LOGOUT: `${API_BASE_URL}/api/auth/logout`,
    REFRESH: `${API_BASE_URL}/api/auth/refresh`,
  },

  // SONG ENDPOINTS (Legacy/Cleaned)
  SONGS: {
    GET_ALL: `${API_BASE_URL}/api/songs`,
    GET_BY_ID: (id) => `${API_BASE_URL}/api/songs/${id}`,
    CREATE: `${API_BASE_URL}/api/songs`,
    UPDATE: (id) => `${API_BASE_URL}/api/songs/${id}`,
    DELETE: (id) => `${API_BASE_URL}/api/songs/${id}`,
    UPLOAD: `${API_BASE_URL}/api/songs/upload`,
  },

  // SPOTIFY ENDPOINTS
  SPOTIFY: {
    GET_NEW_RELEASES: `${API_BASE_URL}/api/spotify/new-releases`,
    SEARCH: (query) => `${API_BASE_URL}/api/spotify/search?q=${encodeURIComponent(query)}`,
  },

  // USER ENDPOINTS
  USER: {
    GET_PROFILE: `${API_BASE_URL}/api/user/profile`,
    UPDATE_PROFILE: `${API_BASE_URL}/api/user/profile`,
    GET_LIBRARY: `${API_BASE_URL}/api/user/library`,
  },

  // PLAYLIST ENDPOINTS
  PLAYLISTS: {
    GET_ALL: `${API_BASE_URL}/api/playlists`,
    CREATE: `${API_BASE_URL}/api/playlists`,
    GET_BY_ID: (id) => `${API_BASE_URL}/api/playlists/${id}`,
    UPDATE: (id) => `${API_BASE_URL}/api/playlists/${id}`,
    DELETE: (id) => `${API_BASE_URL}/api/playlists/${id}`,
  },
};

// API Helper Functions
export const apiCall = async (url, options = {}) => {
  const token = sessionStorage.getItem('authToken');

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (response.status === 401) {
      // Handle unauthorized - redirect to login
      sessionStorage.removeItem('authToken');
      window.location.href = '/login';
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API Error');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export default API_ENDPOINTS;
