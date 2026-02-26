import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center space-y-12">

        {/* Title */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-[#3b2f63]">Connect with Us</h3>
          <p className="text-[#3b2f63]/70 text-sm">Stay in rhythm with every drop.</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          {[FaInstagram, FaTwitter, FaLinkedinIn].map((Icon) => (
            <div
              key={Icon.name}
              className="h-12 w-12 rounded-3xl bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center text-[#3b2f63] hover:shadow-[0_0_25px_rgba(217,167,199,0.8)] hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <Icon />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#3b2f63]/40 to-transparent"></div>

        {/* Copyright */}
        <p className="text-sm text-[#3b2f63]/70">© {new Date().getFullYear()} Music. All rights reserved.</p>

      </div>
    </footer>
  );
}