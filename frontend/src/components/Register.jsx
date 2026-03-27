import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMusic } from "react-icons/fi";
import Logo from "../assets/music.avif";



function Register() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
     const{name,value}=e.target;

     setFormData((prevData)=>({
      ...prevData,
      [name]:value
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

  setAlert({ type: "success", message: "Account created successfully!" });

  setTimeout(() => {
    setAlert(null);
    navigate("/login");
  }, 8000);
};
  return (
    <>

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
          <h2 className="text-2xl font-bold text-[#3b2f63] text-center mb-8 flex items-center justify-center gap-2">
            Secure the vibe
            <FiMusic className="animate-pulse" />  
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                peer-placeholder-shown:top-5
                peer-focus:-top-2
                peer-focus:text-xs
                
                bg-white/60 px-1 rounded"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                peer-placeholder-shown:top-3
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
                value={formData.password}
                onChange={handleChange}
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
                peer-placeholder-shown:top-3
                peer-focus:-top-2
                peer-focus:text-xs
                peer-focus:text-[#3b2f63]
                bg-white/60 px-1 rounded"
              >
                Password
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
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
                peer-placeholder-shown:top-3
                peer-focus:-top-2
                peer-focus:text-xs
                peer-focus:text-[#3b2f63]
                bg-white/60 px-1 rounded"
              >
               Confirm Password
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-3xl
              bg-gradient-to-r from-[#d9a7c7] to-[#3b2f63]
              text-white font-semibold
              shadow-[0_0_20px_rgba(217,167,199,0.6)]
              hover:shadow-[0_0_40px_rgba(217,167,199,0.9)]
              transition"
            >
              Sign Up
            </button>

          </form>

          <p className="mt-6 text-center text-[#3b2f63]/80">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold hover:underline">
               Log in
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Register;