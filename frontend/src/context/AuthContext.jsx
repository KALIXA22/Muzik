import React, { createContext, useContext, useState, useEffect } from 'react';

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
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const register = (userData) => {
    // Store user data temporarily
    sessionStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  const login = (email, password) => {
    // Simple demo validation - replace with backend API later
    // For now, accept any email/password combination
    const user = { email, id: Math.random().toString(36).substr(2, 9) };
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
    return { success: true, message: 'Login successful!' };
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
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
