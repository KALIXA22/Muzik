import {useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import {FaGoogle, FaFacebookF} from 'react-icons/fa';
import Alert from './Alert';
import Logo from '../assets/music.avif';

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
    <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfbfb] via-[#f3e7f3] px-6'>
      <div className="relative z-10 bg-white/20 backdrop-blur-xl p-10 w-full max-w-md rounded-3xl border border-white/30 shadow-2xl">
        <img src={Logo} alt="Logo" className="w-12 h-12 rounded-lg" />
        <h2 className="text-2xl">Welcome to Music🎧</h2>
      </div>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-sm">Email</label>
          <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="space-y-2">
          <label className="text-sm">Password</label>
          <input 
          type="password" 
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </form>

    </section>



}