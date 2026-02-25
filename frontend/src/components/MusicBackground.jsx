import React, { useEffect, useState } from "react";

function PremiumMusicBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 50; // bigger movement
      const y = (e.clientY / window.innerHeight - 0.5) * 50;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-gradient-to-br from-[#0f0f1a] via-[#1b1b2f] to-[#111122]">

      <style>{`
        @keyframes equalizer {
          0%,100% { height: 20px; }
          50% { height: 80px; }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes particle {
          0% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 0.7; }
          100% { opacity: 0.3; transform: translateY(-40px); }
        }
      `}</style>

      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 bg-purple-400/60 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: "particle 8s infinite ease-in-out",
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      <div
        className="absolute top-20 left-20 w-48 h-48 rounded-full shadow-2xl flex items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 40%, #000 100%)",
          animation: "spinSlow 20s linear infinite",
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg"></div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1 items-end">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="w-2 bg-gradient-to-t from-purple-500 to-pink-400 rounded-full"
            style={{
              height: "40px",
              animation: "equalizer 1s infinite ease-in-out",
              animationDelay: `${i * 0.08}s`
            }}
          />
        ))}
      </div>

      <div
        className="absolute top-32 right-32 text-6xl text-purple-400/30"
        style={{ animation: "float 5s ease-in-out infinite" }}
      >
        ♪
      </div>

      <div
        className="absolute bottom-40 left-40 text-5xl text-pink-400/30"
        style={{ animation: "float 6s ease-in-out infinite", animationDelay: "1s" }}
      >
        ♫
      </div>

      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl"></div>

    </div>
  );
}

export default PremiumMusicBackground;