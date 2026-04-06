import React from "react";
import { FiMail, FiUser, FiMessageCircle } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="relative isolate py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-block px-5 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/30 text-sm">
            Get In Touch
          </div>

          <h2 className="text-4xl font-bold text-[#3b2f63]">Let’s Connect 🎧</h2>
          <p className="text-[#3b2f63]/80 text-lg max-w-md">
            Have questions, feedback, or partnership ideas? We’d love to hear from you. Music connects us — let’s start a conversation.
          </p>
        </div>

        {/* Right Form */}
        <div className="relative">
          <div className="absolute -inset-8 bg-[#d9a7c7]/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white/30 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-md space-y-5">

            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm text-[#3b2f63] font-medium flex items-center gap-2"><FiUser size={14}/> Name</label>
              <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-gray-400 p-2 outline-none focus:border-[#3b2f63] transition" />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm text-[#3b2f63] font-medium flex items-center gap-2"><FiMail size={14}/> Email</label>
              <input type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-gray-400 p-2 outline-none focus:border-[#3b2f63] transition" />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm text-[#3b2f63] font-medium flex items-center gap-2"><FiMessageCircle size={14}/> Message</label>
              <textarea rows="4" placeholder="Your Message" className="w-full bg-transparent border-b border-gray-400 p-2 outline-none focus:border-[#3b2f63] transition resize-none"></textarea>
            </div>

            <button className="w-full py-3 rounded-3xl bg-gradient-to-r from-[#d9a7c7] to-[#3b2f63] text-white font-semibold shadow-[0_0_20px_rgba(217,167,199,0.6)] hover:shadow-[0_0_40px_rgba(217,167,199,0.9)] transition">
              Send Message 🎶
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;