import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`transition-all duration-500 ease-in-out fixed w-full z-50
      ${isScrolled
        ? 'py-3 backdrop-blur-md bg-gradient-to-r from-[#0f172a]/80 via-[#1e293b]/80 to-[#0f172a]/80 shadow-lg'
        : 'py-6 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]'}`}>
      
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-300">
          Vigneshwaran M
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-lg font-medium text-white">
          {['about', 'projects', 'contact', 'resume'].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="hover:text-cyan-300 hover:underline underline-offset-4 transition duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
  onClick={toggleMobileMenu}
  className="md:hidden text-3xl text-white hover:text-cyan-300 transition-colors duration-300"
>

          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1a2a33] px-6 pb-4 shadow-inner">
          <ul className="flex flex-col space-y-4 text-lg text-white">
            {['about', 'projects', 'contact', 'resume'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item}`}
                  onClick={toggleMobileMenu}
                  className="block hover:text-cyan-300 transition duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
