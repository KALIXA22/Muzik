import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0f172a]">
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            <div className="w-16 h-16 border-4 border-white/5 border-t-violet-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full"></div>
          </div>
          <p className="text-white/60 font-bold tracking-widest uppercase text-xs animate-pulse">Loading your music...</p>
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
