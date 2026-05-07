import React from 'react';
import { FiMusic, FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 bg-[#0f172a] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
                <FiMusic className="text-xl text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Musica</span>
            </Link>
            <p className="text-white/40 leading-relaxed">
              The world's first decentralized high-fidelity music streaming platform. Designed for artists, built for audiophiles.
            </p>
            <div className="flex items-center gap-4">
              {[<FiInstagram />, <FiTwitter />, <FiFacebook />, <FiYoutube />].map((icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-slate-900 hover:border-white transition-all">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Library', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-violet-400 transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Legal</h4>
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Artist Agreement'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-violet-400 transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Stay in the Loop</h4>
            <p className="text-white/40 text-sm">Join our newsletter to get the latest music news and exclusive drops.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-violet-500 hover:text-white transition-all">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium">
          <p className="text-white/20">
            © {currentYear} Musica Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-white/20">
            <a href="#" className="hover:text-white transition-colors">Support Center</a>
            <a href="#" className="hover:text-white transition-colors">Developer Portal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;