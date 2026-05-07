import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    const token = sessionStorage.getItem('authToken');
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    try {
      const data = await authAPI.register(userData);
      // Depending on backend implementation, we might auto-login or just redirect to login
      return { success: true, message: data.message || "Account created successfully!" };
    } catch (error) {
      return { success: false, message: error.message || "Registration failed." };
    }
  };

  const login = async (email, password) => {
    try {
      const data = await authAPI.login(email, password);
      
      // Store user and token
      const userData = data.user || { email };
      setUser(userData);
      sessionStorage.setItem('user', JSON.stringify(userData));
      
      if (data.token) {
        sessionStorage.setItem('authToken', data.token);
      } else if (data.accessToken) {
        sessionStorage.setItem('authToken', data.accessToken);
      }

      return { success: true, message: 'Login successful!' };
    } catch (error) {
      return { success: false, message: error.message || 'Login failed.' };
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('authToken');
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
