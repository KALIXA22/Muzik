import { API_ENDPOINTS } from './config';

/**
 * Make authenticated API calls
 * @param {string} url - The API endpoint URL
 * @param {object} options - Fetch options (method, body, headers, etc.)
 * @returns {Promise} - The API response
 */
export const fetchAPI = async (url, options = {}) => {
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

    // Handle unauthorized
    if (response.status === 401) {
      sessionStorage.removeItem('authToken');
      window.location.href = '/login';
      return;
    }

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || `Error: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Auth API Calls
export const authAPI = {
  register: (userData) =>
    fetchAPI(API_ENDPOINTS.AUTH.REGISTER, {
      method: 'POST',
      body: JSON.stringify(userData),
    }),

  login: (email, password) =>
    fetchAPI(API_ENDPOINTS.AUTH.LOGIN, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  logout: () =>
    fetchAPI(API_ENDPOINTS.AUTH.LOGOUT, { method: 'POST' }),

  refresh: () =>
    fetchAPI(API_ENDPOINTS.AUTH.REFRESH, { method: 'POST' }),
};

// Song API Calls
export const songAPI = {
  getAll: () =>
    fetchAPI(API_ENDPOINTS.SONGS.GET_ALL),

  getById: (id) =>
    fetchAPI(API_ENDPOINTS.SONGS.GET_BY_ID(id)),

  create: (songData) =>
    fetchAPI(API_ENDPOINTS.SONGS.CREATE, {
      method: 'POST',
      body: JSON.stringify(songData),
    }),

  update: (id, songData) =>
    fetchAPI(API_ENDPOINTS.SONGS.UPDATE(id), {
      method: 'PUT',
      body: JSON.stringify(songData),
    }),

  delete: (id) =>
    fetchAPI(API_ENDPOINTS.SONGS.DELETE(id), {
      method: 'DELETE',
    }),

  upload: (formData) =>
    fetch(API_ENDPOINTS.SONGS.UPLOAD, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
      },
      body: formData,
    }).then(res => res.json()),
};

// User API Calls
export const userAPI = {
  getProfile: () =>
    fetchAPI(API_ENDPOINTS.USER.GET_PROFILE),

  updateProfile: (userData) =>
    fetchAPI(API_ENDPOINTS.USER.UPDATE_PROFILE, {
      method: 'PUT',
      body: JSON.stringify(userData),
    }),

  getLibrary: () =>
    fetchAPI(API_ENDPOINTS.USER.GET_LIBRARY),
};

// Playlist API Calls
export const playlistAPI = {
  getAll: () =>
    fetchAPI(API_ENDPOINTS.PLAYLISTS.GET_ALL),

  create: (playlistData) =>
    fetchAPI(API_ENDPOINTS.PLAYLISTS.CREATE, {
      method: 'POST',
      body: JSON.stringify(playlistData),
    }),

  getById: (id) =>
    fetchAPI(API_ENDPOINTS.PLAYLISTS.GET_BY_ID(id)),

  update: (id, playlistData) =>
    fetchAPI(API_ENDPOINTS.PLAYLISTS.UPDATE(id), {
      method: 'PUT',
      body: JSON.stringify(playlistData),
    }),

  delete: (id) =>
    fetchAPI(API_ENDPOINTS.PLAYLISTS.DELETE(id), {
      method: 'DELETE',
    }),
};

export default { authAPI, songAPI, userAPI, playlistAPI };
