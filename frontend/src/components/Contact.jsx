import React from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-[#0f172a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Info Side */}
          <div className="space-y-12 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                Get In Touch
              </div>
              <h2 className="text-5xl font-bold text-white">Let's Talk <span className="gradient-text">Music.</span></h2>
              <p className="text-white/50 text-lg max-w-md">
                Have questions about our platform or want to partner with us? We're always open to new frequencies.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <FiMail />, label: 'Email', value: 'hello@musica.io' },
                { icon: <FiPhone />, label: 'Phone', value: '+1 (555) 000-0000' },
                { icon: <FiMapPin />, label: 'Studio', value: '123 Audio Ave, Sound City' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 text-xl group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300 shadow-lg shadow-cyan-500/0 group-hover:shadow-cyan-500/20">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-white text-lg font-bold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="relative animate-fade-up delay-200">
            <div className="absolute -inset-4 bg-cyan-500/10 blur-[80px] rounded-full"></div>
            <div className="relative p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/60 ml-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/60 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-2">Subject</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all appearance-none">
                    <option className="bg-slate-900">General Inquiry</option>
                    <option className="bg-slate-900">Artist Partnership</option>
                    <option className="bg-slate-900">Technical Support</option>
                    <option className="bg-slate-900">Business Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-2">Your Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us what's on your mind..." 
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-500 text-white font-bold text-lg shadow-xl shadow-violet-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                  Send Message <FiSend />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;