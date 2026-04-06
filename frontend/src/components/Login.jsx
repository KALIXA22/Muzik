import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMusic } from "react-icons/fi";
import Logo from "../assets/music.avif";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [formData, setFormData] = useState({});
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(formData.email, formData.password);
    
    if (result.success) {
      setAlert({ type: "success", message: result.message });
      setTimeout(() => {
        setAlert(null);
        navigate("/dashboard");
      }, 800);
    } else {
      setAlert({ type: "error", message: result.message });
      setTimeout(() => setAlert(null), 2500);
    }
  };

  return (
    <>
      {/* Alert Notification */}
      {alert && (
        <div
          className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md border-2 font-semibold text-white animate-slide-down ${
            alert.type === "success"
              ? "bg-green-500/80 border-green-400 shadow-green-500/50"
              : "bg-red-500/80 border-red-400 shadow-red-500/50"
          }`}
        >
          {alert.message}
        </div>
      )}

      <section className="relative min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-[#fdfbfb] via-[#f3e7f3] to-[#e3d4f3] px-6 overflow-hidden">

        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d9a7c7]/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#3b2f63]/30 blur-[120px] rounded-full"></div>

        <div
          className="relative z-10 w-full max-w-md p-10 rounded-[32px]
          bg-white/30 backdrop-blur-xl border border-white/30
          shadow-2xl hover:scale-[1.02] transition"
        >
          <div className="flex justify-center mb-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-14 h-14 rounded-xl shadow-md"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#3b2f63] text-center mb-10 flex items-center justify-center gap-2">
            Welcome back
            <FiMusic className="animate-pulse" />
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full px-4 py-3 rounded-xl
                bg-white/40 backdrop-blur-md
                border border-white/40
                outline-none
                focus:border-[#d9a7c7]
                focus:ring-2 focus:ring-[#d9a7c7]/40"
                required
              />
              <label
                className="absolute left-4 top-3 text-sm text-[#3b2f63]/70
                transition-all
                peer-placeholder-shown:top-4
                peer-focus:-top-2
                peer-focus:text-xs
                peer-focus:text-[#3b2f63]
                bg-white/60 px-1 rounded"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password || ""}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full px-4 py-3 rounded-xl
                bg-white/40 backdrop-blur-md
                border border-white/40
                outline-none
                focus:border-[#d9a7c7]
                focus:ring-2 focus:ring-[#d9a7c7]/40"
                required
              />
              <label
                className="absolute left-4 top-3 text-sm text-[#3b2f63]/70
                transition-all
                peer-placeholder-shown:top-4
                peer-focus:-top-2
                peer-focus:text-xs
                peer-focus:text-[#3b2f63]
                bg-white/60 px-1 rounded"
              >
                Password
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-3xl mt-6
              bg-gradient-to-r from-[#d9a7c7] to-[#3b2f63]
              text-white font-semibold
              shadow-[0_0_20px_rgba(217,167,199,0.6)]
              hover:shadow-[0_0_40px_rgba(217,167,199,0.9)]
              transition"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-[#3b2f63]/80">
              Don't have an account?{" "}
            <Link to="/register" className="font-semibold hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Login;