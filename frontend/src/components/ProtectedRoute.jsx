import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#fdfbfb] via-[#f3e7f3] to-[#e3d4f3]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#3b2f63]/30 border-t-[#d9a7c7] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#3b2f63] font-semibold">Loading your music...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
