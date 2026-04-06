import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Register from './components/Register'
import Login from './components/Login'
import MusicDashboard from "./pages/MusicDashboard";
import { Music } from "lucide-react";


function App() {
  return (
    
      
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/dashboard" element={<MusicDashboard/>} /> 

      </Routes>
     
    
  );
}

export default App;