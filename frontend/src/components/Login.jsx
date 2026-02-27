import {useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import Logo from '../assets/music.avif';
import Navbar from './Navbar';
function Login() {
  const [formData,setFormData] = useState({email:'',password:''});  
  const [alert,setAlert] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
      setAlert({type:'warning',message:'Please fill in all fields'});
      return;
    }
    if(formData.email ==='user@example.com' && formData.password === 'password123'){
      setAlert({type:'success',message:'Login successful! Redirecting...'});

      setTimeout(() => {
        setAlert(null);
        navigate('/');
      }, 800);
    } else {
      setAlert({type:'error',message:'Invalid email or password'});
      setTimeout(() => setAlert(null), 2500);
    }
  };
  
  return (
    <>
    <Navbar/>
    <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfbfb] via-[#f3e7f3] to-[#e3d4f3] px-6'>
      <div className="relative z-10 bg-white/20 backdrop-blur-xl p-10 w-full max-w-md rounded-3xl border border-white/30 shadow-2xl">
        <img src={Logo} alt="Logo" className="w-12 h-12 rounded-lg" />
        <h2 className="text-2xl font-bold text-[#3b2f63] mb-6 text-center">Welcome to Music🎧</h2>
     
      {alert && <Alert type={alert.type} message={alert.message} />}
      <form className="space-y-5" onSubmit={handleSubmit}>
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
        <div>
          <label className="block text-sm text-[#3b2f63] mb-1">Password</label>
          <input 
          type="password" 
          name="password"
          placeholder='........'
          value={formData.password}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-white/40 p-2 outline-none focus:border-[#3b2f63] transition"
          required
           />
        </div>

        <button type='submit'
        className='w-full py-3 rounded-3xl bg-gradient-to-r from-[#d9a7c7] to-[#3b2f63] text-white font-semibold shadow-md hover:shadow-lg transition'>
          Log In
        </button>

      </form>
      <p className="mt-6">
        Don't have an account?{" "}
         <Link to="/register" className="font-semibold hover:underline">Sign Up</Link>
      </p>
       </div>
    </section>
    </>
  )

}

export default Login;