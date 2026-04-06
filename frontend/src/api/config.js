// API Configuration for Backend Integration

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  // AUTH ENDPOINTS
  AUTH: {
    REGISTER: `${API_BASE_URL}/auth/register`,
    LOGIN: `${API_BASE_URL}/auth/login`,
    LOGOUT: `${API_BASE_URL}/auth/logout`,
    REFRESH: `${API_BASE_URL}/auth/refresh`,
  },
  
  // SONG ENDPOINTS
  SONGS: {
    GET_ALL: `${API_BASE_URL}/songs`,
    GET_BY_ID: (id) => `${API_BASE_URL}/songs/${id}`,
    CREATE: `${API_BASE_URL}/songs`,
    UPDATE: (id) => `${API_BASE_URL}/songs/${id}`,
    DELETE: (id) => `${API_BASE_URL}/songs/${id}`,
    UPLOAD: `${API_BASE_URL}/songs/upload`,
  },

  // USER ENDPOINTS
  USER: {
    GET_PROFILE: `${API_BASE_URL}/user/profile`,
    UPDATE_PROFILE: `${API_BASE_URL}/user/profile`,
    GET_LIBRARY: `${API_BASE_URL}/user/library`,
  },

  // PLAYLIST ENDPOINTS
  PLAYLISTS: {
    GET_ALL: `${API_BASE_URL}/playlists`,
    CREATE: `${API_BASE_URL}/playlists`,
    GET_BY_ID: (id) => `${API_BASE_URL}/playlists/${id}`,
    UPDATE: (id) => `${API_BASE_URL}/playlists/${id}`,
    DELETE: (id) => `${API_BASE_URL}/playlists/${id}`,
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
