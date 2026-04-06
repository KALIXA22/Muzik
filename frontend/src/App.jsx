import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Register from './components/Register'
import Login from './components/Login'
import MusicDashboard from "./pages/MusicDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/login" element={<Login/>} />
         <Route 
           path="/dashboard" 
           element={
             <ProtectedRoute>
               <MusicDashboard />
             </ProtectedRoute>
           } 
         /> 
      </Routes>
    </AuthProvider>
  );
}

export default App;