import React, { useState, useEffect } from 'react';
import {
  FaLinkedinIn,
  FaDownload,
  FaGithub,
  FaRegCopy,
  FaArrowUp
} from 'react-icons/fa';
import ProfileImg from '../assets/Profile.jpg';

const Sidebar = ({ isOpen }) => {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('yashsharma14jan@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-[rgba(31,31,42,0.95)] text-white w-full md:w-72 p-4 md:p-8 flex flex-col items-center shadow-2xl z-50 transition-transform duration-300 backdrop-blur-lg
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:w-72`}
      role="complementary"
    >
      {/* Scroll Progress Bar */}
      <div className="absolute left-0 top-0 h-full w-2 bg-transparent z-50">
        <div
          className="w-full bg-yellow-400 rounded-full transition-all duration-200"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Profile Section - Enhanced UI */}
      <div className="w-full flex flex-col items-center bg-[rgba(35,35,58,0.8)] rounded-3xl shadow-3xl p-8 mb-6 hover:scale-105 hover:shadow-yellow-500/40 transition-all duration-500 border border-yellow-600/30">
        <div className="relative group mb-4">
          <img
            src={ProfileImg}
            alt="Yash Sharma Profile"
            className="w-32 h-32 rounded-full border-5 border-yellow-500 shadow-xl object-cover group-hover:scale-110 transition-transform duration-400 transform hover:-rotate-3"
            loading="lazy"
          />
          <span className="absolute inset-0 rounded-full border-5 border-yellow-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow transition-all duration-500"></span>
        </div>
        <h2 className="text-3xl font-extrabold text-center text-yellow-400 mb-2 drop-shadow-lg">Yash Sharma</h2>
        <p className="text-gray-200 text-lg mb-2 tracking-wide">React Developer</p>
        <p className="text-gray-300 text-md mb-3 font-light">Frontend Enthusiast</p>
        <span className="inline-block bg-yellow-400/30 text-yellow-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-3 border border-yellow-500/50">Open to Work</span>
        
        <div className="text-gray-400 text-sm mb-4 text-center leading-relaxed">
          <div className="flex items-center justify-center gap-2 mb-1">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
            Pune, Maharashtra
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74A1 1 0 0118 16.847V17a1 1 0 01-1 1H3a1 1 0 01-1-1V3z"></path></svg>
            +91 9881216105
          </div>
        </div>

        

        <div className="flex justify-center gap-6 mb-5 mt-3">
          <a href="https://www.linkedin.com/in/yashsharma14jan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0A66C2] transition-transform duration-300 hover:scale-125 text-2xl" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://github.com/yashsharma14jan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-125 text-2xl" aria-label="GitHub"><FaGithub /></a>
        </div>
        
        <a
          href="/REACT_DEV_YASH_SHARMA.pdf"
          download
          className="group relative uppercase text-sm px-6 py-2.5 tracking-wider text-black bg-gradient-to-r from-yellow-800 to-amber-500 rounded-full shadow-lg hover:shadow-yellow-400/70 transition-all duration-400 hover:scale-105 flex items-center gap-2 font-bold transform hover:-translate-y-1 whitespace-nowrap"
        >
          Download CV
          <FaDownload className="text-black group-hover:animate-bounce" />
          <span className="absolute inset-0 rounded-full ring-2 text-black ring-yellow-300 opacity-0 group-hover:opacity-60 group-hover:animate-ping-fast"></span>
        </a>
      </div>
      <div className="flex items-center gap-2 mb-4 p-2 bg-gray-700/50 rounded-lg group">
          <a href="mailto:yashsharma14jan@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-md block">
            yashsharma14jan@gmail.com
          </a>
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 p-1 rounded-full hover:bg-gray-600"
            title="Copy Email"
            aria-label="Copy Email"
          >
            <FaRegCopy />
          </button>
          {copied && <span className="text-xs text-yellow-400 ml-1 animate-fade-in">Copied!</span>}
        </div>

      {/* Footer */}
      <div className="mt-auto text-xs text-gray-500 pt-4 text-center flex flex-col items-center gap-2">
        <span>© {new Date().getFullYear()} Yash Sharma</span>
      </div>
    </aside>
  );
};

export default Sidebar;