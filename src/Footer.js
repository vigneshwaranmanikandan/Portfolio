import React from 'react';

function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12 shadow-2xl rounded-t-3xl border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-extrabold mb-3 bg-gradient-text text-transparent bg-clip-text drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]">
            Vigneshwaran M
          </h2>
          <p className="text-sm text-gray-400 animate-pulse drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400 mb-3">
            Crafted with <span className="text-yellow-400 animate-glow">❤️</span> using React & Tailwind CSS
          </p>
          {/* <p className="text-sm text-gray-400">
            <a
              href="#"
              className="hover:text-white transform hover:scale-110 transition-all duration-300 hover:translate-y-1 hover:drop-shadow-glow"
            >
              Back to top ↑
            </a>
          </p> */}
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6">
        <p className="text-center text-xs text-gray-500 space-x-3">
          <a 
            href="https://github.com/vigneshwaranmanikandan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transform hover:scale-110 transition-all duration-300 hover:rotate-1 hover:drop-shadow-glow"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/vigneshwaranms/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transform hover:scale-110 transition-all duration-300 hover:-rotate-1 hover:drop-shadow-glow"
          >
            LinkedIn
          </a>
          <a 
            href="tel:+918807118015"
            className="hover:text-white transform hover:scale-110 transition-all duration-300 hover:translate-y-1 hover:drop-shadow-glow"
          >
            Phone
          </a>
        </p>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .bg-gradient-text {
          background: linear-gradient(270deg, 
            #ff7e5f, #feb47b, #ff7e5f, 
            #a6c0fe, #f68e9e, #7F00FF, 
            #E100FF, #FF4B2B, #FF416C, #FF7E5F
          );
          background-size: 600% 600%;
          animation: wave 10s ease-in-out infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .animate-glow {
          animation: glow 1.5s infinite alternate;
        }

        @keyframes glow {
          from { text-shadow: 0 0 5px #facc15, 0 0 10px #facc15; }
          to { text-shadow: 0 0 15px #facc15, 0 0 30px #facc15; }
        }

        .hover\\:drop-shadow-glow:hover {
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.6));
        }
      `}</style>
    </footer>
  );
}

export default Footer;

