import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMusic, FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setAlert({ type: "warning", message: "Please fill in all fields" });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setAlert({ type: "error", message: "Passwords do not match" });
      return;
    }

    try {
      register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      setAlert({ type: "success", message: "Account created successfully! Redirecting..." });

      setTimeout(() => {
        setAlert(null);
        navigate("/login");
      }, 2000);
    } catch (error) {
      setAlert({ type: "error", message: "Registration failed. Please try again." });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0f172a] px-6 overflow-hidden font-['Outfit']">
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/20 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-600/20 blur-[120px] rounded-full animate-float delay-300"></div>
      </div>

      {/* Alert Notification */}
      {alert && (
        <div
          className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md border border-white/10 font-bold text-white animate-fade-down ${
            alert.type === "success"
              ? "bg-violet-500/80 shadow-violet-500/20"
              : alert.type === "error"
              ? "bg-red-500/80 shadow-red-500/20"
              : "bg-yellow-500/80 shadow-yellow-500/20"
          }`}
        >
          {alert.message}
        </div>
      )}

      <div className="relative z-10 w-full max-w-md animate-scale-in py-12">
        <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
          
          <div className="text-center space-y-4 mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-500 to-pink-500 shadow-lg shadow-violet-500/20 mb-2">
              <FiMusic className="text-3xl text-white animate-pulse" />
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Create Account
            </h2>
            <p className="text-white/40 text-sm font-medium">
              Join our community of music lovers today.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 ml-2 uppercase tracking-widest">Full Name</label>
              <div className="relative group">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-violet-400 transition-colors" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 ml-2 uppercase tracking-widest">Email Address</label>
              <div className="relative group">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-violet-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 ml-2 uppercase tracking-widest">Password</label>
              <div className="relative group">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-violet-400 transition-colors" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 ml-2 uppercase tracking-widest">Confirm Password</label>
              <div className="relative group">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-violet-400 transition-colors" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all font-medium"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 rounded-2xl mt-4 bg-white text-slate-900 font-bold text-lg shadow-xl shadow-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              Sign Up <FiArrowRight />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-white/40 text-sm font-medium">
              Already have an account?{" "}
              <Link to="/login" className="text-white font-bold hover:text-violet-400 transition-colors">
                Log in
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center pb-8">
          <Link to="/" className="text-white/30 hover:text-white transition-colors text-sm font-bold flex items-center justify-center gap-2">
             Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;