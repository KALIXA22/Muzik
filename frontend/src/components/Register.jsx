import React from 'react'
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Navbar from './Navbar';

function Register() {
    const[formData,setFormData] = useState({username:"",email:"",password:"",confirmPassword:""});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.username || !formData.email || !formData.password || !formData.confirmPassword){
            alert("Please fill in all fields");
            return;
        }
        if(formData.password !== formData.confirmPassword){
            alert("Passwords do not match");
            return;
        }
        alert("Registration successful! Redirecting to login...");
        navigate('/login');
    }

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfbfb] via-[#f3e7f3] to-[#e3d4f3] px-6">
      <div className="w-full max-w-md p-10 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
        <h2 className="text-2xl font-bold text-[#3b2f63] mb-6 text-center">
          Create Account 🎶
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block text-sm text-[#3b2f63] mb-1">Username</label>
            <input 
              type="text" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder='Enter your username'
              className="w-full bg-transparent border-b border-white/40 p-2 outline-none focus:border-[#3b2f63] transition"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm text-[#3b2f63] mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='you@example.com'
              className="w-full bg-transparent border-b border-white/40 p-2 outline-none focus:border-[#3b2f63] transition"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm text-[#3b2f63] mb-1">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='........'
              className="w-full bg-transparent border-b border-white/40 p-2 outline-none focus:border-[#3b2f63] transition"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm text-[#3b2f63] mb-1">Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder='........'
              className="w-full bg-transparent border-b border-white/40 p-2 outline-none focus:border-[#3b2f63] transition"
              required
            />
          </div>
          <button type='submit' className='w-full py-3 rounded-3xl bg-gradient-to-r from-[#d9a7c7] to-[#3b2f63] text-white font-semibold shadow-md hover:shadow-lg transition'>
            Sign Up
          </button>
        </form>
        <p className='mt-6'>
          Already have an account?{" "}
          <Link to="/login" className='font-semibold hover:underline'>Log In</Link>
        </p>
      </div>
    </section>
    </>
  )
}

export default Register