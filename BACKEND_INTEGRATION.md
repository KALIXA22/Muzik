# Backend Integration Guide

This document explains how to connect your frontend to the Node.js backend.

## Environment Configuration

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## API Endpoints Required

### Authentication

- **POST** `/api/auth/register` - Register new user
- **POST** `/api/auth/login` - Login user
- **POST** `/api/auth/logout` - Logout user
- **POST** `/api/auth/refresh` - Refresh token

### Songs

- **GET** `/api/songs` - Get all songs
- **GET** `/api/songs/:id` - Get song by ID
- **POST** `/api/songs` - Create new song
- **PUT** `/api/songs/:id` - Update song
- **DELETE** `/api/songs/:id` - Delete song
- **POST** `/api/songs/upload` - Upload song file

### User

- **GET** `/api/user/profile` - Get user profile
- **PUT** `/api/user/profile` - Update user profile
- **GET** `/api/user/library` - Get user's song library

### Playlists

- **GET** `/api/playlists` - Get all playlists
- **POST** `/api/playlists` - Create playlist
- **GET** `/api/playlists/:id` - Get playlist by ID
- **PUT** `/api/playlists/:id` - Update playlist
- **DELETE** `/api/playlists/:id` - Delete playlist

## Expected Response Format

### Success Response

```json
{
  "success": true,
  "data": {
    /* response data */
  },
  "message": "Operation successful"
}
```

### Error Response

```json
{
  "success": false,
  "error": "Error message",
  "message": "Error details"
}
```

## Authentication

Requests to protected endpoints should include:

```
Authorization: Bearer {token}
```

The token is stored in `sessionStorage` under `authToken`.

## How to Uncomment API Calls

1. **In AuthContext.jsx** - Uncomment the fetch calls in `register()` and `login()` functions
2. **In MusicDashboard.jsx** - Uncomment the fetch call in `useEffect()` hook

Example:

```javascript
// Uncomment this to enable backend calls
// const response = await fetch(API_ENDPOINTS.SONGS.GET_ALL);
```

## Backend Expected Data Structure

### Song Object

```json
{
  "id": "123",
  "title": "Song Title",
  "artist": "Artist Name",
  "album": "Album Name",
  "duration": "3:45",
  "cover": "https://url-to-cover-image.jpg",
  "url": "https://url-to-audio-file.mp3"
}
```

### User Object

```json
{
  "id": "user-id",
  "name": "User Name",
  "email": "user@example.com",
  "avatar": "https://url-to-avatar.jpg"
}
```

### Login Response

```json
{
  "success": true,
  "data": {
    "token": "jwt-token",
    "user": {
      "id": "user-id",
      "name": "User Name",
      "email": "user@example.com"
    }
  }
}
```

## Common Issues & Solutions

### CORS Errors

Make sure your backend has CORS enabled:

```javascript
// In backend
app.use(cors());
```

### Token Expiration

The frontend automatically handles 401 errors by redirecting to login.

### Missing Data

Check the console for specific error messages if songs don't load.

## Files to Check/Modify

- `frontend/src/context/AuthContext.jsx` - Update login/register functions
- `frontend/src/pages/MusicDashboard.jsx` - Update fetchSongs function
- `frontend/src/api/config.js` - Update API endpoints if needed

---

For questions or issues, check the backend API documentation.
