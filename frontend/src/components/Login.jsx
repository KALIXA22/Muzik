import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMusic, FiMail, FiLock, FiArrowRight, FiZap } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import musicBg from '../assets/music.jpg';

function Login() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    try {
      const result = await login(formData.email, formData.password);
      if (result.success) {
        setAlert({ type: "success", message: "Welcome back to the sound." });
        setTimeout(() => navigate("/dashboard"), 1500);
      } else {
        setAlert({ type: "error", message: result.message || "Authentication failed." });
      }
    } catch (err) {
      setAlert({ type: "error", message: "Connection lost. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#060a16] px-6 overflow-hidden font-['Outfit']">
      
      {/* Background with deep cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={musicBg}
          alt="Music Vibe"
          className="w-full h-full object-cover opacity-30"
          style={{ filter: 'blur(20px) saturate(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#060a16] via-[#060a16]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[440px] animate-fade-up">
        
        {/* Main Card */}
        <div className="relative p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[48px]">
          <div className="relative p-10 md:p-14 rounded-[44px] bg-[#0c1222]/90 backdrop-blur-3xl shadow-2xl overflow-hidden border border-white/5">
            
            {/* Header */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8">
                 <FiMusic className="text-3xl text-violet-500" />
              </div>
              <h2 className="text-4xl font-extrabold text-white tracking-tight mb-2 italic">Login</h2>
              <p className="text-white/30 text-xs font-medium tracking-widest uppercase">Enter your credentials</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-8">
              <div className="space-y-6">
                {/* Refined Email Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
                    <FiMail className="text-white/20 group-focus-within:text-violet-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="block w-full pl-10 pr-4 py-4 bg-transparent border-b border-white/10 text-white font-medium placeholder:text-white/10 focus:outline-none focus:border-violet-500 transition-all text-sm tracking-wide"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-pink-500 group-focus-within:w-full transition-all duration-500"></div>
                </div>

                {/* Refined Password Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
                    <FiLock className="text-white/20 group-focus-within:text-pink-500 transition-colors" />
                  </div>
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    className="block w-full pl-10 pr-4 py-4 bg-transparent border-b border-white/10 text-white font-medium placeholder:text-white/10 focus:outline-none focus:border-pink-500 transition-all text-sm tracking-wide"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-violet-500 group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>

              <div className="flex items-center justify-end pt-2">
                <button type="button" className="text-[10px] font-bold text-white/20 hover:text-white uppercase tracking-widest transition-colors">
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="relative w-full py-5 rounded-2xl bg-white text-slate-900 font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-xl disabled:opacity-50 overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-3">
                  {loading ? "Connecting..." : "Sign In"}
                  {!loading && <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />}
                </span>
              </button>
            </form>

            <div className="mt-12 text-center">
              <p className="text-white/20 text-xs font-medium">
                New to Musica?{" "}
                <Link to="/register" className="text-violet-400 hover:text-violet-300 transition-colors font-bold">
                  Create Profile
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Status Alerts */}
        {alert && (
          <div className={`mt-8 p-4 rounded-2xl border text-center animate-fade-up ${
            alert.type === 'success' ? 'bg-violet-500/10 border-violet-500/20 text-violet-400' : 'bg-red-500/10 border-red-500/20 text-red-400'
          }`}>
            <span className="text-xs font-bold uppercase tracking-widest italic">{alert.message}</span>
          </div>
        )}

      </div>
    </div>
  );
}

export default Login;