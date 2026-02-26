import React from 'react'

function Login() {
  return (
    <section className='relative h-screen flex items-center justify-center bg-gradient-to-r from-[#d9a7c7] via-[#fffcdc] to-[#1e1e3f]'>
      <div className='relative z-10 bg-white/40 backdrop-blur-md p-10 w-[350px] rounded-3xl shadow-2xl border border-white/30'>

        <h2 className='text-2xl font-bold mb-2 text-[#3b2f63] '>
          Welcome to Music 🎧
        </h2>

        <p className="text-sm text-gray-700 mb-6">
          It's a pleasure seeing you here!
        </p>

        <form className='space-y-6'>

          <div>
            <label className='block text-sm font-medium mb-1 text-gray-800'>
              Username
            </label>
            <input 
              type="text" 
              placeholder='Username'
              className='w-full bg-transparent border-b border-gray-500 p-2 outline-none focus:border-[#3b2f63] transition'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-1 text-gray-800'>
              Email
            </label>
            <input 
              type="email" 
              placeholder='Email'
              className='w-full bg-transparent border-b border-gray-500 p-2 outline-none focus:border-[#3b2f63] transition'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-1 text-gray-800'>
              Password
            </label>
            <input 
              type="password" 
              placeholder='Password'
              className='w-full bg-transparent border-b border-gray-500 p-2 outline-none focus:border-[#3b2f63] transition'
              required
            />
          </div>

          <button 
            type='submit' 
            className='w-full py-3 rounded-full bg-[#1e1e3f] text-white font-semibold hover:bg-[#2e2e5e] transition duration-300 shadow-lg'
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-sm text-gray-700">
          Don't have an account?{" "}
          <a href="#" className="font-semibold text-[#3b2f63] hover:underline">
            Sign Up
          </a>
        </p>

      </div>

    </section>
  )
}

export default Login